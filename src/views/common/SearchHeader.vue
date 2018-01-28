<template>
  <div class="m-itemCateListHd">
    <router-link to="products">
      <div class="m-topSearchIpt ipt">
        <i class="icon"></i>
        <span class="placeholder">搜索商品</span>
      </div>
    </router-link>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
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
      }
    }
  }
</script>

<style scoped>
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
    border-bottom: 1px solid #d9d9d9; /* no */
  }
  .back {
    flex: 1;
    width: 50px;
    padding: 0 20px 0 10px;
    color: #9a9a9a;
  }
  .search {
    flex: 1;
  }
  .m-topSearchIpt {
    width: 690px;
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
  }
  .m-topSearchIpt .placeholder {
    color: #666;
  }
</style>
