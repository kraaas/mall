<template>
  <div>
    <search-header />
    <product-list :list="cateList" />
  </div>
</template>

<script>
import model from '../home/HomeModel'
import ProductList from '../common/ProductList.vue'
import SearchHeader from '../common/SearchHeader.vue'
export default {
  data () {
    return {
      cateList: []
    }
  },
  async created () {
    this.cateList = model.cateList[0].itemList
  },
  components: {
    ProductList,
    SearchHeader
  }
}
</script>

<style scoped>
</style>


