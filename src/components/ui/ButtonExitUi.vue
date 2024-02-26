<template>
    <button :class="{
      'buttonExit': true,
      'buttonAdd': buttonAddInBasket
    }">
    {{ title }}
    </button>
  </template>

<script>

export default {
  name: 'ButtonExitUi',
  components: {
  },
  props: {
    title: {
        type: String,
        default: ''
    },
    buttonAddInBasket: {
        type: Boolean,
        default: false
    }
  },
  setup () {
  }
}
</script>

<style lang="scss" scoped>
.buttonExit {
  width: 200px;
  height: 42px;
  background-color: transparent;
  border: 1px solid #d58c51;
  color: #d58c51;
  font-size: 14px;
  font-weight: 400;
  cursor: pointer;

  &:hover {
    background-color: #d58c51;
    color: #161516;
  }
  }
.buttonAdd {
  width: 200px;
  height: 42px;
  background-color: #d58c51;
  color: #161516;

  &:hover {
    background-color: transparent;
    color: #d58c51;
  }
}
</style>