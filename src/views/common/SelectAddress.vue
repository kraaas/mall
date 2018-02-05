<template>
  <div>
    <mt-popup
      class="wrap"
      v-model="visiable"
      position="bottom"
      popup-transition="popup-fade"
    >
      <p class="title">请选择收货地址 ({{addressList.length}})</p>
      <ul class="add-wrap" v-if="addressList.length" >
        <li @click="select(address.id)" class="add-item" v-for="(address, index) in addressList" :key="index">
          <div class="add-info">
            <span class="name">{{address.name}}</span>
            <span class="tel">{{address.tel}}</span>
            <p class="detail">{{address.detail}}</p>
          </div>
        </li>
      </ul>
  </mt-popup>
  </div>
</template>
<script>
export default {
  name: 'select-address',
  props: ['show', 'onselect'],
  data() {
    return { 
      visiable: this.show
    }
  },
  watch: {
    show(val) {
      this.visiable = val
    }
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
    select(id) {
      this.onselect(id)
    }
  }
}
</script>
<style scoped>
.wrap {
  width: 100%;
}
.title {
  padding: 40px;
  text-align: center;
  color: #a7a6a6;
}
.add-wrap {
  max-height: 700px;
  overflow: scroll;
}
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

