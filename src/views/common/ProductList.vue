<template>
    <ul class="list">
        <li class="item" v-for="(item, idx) in list" :key="idx">
            <router-link to="detail" class="good">
                <div class="hd">
                    <div class="wraper">
                    <img v-lazy="item.listPicUrl">
                    </div>
                </div>
                <div class="name">{{item.name}}</div>
                <div class="price">¥{{item.retailPrice}}</div>
            </router-link>
        </li>
    </ul>
</template>

<script>
  export default {
    props: ['list']
  }
</script>

<style scoped>
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
</style>
