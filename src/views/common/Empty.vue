<template>
  <div class="no-data">
    <i class="iconfont icon-404"></i>
    <p>{{msg}}</p>
</div>
</template>
<script>
export default {
    name: 'empty',
    props: {
      msg: {
        type: String,
        default: '暂无数据',
      }
  }
};
</script>
<style scoped>
.no-data {
  text-align: center;
  color: #dedede;
  padding: 50px;
}
.no-data i {
  font-size: 88px;
}
.no-data p {
  padding: 22px;
}
</style>


