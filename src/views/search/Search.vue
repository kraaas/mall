<template>
  <div class="search">
      <search-header :showBack="true" :showInput="true" />
      <div class="history-wrap" v-if="searchLog.length">
        <h3>搜索历史</h3>
        <ul class="history">
            <li 
              class="history-item" 
              v-for="text in searchLog"
              @click="search(text)"
            >{{text}}</li>
        </ul>
      </div>
  </div>
</template>
<script>
import SearchHeader from '../common/SearchHeader.vue'
export default {
  data () {
    return {
      searchLog: JSON.parse(localStorage.getItem('searchLog') || '[]')
    }
  },
  methods: {
    search(searchText) {
      this.$router.push({path: 'products', query: {searchText}})
    }
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
