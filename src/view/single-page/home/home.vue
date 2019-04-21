<template>
<Row type="flex" justify="center">
  <i-col span="24" class="content">
    <template v-for="(prj,idx) in prjList">
      <Card class="card" :key="`prj-${idx}`">
        <p slot="title" style="width:240px">
            <Icon type="ios-film-outline"></Icon>
            {{prj.title}}
        </p>
        <a href="#" slot="extra" @click.prevent="openPrj(prj,idx)">
            <Icon type="ios-folder-open-outline" />
            打开
        </a>
        <div style="text-align:center">
            <a herf="#" @click.prevent="openPrj(prj,idx)">
              <img :src="prj.logo || defaultPrjLogo" class="prj-logo" >
            </a>
            <Tooltip max-width="300" theme="light" :content="prj.desc">
              <pre class="desc">{{prj.desc}}</pre>
            </Tooltip>
        </div>

      </Card>
    </template>
  </i-col>
</Row>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import defaultPrjLogo from '@/assets/images/login-bg.jpg'
export default {
  name: 'home',
  components: {
  },
  data () {
    return {
      defaultPrjLogo: defaultPrjLogo
    }
  },
  computed: {
    ...mapState({
      'prjList': state => state.data.prjList
    })
  },
  mounted () {
    this.getProjectList().then(() => {
      console.log(this.prjList)
    }).catch(error => console.log(error))
  },

  methods: {
    ...mapActions([
      'getProjectList'
    ]),
    openPrj (row, idx) {
      const name = row.title || '未知'
      const id = idx
      const path = row.path
      const route = {
        name: 'show-prj',
        query: {
          name,
          path,
          id
        }
      }
      this.$router.push(route)
      // let routeData = this.$router.resolve(route)
      // window.open(routeData.href, '_blank')
    }
  }
}
</script>

<style scoped lang="less">
.content {
   width: 1024px;
}
.card {
  width: 320px;
  height: 320px;
  float: left;
  margin: 8px;
}
.prj-logo{
  width: 290px;
  height: 200px;
}
.desc {
  width: 300px;
  line-height: 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
