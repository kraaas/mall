<template>
  <header-back :title="address._id ? '修改地址' : '新增地址'">
    <mt-field label="联系人" placeholder="请输入联系人" v-model="address.name"></mt-field>
    <mt-field label="联系电话" placeholder="请输入联系电话" v-model="address.tel"></mt-field>
    <mt-field label="详细地址" placeholder="详细地址" type="textarea" rows="4" v-model="address.detail"></mt-field>
    <div class="footer">
        <mt-button 
            plain 
            type="primary" 
            size="small"
            @click="submit"
        >保存</mt-button>
    </div>
  </header-back>
</template>
<script>
export default {
  data () {
    return {
        address: this.$route.params
    }
  },
  methods: {
    submit() {
      this.address._id ? this.update() : this.add()
    },
    add () {
      const { dispatch } = this.$store
      dispatch('addAddress', this.address).then(res => {
        this.$router.go(-1)
      })
    },
    update () {
      const { dispatch } = this.$store
      dispatch('updateAddress', this.address).then(res => {
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


