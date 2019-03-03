
const sgWorldCommands = {
  sgWorld: null,
  saveProject: function () {
    if (this.sgWorld) {
      this.sgWorld.Project.Save()
    }
  }
}

export default sgWorldCommands
