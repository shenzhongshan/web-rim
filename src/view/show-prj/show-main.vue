<template>
  <div class="page-wrapper">
    <TerraExplorer :projectURL="projectURL"/>
  </div>
</template>

<script>
import TerraExplorer from './nested-terra-explorer.vue'
export default {
  name: 'show-prj',
  components: {
    TerraExplorer
  },
  data () {
    return {

    }
  },
  computed: {
    projectURL () {
      return this.$route.query.path ? this.$route.query.path : ''
    }
  },
  mounted () {
    console.log('mounted!')
  }
}
</script>

<style scoped lang="less">
.page-wrapper{
  height: 100%;
}
</style>
