<template>
  <header-back title="新增地址">
    <mt-field label="联系人" placeholder="请输入联系人" v-model="username"></mt-field>
    <mt-field label="联系电话" placeholder="请输入联系电话" v-model="tel"></mt-field>
    <mt-field label="详细地址" placeholder="详细地址" type="textarea" rows="4" v-model="detail"></mt-field>
    <div class="footer">
        <mt-button 
            plain 
            type="primary" 
            size="small"
            @click="add"
        >保存</mt-button>
    </div>
  </header-back>
</template>
<script>
export default {
  data () {
    return {
        username: '',
        tel: '',
        detail: ''
    }
  },
  methods: {
    add () {
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


