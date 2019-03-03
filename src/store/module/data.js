import {
  getProjectList

} from '@/api/data'

export default {
  state: {
    prjList: []
  },
  mutations: {
    setProjectList (state, list) {
      state.prjList = list
    }
  },
  getters: {

  },
  actions: {
    // 获取项目列表
    getProjectList ({ state, commit }) {
      return new Promise((resolve, reject) => {
        getProjectList().then(res => {
          const list = res.data
          commit('setProjectList', list)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}
