<template>
  <MenuGroup :title="`${parentItem.meta.title}`">
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
  </MenuGroup>
</template>
<script>
import mixin from './mixin'
import itemMixin from './item-mixin'
export default {
  name: 'TopMenuGroup',
  mixins: [ mixin, itemMixin ]
}
</script>
