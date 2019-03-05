
const HTML_POPUP_ALLOW_DRAG = 2
const HTML_POPUP_ALLOW_RESIZE = 32
const sgWorldCommands = {
  sgWorld: null,
  baseUrl: process.env.BASE_URL,
  saveProject: function () {
    if (this.sgWorld) {
      this.sgWorld.Project.Save()
    }
  },
  // 查看纵断面
  viewVerticalSection: function () {
    debugger
    if (this.sgWorld) {
      let itemName = '基线'
      let url = ''
      let ObjID = ''
      let mCurID = ''
      let mCurCaseID = ''
      let flags = HTML_POPUP_ALLOW_DRAG | HTML_POPUP_ALLOW_RESIZE
      let prefixUrl = window.location.origin + this.baseUrl
      debugger
      if (itemName.indexOf('基线') > -1) {
        url = prefixUrl + 'plugins/ZDMDesigner/ZDMChart.html?ObjID=' + ObjID + '&CaseID=' + mCurCaseID + '&Step=50&Caption=纵断面'
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
  },
  // 提取纵断面
  extractVerticalSection: function () {
    if (this.sgWorld) {
      alert('todo')
    }
  },
  // 提取横断面
  extractCrossSection: function () {
    if (this.sgWorld) {
      alert('todo')
    }
  },
  // 加载网络地图
  loadIMap: function () {
    if (this.sgWorld) {
      let prefixUrl = window.location.origin + this.baseUrl
      this.sgWorld.ProjectTree.LoadFlyLayer(prefixUrl + 'mapres/地理环境.fly', '')
    }
  },
  // 加载KML/FLY文件
  loadKmlFly: function () {
    if (this.sgWorld) {
      this.sgWorld.Creator.CreateKMLLayer()
      this.sgWorld.ProjectTree.LoadFlyLayer()
    }
  },
  // 从服务器加载...
  loadFromServer: function () {
    if (this.sgWorld) {
      this.sgWorld.Command.Execute(1143, 0)
    }
  },
  // 导出KML
  exportKML: function () {
    if (this.sgWorld) {
      this.sgWorld.ProjectTree.SaveAsKml()
    }
  },
  // 导出FLY
  exportFLY: function () {
    if (this.sgWorld) {
      this.sgWorld.ProjectTree.SaveAsFly()
    }
  },
  // 横剖面图
  analogCrossSectionMap: function () {
    if (this.sgWorld) {
      alert('todo')
    }
  },
  // 交通模拟
  analogTraffic: function () {
    if (this.sgWorld) {
      alert('todo')
    }
  },
  // 飞行鸟瞰
  analogflight: function () {
    if (this.sgWorld) {
      alert('todo')
    }
  },
  // 进度模拟
  analogProgress: function () {
    if (this.sgWorld) {
      alert('todo')
    }
  }
}

export default sgWorldCommands
