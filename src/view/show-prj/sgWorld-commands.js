
const sgWorldCommands = {
  sgWorld: null,
  saveProject: function () {
    if (this.sgWorld) {
      this.sgWorld.Project.Save()
    }
  },
  // 查看纵断面
  viewVerticalSection: function () {
    if (this.sgWorld) {
      alert('todo')
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
      alert('todo')
    }
  },
  // 加载KML/FLY文件
  loadKmlFly: function () {
    if (this.sgWorld) {
      alert('todo')
    }
  },
  // 从服务器加载...
  loadFromServer: function () {
    if (this.sgWorld) {
      alert('todo')
    }
  },
  // 导出KML
  exportKML: function () {
    if (this.sgWorld) {
      alert('todo')
    }
  },
  // 导出FLY
  exportFLY: function () {
    if (this.sgWorld) {
      alert('todo')
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
