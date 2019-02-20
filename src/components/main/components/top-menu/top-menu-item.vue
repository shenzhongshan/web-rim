<template>
  <Submenu :name="`${parentName}`">
    <template slot="title">
      <common-icon :type="parentItem.icon || ''"/>
      <span>{{ showTitle(parentItem) }}</span>
    </template>
    <iframe frameborder="0" src="" style="position: absolute;right: 0px; top: 0px; overflow: hidden; width: 100%; height: 100%; z-index: -1;"></iframe>
    <template v-for="item in children">
      <template v-if="item.children && item.children.length === 1">
        <top-menu-group v-if="showChildren(item)" :key="`menu-${item.name}`" :parent-item="item"></top-menu-group>
        <menu-item v-else :name="getNameOrHref(item, true)" :key="`menu-${item.children[0].name}`"><common-icon :type="item.children[0].icon || ''"/><span>{{ showTitle(item.children[0]) }}</span></menu-item>
      </template>
      <template v-else>
        <top-menu-group v-if="showChildren(item)" :key="`menu-${item.name}`" :parent-item="item"></top-menu-group>
        <menu-item v-else :name="getNameOrHref(item)" :key="`menu-${item.name}`"><common-icon :type="item.icon || ''"/><span>{{ showTitle(item) }}</span></menu-item>
      </template>
    </template>
  </Submenu>
</template>
<script>
import mixin from './mixin'
import itemMixin from './item-mixin'
import TopMenuGroup from './top-menu-group.vue'
export default {
  name: 'TopMenuItem',
  mixins: [ mixin, itemMixin ],
  components: {
    TopMenuGroup
  }
}
</script>
