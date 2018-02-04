<template>
  <header-back title="地址管理">
    <ul class="add-wrap">
      <li class="add-item" v-for="i in 3">
        <div class="add-info">
          <span class="name">廖静思</span>
          <span class="tel">15018054003</span>
          <p class="detail">单身福利手动加法律手段</p>
        </div>
        <div class="btns">
          <div class="btns-left">
            <mt-switch size="small" class="switch"></mt-switch>
            <span>默认地址</span>
          </div>
          <div class="btns-right">
            <mt-button size="small">
                编辑
                <i slot="icon" class="iconfont icon-yijianfankui"></i>
            </mt-button>
            <mt-button size="small">
                删除
                <i slot="icon" class="iconfont icon-lajixiang"></i>
            </mt-button>
          </div>
        </div>
      </li>
    </ul>
    <mt-button slot="right" @click="add">新增</mt-button>
  </header-back>
</template>
<script>
export default {
  data () {
    return {}
  },
  methods: {
    add() {
      this.$router.push({ name: 'addAddress' })
    }
  }
}
</script>
<style scoped>
.add-item {
  border-bottom: 1px solid #e0e0e0;
  background-color: #fff;
  margin-bottom: 20px;
}
.add-info {
  padding: 40px;
}
.detail {
  padding: 30px 0 10px;
  color: #999;
}
.btns {
  display: flex;
  padding: 10px 20px 10px 10px;
  border-top: 1px solid #e0e0e0;
}
.switch {
  display: inline-block;
  transform: scale(.7);
  vertical-align: middle;
}
.btns-left {
  flex: 1;
}
.btns-right {
  flex: 1;
  text-align: right;
}
.btns-right button {
  background: transparent;
  border: none;
  box-shadow: none;
  padding-right: 5px;
  font-size: 24px;
}
.footer {
  padding-top: 50px;
  text-align: center;
}
.footer button {
  width: 80%;
}
</style>
