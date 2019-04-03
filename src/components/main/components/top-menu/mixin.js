import CommonIcon from '_c/common-icon'
import { showTitle } from '@/libs/util'
import { mapGetters } from 'vuex'
export default {
  components: {
    CommonIcon
  },
  computed: {
    ...mapGetters([
      'sgWorldCanUse',
      'mileageCanUse'
    ])
  },
  methods: {
    needDisabled (item) {
      return Boolean(!this.sgWorldCanUse &&
            (item.meta && item.meta.command)) ||
            Boolean(item.meta && item.meta.mileage && !this.mileageCanUse)
    },
    showTitle (item) {
      return showTitle(item, this)
    },
    showChildren (item) {
      return item.children && (item.children.length > 1 || (item.meta && item.meta.showAlways))
    },
    getNameOrHref (item, children0) {
      return item.href ? `isTurnByHref_${item.href}` : (children0 ? item.children[0].name : item.name)
    }
  }
}
