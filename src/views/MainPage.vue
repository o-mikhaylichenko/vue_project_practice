<template>
  <HeaderMain/>
  <MainList/>
</template>

<script>
import HeaderMain from '@/components/blocks/HeaderMain.vue'
import MainList from '@/components/blocks/MainList.vue'

export default {
  name: 'MainPage',
  components: {
    HeaderMain,
    MainList
  },
  props: {
  },
  setup () {
  }
}
</script>

<style lang="scss" scoped>

</style>
