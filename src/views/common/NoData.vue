<template>
  <div class="no-data">
      <i class="iconfont icon-nodata"></i>
      <p>{{tip}}</p>
  </div>
</template>
<script>
export default {
  name: 'no-data',
  props: {
      tip: {
        type: String,
        default: '暂无数据',
      }
  }
}
</script>
<style scoped>
.no-data {
    height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
}
.no-data i {
    font-size: 150px;
    color: #c7c6c6;
}
.no-data p {
    color: #bbb7b7;
}
</style>


