<template>
  <div class="fixStatusBar">
    <mt-header class="fixStatusBar" fixed :title="title">
        <mt-button slot="left" @click="back">
            返回
            <i slot="icon" class="iconfont icon-xiangzuojiantou"></i>
        </mt-button>
    </mt-header>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'header-back',
  props: ['title'],
  data () {
    return {}
  },
  methods: {
    back () {
      this.$router.back()
    }
  }
}
</script>
<style scoped>
.content {
    margin-top: 88px;
}
</style>

