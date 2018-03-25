<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { Indicator } from 'mint-ui'

export default {
  name: 'app',
  computed: {
    loading () {
      return this.$store.state.loading
    },
    isLogin() {
      return this.$store.state.isLogin
    }
  },
  created() {
    const { dispatch } = this.$store
    // if(this.isLogin) {
    dispatch('getUserInfo')
    // }
  },
  watch: {
    loading (val, oldVal) {
      if(val) {
        Indicator.open()
      }else {
        Indicator.close()
      }
    }
  },
}
</script>

<style lang="stylus">
</style>
