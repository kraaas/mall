<template>
  <header-back title="地址管理">
    <mt-button slot="right" @click="add">新增</mt-button>
    <ul class="add-wrap" v-if="addressList.length" >
      <li class="add-item" v-for="(address, index) in addressList" :key="index">
        <div class="add-info">
          <span class="name">{{address.name}}</span>
          <span class="tel">{{address.tel}}</span>
          <p class="detail">{{address.detail}}</p>
        </div>
        <div class="btns">
          <!-- <div class="btns-left" v-if="addressList.length > 1" >
            <mt-switch 
              v-model="address.isDefault" 
              size="small" 
              class="switch"
            ></mt-switch>
            <span>默认地址</span>
          </div> -->
          <div class="btns-right">
            <mt-button size="small" @click="add(address)">
                编辑
                <i slot="icon" class="iconfont icon-yijianfankui"></i>
            </mt-button>
            <mt-button size="small" @click="remove(address._id, index)">
                删除
                <i slot="icon" class="iconfont icon-lajixiang"></i>
            </mt-button>
          </div>
        </div>
      </li>
    </ul>
    <empty v-else></empty>
  </header-back>
</template>
<script>
import { MessageBox, Toast } from 'mint-ui'
export default {
  data () {
    return {}
  },
  computed: {
    addressList() {
      return this.$store.state.address.list
    }
  },
  created() {
    const { dispatch } = this.$store
    dispatch('getAddressList')
  },
  methods: {
    add(address = {}) {
      this.$router.push({ name: 'addAddress', params: { ...address } })
    },
    remove(id, index) {
      MessageBox.confirm('确定删除改地址?').then(action => {
        const { dispatch } = this.$store
        dispatch('removeAddress', { id, index })
      })
    }
  }
}
</script>
<style scoped>
.add-wrap {
  padding-top: 1px;
}
.add-item {
  margin: 0 auto;
  margin-top: 30px;
  width: 95%;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 4px 16px #e4e1e1;
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
