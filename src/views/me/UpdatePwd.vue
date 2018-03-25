<template>
  <header-back title="修改密码">
    <mt-field label="原密码" type="password" placeholder="请输入原密码" v-model="oldpwd"></mt-field>
    <mt-field label="新密码" type="password" placeholder="请输入新密码" v-model="newpwd"></mt-field>
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
import { Toast } from 'mint-ui'

export default {
  data () {
    return {
        oldpwd: '',
        newpwd: '',
    }
  },
  methods: {
    update () {
      const { oldpwd, newpwd } = this
      if(!oldpwd || !newpwd) {
        Toast({message: '请输入密码'})
        return
      }
      const { dispatch } = this.$store
      dispatch('updatePassword', {oldpwd, newpwd}).then((res) => {
        if(res.code === 0) {
          Toast({
            message: '修改成功',
            iconClass: 'iconfont icon-checked'
        })
        this.$router.go(-1)
        }
      })
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


