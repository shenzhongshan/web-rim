<template>
  <div>
    <Row style="margin-top: 10px;">
      <keep-alive>
        <Table stripe border height="600" :columns="tcolumns" :data="prjList" @on-row-dblclick="openPrj">
          <template slot-scope="{ row, index }" slot="action">
            <Button type="primary" size="small" style="margin-right: 5px" @click="openPrj(row, index)">打开</Button>
          </template>
        </Table>
      </keep-alive>
    </Row>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'home',
  components: {
  },
  data () {
    return {
      tcolumns: [
        {
          type: 'index',
          width: 60,
          align: 'center'
        },
        {
          title: '标题',
          key: 'title',
          render: (h, params) => {
            return h('div', [
              h('img', {
                attrs: {
                  src: params.row.logo,
                  width: 32,
                  height: 32
                }
              }),
              h('strong', params.row.title)
            ])
          }
        },
        {
          title: '路径',
          key: 'path'
        },
        {
          title: '操作',
          slot: 'action',
          width: 100,
          align: 'center'
        }
      ]
    }
  },
  computed: {
    ...mapState({
      'prjList': state => state.data.prjList
    })
  },
  mounted () {
    this.getProjectList().then(() => {
      debugger
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
.count-style{
  font-size: 50px;
}
</style>
