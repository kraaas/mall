<template>
  <header-back title="修改密码">
    <mt-field label="原密码" placeholder="请输入原密码" v-model="oldpwd"></mt-field>
    <mt-field label="新密码" placeholder="请输入新密码" v-model="newpwd"></mt-field>
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
        oldpwd: '',
        newpwd: '',
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


