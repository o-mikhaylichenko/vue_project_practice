<template>
    <button class="button">+</button>
  </template>

<script>

export default {
  name: 'ButtonUi',
  components: {
  },
  props: {
    name: {
        type: String,
        default: ''
    }
  },
  setup () {
  }
}
</script>

<style lang="scss" scoped>
.button {
  width: 30px;
  height: 30px;
  background: transparent;
  border-radius: 50%;
  border: 1px solid #FFF;
  color: #FFF;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  }
</style>
