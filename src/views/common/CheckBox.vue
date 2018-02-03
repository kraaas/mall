<template>
    <label class="check-wrap">
      <input 
        class="check-input" 
        type="checkbox" 
        v-model="value"
        @change="$emit('change', value)"
      >
      <i 
        class="iconfont" 
        :class="{'icon-checked': value, 'icon-unchecked': !value}"
      ></i>
    </label>
</template>
<script>
export default {
  name: 'check-box',
  props: ['checked'],
  data () {
    return {
      value: this.checked
    }
  },
  methods: {
    check (e) {
      e.stopPropagation()
    }
  }
}
</script>
<style scoped>
.check-wrap {
  padding: 20px;
  position: relative;
  z-index: 100;
}

.check-input {
  display: block;
  width: 30px;
  height: 30px;
  /* display: none; */
}

.check-wrap input:checked + i {
  color: #ed9334;
}
.check-wrap i {
  display: none;
  font-size: 50px;
  z-index: -1;
  position: relative;
  color: #d2d1d1;
}
</style>
