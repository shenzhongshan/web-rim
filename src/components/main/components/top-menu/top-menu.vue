<template>
  <div class="top-menu-wrapper">
    <Row>
      <i-Col span="8">
        <slot></slot>
      </i-Col>
      <i-Col span="14">
        <Menu ref="menu" mode="horizontal" :active-name="activeName"  :theme="theme" width="auto" @on-select="handleSelect">
          <template v-for="item in menuList">
            <template v-if="item.children && item.children.length === 1">
              <top-menu-item v-if="showChildren(item)" :key="`menu-${item.name}`" :parent-item="item"></top-menu-item>
              <menu-item v-else :name="getNameOrHref(item, true)" :key="`menu-${item.children[0].name}`"><common-icon :type="item.children[0].icon || ''"/><span>{{ showTitle(item.children[0]) }}</span></menu-item>
            </template>
            <template v-else>
              <top-menu-item v-if="showChildren(item)" :key="`menu-${item.name}`" :parent-item="item"></top-menu-item>
              <menu-item v-else :name="getNameOrHref(item)" :key="`menu-${item.name}`"><common-icon :type="item.icon || ''"/><span>{{ showTitle(item) }}</span></menu-item>
            </template>
          </template>
        </Menu>
      </i-Col>
      <i-Col span="2">
        <slot name="hbar"></slot>
      </i-Col>
    </Row>
  </div>
</template>
<script>
import TopMenuItem from './top-menu-item.vue'
import mixin from './mixin'

export default {
  name: 'TopMenu',
  mixins: [ mixin ],
  components: {
    TopMenuItem
  },
  props: {
    menuList: {
      type: Array,
      default () {
        return []
      }
    },
    theme: {
      type: String,
      default: 'primary'
    },
    activeName: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
    }
  },
  methods: {
    handleSelect (name) {
      this.$emit('on-select', name)
    }
  },
  computed: {

  },
  watch: {
    activeName (name) {
    }
  },
  mounted () {

  }
}
</script>
<style lang="less">
@import './top-menu.less';
</style>
