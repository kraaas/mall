<template>
  <header-back title="我的资料">
    <mt-field label="姓名" placeholder="请输入姓名" v-model="userInfo.name"></mt-field>
    <mt-field label="手机号码" :value="userInfo.tel" disabled></mt-field>
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
    }
  },
  computed: {
    userInfo () {
      return {...this.$store.state.user.userInfo}
    }
  },
  methods: {
    update () {
      const { dispatch } = this.$store
      const { name } = this.userInfo
      dispatch('updateUserInfo', { name }).then(res => {
        Toast({
            message: '修改成功',
            iconClass: 'iconfont icon-checked'
        })
        this.$router.go(-1)
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


