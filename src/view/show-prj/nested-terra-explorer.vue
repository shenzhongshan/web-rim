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
      sgWorld: null,
      showWindowBDrawer: false,
      placement: 'right',
      draggable: false
    }
  },
  computed: {

  },
  methods: {
    ...mapMutations([
      'setSGWorldCommand'
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
        }
      },5000)
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
        this.sgWorld.AttachEvent('OnLoadFinished', () => this.$refs.TEInfoExternal.AttachTo3dWindow(this.$refs.TE3DExternal))
        this.sgWorld.Project.Open(this.projectURL)
        this.setSGWorldCommand(new SGWorldCommands(this.sgWorld))
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
