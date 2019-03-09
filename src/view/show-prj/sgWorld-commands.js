/* eslint-disable */
import { _HTML_POPUP_FLAGS } from './SGWorldAPIEnums.js'
import SKCommonTools from './SKCommonTools.js'
import HDMCrossBox from './HDMCrossBox.js'
import MoniTrackor from './MoniTrackor.js'

class SGWorldCommands {
  constructor (sgworld) {
    this.sgWorld = sgworld
    this.baseUrl = process.env.BASE_URL
    this.skTools = new SKCommonTools(sgworld)
  }
  saveProject () {
    if (this.sgWorld) {
      this.sgWorld.Project.Save()
    }
  }
  // 查看纵断面
  viewVerticalSection () {
    if (this.sgWorld) {
      let itemName = this.skTools.GetSelFeatureName()
      let url = ''
      let mCurID = this.skTools.GetSelFeature()
      let mCurCaseID = this.skTools.JudgeProjectNode(mCurID)
      let flags = _HTML_POPUP_FLAGS.HTML_POPUP_ALLOW_DRAG | _HTML_POPUP_FLAGS.HTML_POPUP_ALLOW_RESIZE
      let prefixUrl = window.location.origin + this.baseUrl
      if (itemName.indexOf('基线') > -1) {
        url = prefixUrl + 'plugins/ZDMDesigner/ZDMChart.html?ObjID=' + mCurID + '&CaseID=' + mCurCaseID + '&Step=50&Caption=纵断面'
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
  }
  // 提取纵断面
  extractVerticalSection () {
    if (this.sgWorld) {
      alert('todo')
    }
  }
  // 提取横断面
  extractCrossSection () {
    if (this.sgWorld) {
      alert('todo')
    }
  }
  // 加载网络地图
  loadIMap () {
    if (this.sgWorld) {
      let prefixUrl = window.location.origin + this.baseUrl
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
      this.sgWorld.ProjectTree.SaveAsKml()
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
      let mHDMProfile = new HDMCrossBox(this.sgWorld, null)
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
}

export default SGWorldCommands
