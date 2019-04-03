import {
  getBreadCrumbList,
  getMenuByRouter,
  getHomeRoute,
  localSave,
  localRead
} from '@/libs/util'
import { saveErrorLogger } from '@/api/data'
import routers from '@/router/routers'
import config from '@/config'
const { homeName } = config

export default {
  state: {
    breadCrumbList: [],
    homeRoute: {},
    local: localRead('local'),
    errorList: [],
    hasReadErrorPage: false,
    mileageReady: false,
    SGWorldCommand: null
  },
  getters: {
    menuList: (state, getters, rootState) => getMenuByRouter(routers, rootState.user.access),
    errorCount: state => state.errorList.length,
    sgWorldCanUse: state => Boolean(state.SGWorldCommand && state.SGWorldCommand.sgWorld),
    mileageCanUse: state => Boolean(state.mileageReady)
  },
  mutations: {
    setBreadCrumb (state, route) {
      state.breadCrumbList = getBreadCrumbList(route, state.homeRoute)
    },
    setHomeRoute (state, routes) {
      state.homeRoute = getHomeRoute(routes, homeName)
    },
    setLocal (state, lang) {
      localSave('local', lang)
      state.local = lang
    },
    addError (state, error) {
      state.errorList.push(error)
    },
    setHasReadErrorLoggerStatus (state, status = true) {
      state.hasReadErrorPage = status
    },
    setSGWorldCommand (state, sgWorldCommand) {
      state.SGWorldCommand = sgWorldCommand
    },
    setMileageReady (state, mileageReady) {
      state.mileageReady = mileageReady
    }
  },
  actions: {
    addErrorLog ({ commit, rootState }, info) {
      if (!window.location.href.includes('error_logger_page')) commit('setHasReadErrorLoggerStatus', false)
      const { user: { token, userId, userName } } = rootState
      let data = {
        ...info,
        time: Date.parse(new Date()),
        token,
        userId,
        userName
      }
      saveErrorLogger(info).then(() => {
        commit('addError', data)
      })
    }
  }
}
