/* eslint-disable */
import { _HTML_POPUP_FLAGS } from './SGWorldAPIEnums.js'
import SKCommonTools from './SKCommonTools.js'
import HDMCrossBox from './HDMCrossBox.js'
import MoniTrackor from './MoniTrackor.js'
import {export_array_to_csv}  from '@/libs/excel.js'
import {uploadPrjLogo} from '@/api/data'

class SGWorldCommands {
  constructor (sgworld, dmx, commonVar) {
    this.sgWorld = sgworld
    this.baseUrl = process.env.BASE_URL
    this.skTools = new SKCommonTools(sgworld)
    this.dmx = dmx
    this.commonVar = commonVar
  }
  saveProject () {
    if (this.sgWorld) {

      let vid = this.skTools.FindFirstObjectID('视野', "")
      if(vid!="") this.sgWorld.ProjectTree.DeleteItem(vid)
      this.sgWorld.Creator.CreateLocationHere(StaticCommon.mSGWorld.ProjectTree.RootID, "视野");

      this.sgWorld.Project.Save()
    }
  }

  Capturelogo()
  {

    let fn = this.sgWorld.Project.Name;
    fn=fn.toLowerCase()

    fn=fn.replace(".fly",".jpg");
    let nfn = this.sgWorld.window.GetSnapShot(true,800,500,"JPeg75",0); // new Blob(['<a id="a"><b id="b">hey!</b></a>'], { type: "text/xml"})
    // alert(nfn);
    this.uploadLogo(fn,nfn)
    // let fso = new ActiveXObject("Scripting.FileSystemObject");
    // fso.MoveFile(nfn, fn)
    //alert("提取成功！")

  }

  // 查看纵断面
  viewVerticalSection () {
    if (!this.sgWorld) return;

      let itemName = this.skTools.GetSelFeatureName()
      let url = ''
      let mCurID = this.skTools.GetSelFeatureID()
      let flags = _HTML_POPUP_FLAGS.HTML_POPUP_ALLOW_DRAG | _HTML_POPUP_FLAGS.HTML_POPUP_ALLOW_RESIZE
      let prefixUrl = window.location.origin + this.baseUrl
      if (itemName.indexOf('基线') > -1) {
        let mCurCaseID = this.skTools.JudgeProjectNode(mCurID);
        url = prefixUrl + 'plugins/ZDMDesigner/ZDMChart.html?ObjID=' + mCurID + '&CaseID=' + mCurCaseID + '&Step=50&Caption=纵断面'
        console.log(url)
        let msg = this.sgWorld.Creator.CreatePopupMessage('纵断面', url, 1, this.sgWorld.Window.Rect.Height * 2 / 3, this.sgWorld.Window.Rect.Width - 2, this.sgWorld.Window.Rect.Height / 3, -1)
        msg.Flags = flags
        this.sgWorld.Window.ShowPopup(msg)
      } else if (itemName.indexOf('桥') > -1) {
        url = prefixUrl + 'plugins/ZDMDesigner/BridgeChart.html?ObjID=' + mCurID + '&Step=25&Caption=纵断面'
        let msg = this.sgWorld.Creator.CreatePopupMessage('纵断面', url, 1, this.sgWorld.Window.Rect.Height * 2 / 3, this.sgWorld.Window.Rect.Width - 2, this.sgWorld.Window.Rect.Height / 3, -1)
        msg.Flags = flags
        this.sgWorld.Window.ShowPopup(msg)
      } else if (itemName.indexOf('隧道') > -1) {
        url = prefixUrl + 'plugins/ZDMDesigner/TunnelChart.html?ObjID=' + mCurID + '&Step=25&Caption=纵断面'
        let msg = this.sgWorld.Creator.CreatePopupMessage('纵断面', url, 1, this.sgWorld.Window.Rect.Height * 2 / 3, this.sgWorld.Window.Rect.Width - 2, this.sgWorld.Window.Rect.Height / 3, -1)
        msg.Flags = flags
        this.sgWorld.Window.ShowPopup(msg)
      }

  }
  // 提取地面线
  extractVerticalSection () {
    if (!this.sgWorld) return;
       alert(this.commonVar.mCurCaseID);
      if(this.commonVar.mCurCaseID!="")
      {
        debugger
        let sn=this.sgworld.ProjectTree.GetItemName(this.commonVar.mCurCaseID);
        export_array_to_csv(this.dmx.gGridArray[0],sn + '地面线.cvs');
      }else
      {
        //对当前选择的线要素提取地面线
        let mCurID = this.skTools.GetSelFeatureID();
        let sn=this.sgworld.ProjectTree.GetItemName(mCurID);
        let obj = this.sgWorld.ProjectTree.GetObject(mCurID);
      //  if(typeof(obj) ==  ITerrainPolyline70)
       // {

       // }
         alert(typeof(obj));
        // this.commonVar.dmx.DMX_DrawByDist();
        alert("todo")
      }

  }
  // 提取横断面
  extractCrossSection () {
    if (!this.sgWorld) return;
    alert(this.commonVar.mCurCaseID);

    if(this.commonVar.mCurCaseID!="")
    {
      let sn=this.sgWorld.ProjectTree.GetItemName(this.commonVar.mCurCaseID);
      let slc,elc,step,range,sampe;
      slc=parseFloat(this.sgWorld.ProjectTree.GetClientData(this.commonVar.mCurCaseID,"StartLC"));
      var t=prompt("请输入起始里程：",slc.toFixed(2));
      slc=parseFloat(t);

      elc=parseFloat(this.sgWorld.ProjectTree.GetClientData(this.commonVar.mCurCaseID,"EndLC"));
      var t=prompt("请输入终止里程：",elc.toFixed(2));
      elc=parseFloat(t);

      step=parseFloat(prompt("请输入断面间距：","25"));

      range=parseFloat(prompt("请输入断面左右边幅：","50"));

      sampe=parseFloat(prompt("请输入断面采点间距：","5"));

      var hdmgrid=this.dmx.GetHDMArray(slc,elc,step,range,sampe);

      export_array_to_csv(hdmgrid,sn + '横断面.cvs');
    }else
    {
      //对当前选择的线要素提取地面线
      let mCurID = this.skTools.GetSelFeatureID();
      let sn=this.sgWorld.ProjectTree.GetItemName(mCurID);
      alert("todo")
    }


  }
  // 加载网络地图
  loadIMap () {
    if (this.sgWorld) {
      let prefixUrl = window.location.origin + this.baseUrl
      alert(prefixUrl + 'mapres/地理环境.fly');
      this.sgWorld.ProjectTree.LoadFlyLayer(prefixUrl + 'mapres/地理环境.fly', '')
    }
  }
  // 加载KML/FLY文件
  loadKmlFly () {
    if (this.sgWorld) {
      this.sgWorld.Creator.CreateKMLLayer()
      this.sgWorld.ProjectTree.LoadFlyLayer()
    }
  }
  // 从服务器加载...
  loadFromServer () {
    if (this.sgWorld) {
      this.sgWorld.Command.Execute(1143, 0)
    }
  }
  // 导出KML
  exportKML () {
    if (this.sgWorld) {
      let mCurID = this.skTools.GetSelFeatureID();
      if(!this.sgWorld.ProjectTree.IsGroup(mCurID)) mCurID=this.sgWorld.ProjectTree.GetNextItem(mCurID,15);

      let sn=this.sgworld.ProjectTree.GetItemName(mCurID);
      this.sgWorld.ProjectTree.SaveAsKml(sn,mCurID);

    }
  }
  // 导出FLY
  exportFLY () {
    if (this.sgWorld) {
      this.sgWorld.ProjectTree.SaveAsFly()
    }
  }
  // 横剖面图
  analogCrossSectionMap () {
    if (this.sgWorld) {
      let mHDMProfile = new HDMCrossBox(this.sgWorld, this.commonVar)
      mHDMProfile.Start()
    }
  }
  // 交通模拟
  analogTraffic () {
    if (this.sgWorld) {
      let mTrack = new MoniTrackor(this.sgWorld, null)
      mTrack.Run()
    }
  }
  // 飞行鸟瞰
  analogflight () {
    if (this.sgWorld) {
      let mTrack = new MoniTrackor(this.sgWorld, null)
      mTrack.Fly()
    }
  }
  // 进度模拟
  analogProgress () {
    if (this.sgWorld) {
      // let mShow = new TimeSliderBar();
      // mShow.Show();
    }
  }
  // 查看工程数量
  checkProjectNumber (){
    if (this.sgWorld) {
      alert('todo')
    }
  }
 // 生成行政区划表
  genAdministrativeDivisions (){
    if (this.sgWorld) {
      alert('todo')
    }
  }

  uploadLogo(prjDir,logoFile){
    console.log('上传logo',prjDir,logoFile)
    uploadPrjLogo(prjDir,logoFile).then((res)=>{
      alert('提取项目LOGO成功！')
      console.log(res)
    }).catch((err=>{
      alert(err)
      console.log(err)
    }))
  }
}

export default SGWorldCommands
