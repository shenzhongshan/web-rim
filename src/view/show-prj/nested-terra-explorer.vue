<template>
  <div class="te-wrapper" >
    <Layout class="full">
      <Content>
        <Row class="row">
          <i-Col span="20" class="hfull">
            <object ref="TE3DExternal"  classid="clsid:3a4f9196-65a8-11d5-85c1-0001023952c1"  width="100%" height="100%"></object>
          </i-Col>
          <i-Col span="4" class="hfull">
            <object ref="TEInfoExternal" classid="clsid:3a4f919b-65a8-11d5-85c1-0001023952c1" width="100%" height="100%"></object>
          </i-Col>
        </Row>
      </Content>
      <Sider width='5'>
        <div @mouseover="dockDrawer" class="full"></div>
      </Sider>
    </Layout>

    <Drawer v-model="showWindowBDrawer"
      :width="20"
      :placement="placement"
      :draggable="draggable"
      :scrollable="true"
      :mask="false"
      :mask-closable="false"
      :styles="{padding: '0'}"
      @on-close="onCloseDrawer"
      v-if="sgWorld != null">
      <iframe frameborder="0" src="" style="position: absolute;right: 0px; top: 0px; overflow: hidden; width: 100%; height: 100%; z-index: -1;"></iframe>
      <div slot="header">
        <iframe frameborder="0" src="" style="position: absolute;right: 0px; top: 0px; overflow: hidden; width: 100%; height: 100%; z-index: -1;"></iframe>
        <Icon type="md-aperture" :size="18"></Icon>
        <b>控制面板</b>
      </div>
      <ControlPanel :sgWorld="sgWorld"/>
    </Drawer>
  </div>
</template>

<script>
/* eslint-disable */
import ControlPanel from './control-panel-te.vue'
import SGWorldCommands from './sgWorld-commands'
import SKCommonTools from './SKCommonTools.js'
import DMXClass from './DMXClass.js'
import { mapMutations } from 'vuex'
export default {
  name: 'TerraExplorer',
  components: {
    ControlPanel
  },
  props: {
    projectURL: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      showWindowBDrawer: false,
      placement: 'right',
      draggable: false,
      sgWorld: null,
      commonVar: {
        sgWorld: null,
        skTools:null,
        mCurCaseID: null,
        baselineID: null,       
        mileageReady: false,
        dmx: null,
      }
    }
  },
  computed: {

  },
  methods: {
    ...mapMutations([
      'setSGWorldCommand',
      'setMileageReady'
    ]),
    dockDrawer (event) {
      console.log(event)
      this.showWindowBDrawer = true
      //this.$refs.TEInfoExternal.style.display = 'none'
    },
    onCloseDrawer (event) {
      console.log(event)
      //this.$refs.TEInfoExternal.style.display = 'block'
    },
    handleResize (event) {
      console.log('atMin')
    },
    show () {
      setTimeout(()=>{
        if (this.projectURL) {
          this.sgWorld = this.$refs.TE3DExternal.CreateInstance('TerraExplorerX.SGWorld70')
          this.commonVar.sgWorld = this.sgWorld
        }
      },5000)
    },
    onLoadFinished (){
      debugger
      this.$refs.TEInfoExternal.AttachTo3dWindow(this.$refs.TE3DExternal)
      this.commonVar.mCurCaseID = this.commonVar.skTools.FindFirstCaseID()
      this.commonVar.baselineID = this.commonVar.skTools.FindFirstObjectID('基线', this.commonVar.mCurCaseID)
      try{
        this.commonVar.baselineobj = this.sgWorld.ProjectTree.GetObject(this.commonVar.baselineID)
      }catch(error){
        console.log(error)
      }

      if(this.commonVar.baselineobj){
        this.commonVar.dmx.DMX_DrawBySetLC(this.commonVar.baselineobj)
        this.commonVar.mileageReady = true
        this.setMileageReady(true)
      }else{
        this.setMileageReady(false)
        this.commonVar.mileageReady = false
      }
      //定位到默认位置
      let vid = this.commonVar.skTools.FindFirstObjectID('视野', "")
      if(vid!="") this.sgWorld.Navigate.FlyTo(vid,0)
      this.sgWorld.AttachEvent('OnLButtonClicked', this.onLButtonClicked)
      this.sgWorld.AttachEvent('OnProjectTreeAction', this.onProjectTreeAction)

  },
  onProjectTreeAction (id, action) {
    
    if (action.Code === 21) {

      let mcid = this.commonVar.skTools.JudgeProjectNode(id);
      if(this.commonVar.mCurCaseID==mcid) return;
      this.commonVar.mCurCaseID=mcid

      if(this.commonVar.mCurCaseID=="")   //选择方案无效，应禁用部分菜单
      {
          this.commonVar.mileageReady = false;
          this.setMileageReady(false);
          this.commonVar.baselineID = this.commonVar.skTools.FindFirstObjectID('基线', this.commonVar.mCurCaseID)
          return;
      }

      //有效方案

      this.commonVar.baselineID = this.commonVar.skTools.FindFirstObjectID('基线', this.commonVar.mCurCaseID)
      
      let baselineobj = this.sgWorld.ProjectTree.GetObject(this.commonVar.baselineID)

      if(baselineobj){
        this.commonVar.dmx.DMX_DrawBySetLC(baselineobj)  //建立里程系
        this.commonVar.mileageReady = true
        this.setMileageReady(true)
      }


    }
  },
  onLButtonClicked (Flags, X, Y) {
   // debugger
    if (Flags != 4) return false
      let mpos = this.sgWorld.Window.GetMouseInfo()
      let wp = this.sgWorld.Window.PixelToWorld(mpos.X, mpos.Y).Position.ToAbsolute()
      let sResult = "地理坐标：" + wp.X.toFixed(6) + "," + wp.Y.toFixed(6) + "," + wp.Altitude.toFixed(2)
      if (!this.commonVar.mileageReady){
          this.sgWorld.Window.ShowMessageBarText(sResult,1,20000)
          return false
      }

      if (this.commonVar.mCurCaseID === ""){
        sResult += "【无线位方案关联】请在结构树上选择节点关联线位查看里程";
        this.sgWorld.Window.ShowMessageBarText(sResult,1,20000)
        return false;
      }

      let sn = this.sgWorld.ProjectTree.GetItemName(this.commonVar.mCurCaseID);
      let len = this.commonVar.dmx.endlc - this.commonVar.dmx.firstlc
      sResult += "当前方案：【" + sn + "】   线路长度：" + len.toFixed(2)
     // debugger
      let [pos, lc, offset] = this.commonVar.dmx.GetBLPointByWxy(mpos.X, mpos.Y);
      let th = this.commonVar.dmx.DMX_getTrackH(lc)

      let str = "";
      if (offset >= 0) {
        sResult += "位置：" + lc.toFixed(2) + "; 轨面高：" + th.toFixed(2) + "; 净高：" + (th - wp.Altitude).toFixed(2) + "; 偏离距离:(左)" + offset.toFixed(2)
      } else {
        offset = Math.abs(offset)
        sResult += "位置：" + lc.toFixed(2) + "; 轨面高：" + th.toFixed(2) + "; 净高：" + (th - wp.Altitude).toFixed(2) + "; 偏离距离:(右)" + offset.toFixed(2)
      }
      this.sgWorld.Window.ShowMessageBarText(sResult,1,5000)
      return false
    }
  },
  watch: {
    projectURL: function (val) {
      console.log(`projectURL: ${val}`)
      if (val) {
        this.show()
      }
    },
    sgWorld: function(val){
      if (this.sgWorld) {
        this.commonVar.sgWorld = this.sgWorld
        this.commonVar.skTools = new SKCommonTools(this.sgWorld)
        this.commonVar.dmx = new DMXClass(this.sgWorld, this)
        this.setSGWorldCommand(new SGWorldCommands(this.sgWorld,this.commonVar.dmx, this.commonVar))
        this.sgWorld.AttachEvent('OnLoadFinished', this.onLoadFinished)
        this.sgWorld.Project.Open(this.projectURL)

      }
    }
  },
  mounted () {
    console.log('mounted!')
    this.show()
  },
  updated () {
    console.log('updated!')
  },
  destroyed () {
    console.log('destroyed!')
    this.setSGWorldCommand(null)
  },
  activated () {
    console.log('activated!')
  },
  deactivated () {
    console.log('deactivated!')
    this.setSGWorldCommand(null)
  }
}
</script>

<style scoped lang="less">
.wfull{
  width: 100%;
}
.hfull{
  height: 100%;
}
.full{
  .hfull;
  .wfull
}
.te-wrapper{
  .full;
  .row{
    height: 99%;
  };
}
</style>
