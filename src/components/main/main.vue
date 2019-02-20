<template>
  <Layout style="height: 100%" class="main">
      <Header class="header-con">
        <top-menu ref="topMenu" :active-name="$route.name" @on-select="turnToPage" :menu-list="menuList">
          <img :src="maxLogo" class="logo">
          <header-bar slot="hbar">
            <user :message-unread-count="unreadCount" :user-avator="userAvator"/>
            <language v-if="$config.useI18n" @on-lang-change="setLocal" style="margin-right: 10px;" :lang="local"/>
            <error-store v-if="$config.plugin['error-store'] && $config.plugin['error-store'].showInHeader" :has-read="hasReadErrorPage" :count="errorCount"></error-store>
            <fullscreen v-model="isFullscreen" style="margin-right: 10px;"/>
        </header-bar>
        </top-menu>
      </Header>
      <Content class="content-wrapper">
        <keep-alive>
          <router-view/>
        </keep-alive>
        <ABackTop :height="80" :bottom="60" :right="50" container=".content-wrapper"></ABackTop>
      </Content>
  </Layout>
</template>
<script>
import TopMenu from './components/top-menu'
import HeaderBar from './components/header-bar'
import User from './components/user'
import ABackTop from './components/a-back-top'
import Fullscreen from './components/fullscreen'
import Language from './components/language'
import ErrorStore from './components/error-store'
import { mapMutations, mapActions, mapGetters } from 'vuex'
import routers from '@/router/routers'
import minLogo from '@/assets/images/logo-min.png'
import maxLogo from '@/assets/images/logo.png'
import './main.less'
export default {
  name: 'Main',
  components: {
    TopMenu,
    HeaderBar,
    Language,
    Fullscreen,
    ErrorStore,
    User,
    ABackTop
  },
  data () {
    return {
      minLogo,
      maxLogo,
      isFullscreen: false
    }
  },
  computed: {
    ...mapGetters([
      'errorCount'
    ]),

    userAvator () {
      return this.$store.state.user.avatorImgPath
    },
    menuList () {
      return this.$store.getters.menuList
    },
    local () {
      return this.$store.state.app.local
    },
    hasReadErrorPage () {
      return this.$store.state.app.hasReadErrorPage
    },
    unreadCount () {
      return this.$store.state.user.unreadCount
    }
  },
  methods: {
    ...mapMutations([
      'setLocal',
      'setHomeRoute'
    ]),
    ...mapActions([
      'handleLogin',
      'getUnreadMessageCount'
    ]),
    turnToPage (route) {
      let { name, params, query } = {}
      if (typeof route === 'string') name = route
      else {
        name = route.name
        params = route.params
        query = route.query
      }
      if (name.indexOf('isTurnByHref_') > -1) {
        window.open(name.split('_')[1])
        return
      }
      this.$router.push({
        name,
        params,
        query
      })
    },
    handleClick (item) {
      this.turnToPage(item)
    }
  },
  watch: {

  },
  mounted () {
    /**
     * @description 初始化设置面包屑导航
     */
    this.setHomeRoute(routers)
    // 设置初始语言
    this.setLocal(this.$i18n.locale)
    // 跳到homeName页
    this.$router.push({
      name: this.$config.homeName
    })
    // 获取未读消息条数
    this.getUnreadMessageCount()
  }
}
</script>
