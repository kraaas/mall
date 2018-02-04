<template>
  <div>
    <mt-header class="fixStatusBar" fixed :title="title">
        <mt-button slot="left" @click="back" icon="back">返回</mt-button>
        <slot name="right" slot="right"></slot>
    </mt-header>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'header-back',
  props: ['title', 'right'],
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
.mint-header.is-fixed {
  z-index: 100;
}
</style>

