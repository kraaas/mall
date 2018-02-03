<template>
    <label class="mint-checklist-label">
        <input type="checkbox" class="mint-checkbox-input" @change="check"> 
        <span class="mint-checkbox-core"></span>
    </label>
</template>
<script>
export default {
  name: 'check-box',
  methods: {
    check (e) {
      e.stopPropagation()
    }
  }
}
</script>
<style scoped>
.mint-checkbox-input {
    transform: scale(2)
}
</style>
