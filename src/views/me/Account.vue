<template>
  <header-back title="我的资料">
    <mt-field label="姓名" placeholder="请输入姓名" v-model="name"></mt-field>
    <mt-field label="手机号码" value="14018043003" disabled></mt-field>
    <div class="footer">
        <mt-button 
            plain 
            type="primary" 
            size="small"
            @click="update"
        >确认修改</mt-button>
    </div>
  </header-back>
</template>
<script>
export default {
  data () {
    return {
        name: '',
        tel: '',
    }
  },
  methods: {
    update () {
      this.$router.go(-1)
    }
  }
}
</script>
<style scoped>
.footer {
  padding-top: 50px;
  text-align: center;
}
.footer button {
  width: 80%;
}
</style>


