<template>
  <div class="m-itemCateListHd">
    <div v-if="showBack" class="back" @click="back">
      <i class="icon iconfont icon-xiangzuojiantou"></i>
    </div>
    <router-link 
      to="search" 
      class="search"
      v-if="!showInput"
    >
      <div class="m-topSearchIpt">
        <i class="icon iconfont icon-sousuo"></i>
        <span class="placeholder">搜索商品</span>
      </div>
    </router-link>
    <div class="m-topSearchIpt hasinput" :class="{focused}" v-if="showInput">
      <i class="icon iconfont icon-sousuo"></i>
      <span v-if="!focused" class="placeholder">搜索商品</span>
      <input type="text" @focus="inputFocus">
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    props: ['showBack', 'showInput'],
    data () {
      return {
        focused: false
      }
    },
    computed: {
      ...mapState([
        'footItems',
        'footIdx'
      ])
    },
    methods: {
      goFooterPath (idx) {
        let curPath = this.$route.path
        let redirectPath = this.footItems[idx].path
        if (this.footIdx === idx && curPath === redirectPath) {
          return
        }
        this.$router.push({path: redirectPath})
      },
      back () {
        this.$router.back()
      },
      inputFocus () {
        this.focused = true
      }
    }
  }
</script>

<style scoped>
  .search{
    width: 100%;
  }
  .back {
    padding: 20px 20px 20px 40px;
    margin-left: -39px;
    color: #827f7f;
  }
  .back i {
    font-size: 28px;
  }
  .hasinput input {
    border: none;
    width: 100%;
    height: 100%;
    position: absolute;
    background: transparent;
    font-size: 28px;
    padding-left: 70px;
  }
  .hasinput.focused .icon {
    position: absolute;
    left: 20px;
  }
  .m-itemCateListHd {
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    -moz-align-items: center;
    align-items: center;
    height: 88px;
    padding: 0 30px;
    background-color: #fff;
    z-index: 101;
    border-bottom: 1px solid #f1f1f1; /* no */
  }
  .m-topSearchIpt {
    position: relative;
    width: 100%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-flow: row nowrap;
    -moz-flex-flow: row nowrap;
    -ms-flex-flow: row nowrap;
    flex-flow: row nowrap;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    -moz-align-items: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    -moz-justify-content: center;
    justify-content: center;
    height: 56px;
    font-size: 28px;
    background-color: #ededed;
    border-radius: 8px;
  }
  .m-topSearchIpt .icon {
    vertical-align: middle;
    background-repeat: no-repeat;
    background-size: 28px 28px;
    margin-right: 10px;
    display: inline-block;
    width: 28px;
    height: 28px;
    font-size: 28px;
    padding-right: 20px;
    color: #9e9e9e;
  }
  .m-topSearchIpt .placeholder {
    color: #9e9e9e;
  }
</style>
