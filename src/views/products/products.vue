<template>
  <div>
    <div class="classify fixStatusBar">
      <mt-button @click="back" icon="back"></mt-button>
      <mt-badge type="primary">{{classify.label || classify.searchText || '全部'}}</mt-badge>
      <span class="total">共找到: {{total}} 件商品</span>
      <!-- <span v-if="classify.label || classify.searchText" @click="removeClassify" class="remove">x</span> -->
    </div>
    <div class="container marginTop">
      <ul 
        v-if="list.length"
        class="list"
      >
          <li class="item" v-for="(item, index) in list" :key="index">
              <router-link :to="{name: 'detail', params: {id: item._id}}" class="good">
                  <div class="hd">
                      <div class="wraper">
                        <img v-lazy="`http://api.gdsc198.com:8001/img/${item.image_path[0]}`">
                      </div>
                  </div>
                  <div class="info">
                    <div class="name">{{item.title}}</div>
                    <div class="price">¥{{item.specs[0].price}}</div>
                  </div>
              </router-link>
          </li>
      </ul>
      <p v-if="!allLoaded" class="more" @click="loadMore">
        <span v-if="!loading">加载更多</span>
        <mt-spinner v-else type="triple-bounce"></mt-spinner>
      </p>
      <p v-if="allLoaded&&list.length" class="more">全部加载完了</p>
      <empty v-if="!list.length" :msg="`找不到${classify.label ? `和[${classify.label}]` : ''}相关的商品`"></empty>
    </div>
  </div>
</template>

<script>
import model from '../home/HomeModel'
import ProductList from '../common/ProductList.vue'
import SearchHeader from '../common/SearchHeader.vue'

export default {
  data () {
    return {
      classify: {
        searchText: '',
        label: '',
        id: ''
      },
      allLoaded: false,
      loading: false,
      params: {
        limit: 10,
        offset: 0,
        classifyId: ''
      }
    }
  },
  computed: {
    list() {
      return this.$store.state.product.list
    },
    total() {
      return this.$store.state.product.total
    }
  },
  created() {
    const { label, id, searchText } = this.$route.query
    this.classify = { label, id, searchText}
    this.getList(this.params)
  },
  methods: {
    back() {
      this.$router.back()
    },
    getList(params = {}) {
      this.loading = true
      this.params.classifyId = this.classify.id
      this.params.searchText = this.classify.searchText
      params = {...this.params, ...params}
      const { dispatch } = this.$store
      dispatch('getProductList', params).then((res) => {
        this.allLoaded = this.list.length === res.data.total
        this.loading = false
      })
    },
    async loadMore() {
      const params = {...this.params, offset: this.params.offset+10}
      await this.getList({...params, append: true})
      this.params.offset = params.offset
    },
    removeClassify() {
      this.classify = {}
      this.getList()
    }
  },
  components: {
    ProductList,
    SearchHeader
  }
}
</script>

<style scoped>
.classify {
  position: fixed;
  top: 0;
  width:100%;
  background: #fff;
  height: 100px;
  line-height: 100px;
  padding-left: 100px;
  border-bottom: 1px solid #dedede;
  z-index: 100;
}
.classify span{
  line-height: 1;
}
.classify .total {
  color: #9e9a9a;
  padding-left: 20px;
}
.classify button {
  box-shadow: none;
  background: #fff;
  position: absolute;
  bottom: 12px;
  left: 0;
}
.classify .remove {
    position: absolute;
    right: 19px;
    bottom: 14px;
    font-size: 34px;
    color: #b3afaf;
    padding: 20px;
}
.container {
  padding-top: 100px;
}
.list {
    position: relative;
    z-index: 0;
    overflow: hidden;
    padding-top: 20px;
    background: #fff;
  }
  .list .item {
    float: left;
    position: relative;
    width: 370px;
    padding: 0 10px 33px;
    overflow: hidden;
    background-color: #fff;
  }
  .list .item:nth-child(2n+1) {
    padding: 0 10px 33px 20px;
  }
  .list .item .good {
    width: 100%;
  }
  .list .item .hd {
    border-radius: 4px;
    position: relative;
    z-index: 0;
    background-color: #f4f4f4;
  }
  .list .item .good .wraper {
  }
  .list .item .hd img{
    display: block;
    width: 100%;
    height: 345px;
    border-radius: 4px 4px 0 0;
    background-color: #f4f4f4;
  }
  .list .item .hd .desc{
    background: #F1ECE2;
    border-radius: 0 0 4px 4px;
    font-size: 24px;
    color: #9F8A60;
    letter-spacing: 0;
    line-height: 29px;
    padding: 20px 10px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .list .item .name {
    margin: 20px auto 10px;
    padding: 0 10px;
    line-height: 1;
    text-align: left;
    font-size: 28px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    color: #333;
  }
  .list .item .price {
    line-height: 1;
    font-size: 33px;
    text-align: left;
    color: #b4282d;
    padding: 20px 10px;
  }
  .more {
    padding: 30px;
    margin-top: 20px;
    text-align: center;
    background: #f1f1f1;
  }
</style>


