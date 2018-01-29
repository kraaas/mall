<template>
  <div class="search">
      <search-header :showBack="true" :showInput="true" />
      <div class="history-wrap">
        <h3>搜索历史</h3>
        <ul class="history">
            <li class="history-item">是大方地方</li>
            <li class="history-item">地方</li>
            <li class="history-item">规范</li>
            <li class="history-item">发跟后台</li>
            <li class="history-item">好久好久</li>
            <li class="history-item">好几个</li>
        </ul>
      </div>
  </div>
</template>
<script>
import SearchHeader from '../common/SearchHeader.vue'
export default {
  data () {
    return {}
  },
  components: {
    SearchHeader
  }
}
</script>
<style scoped>
.history-wrap{
    padding: 20px;
}
.history-wrap h3 {
    padding: 10px 0 30px;
    color: #bbb5b5;
}
.history-item {
    color: #353535;
    padding: 20px 0;
}
</style>
