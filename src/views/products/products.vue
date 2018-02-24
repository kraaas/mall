<template>
  <div>
    <search-header :showBack="true" />
    <product-list :list="list" />
  </div>
</template>

<script>
import model from '../home/HomeModel'
import ProductList from '../common/ProductList.vue'
import SearchHeader from '../common/SearchHeader.vue'

export default {
  data () {
    return {}
  },
  computed: {
    list() {
      return this.$store.state.product.list
    }
  },
  created() {
    const { dispatch } = this.$store
    dispatch('getProductList')
  },
  components: {
    ProductList,
    SearchHeader
  }
}
</script>

<style scoped>
</style>


