<template>
    <button class="button">{{ title }}</button>
  </template>

<script>

export default {
  name: 'ButtonUi',
  components: {
  },
  props: {
    title: {
        type: String,
        default: '+'
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
  background-color: transparent;
  border-radius: 50%;
  border: 1px solid #d58c51;
  color: #d58c51;
  display: flex;
  align-items: center;
  justify-content: center;
  // font-size: 22px;
  cursor: pointer;

  &:hover {
    background-color: #d58c51;
    border: 1px solid #d58c51;
  }
  }
</style>
