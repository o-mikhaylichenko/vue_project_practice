<template>
  <HeaderMain title="НАША ПРОДУКЦИЯ"/>
  <MainList
    :listArray="arrayMain"
    />
</template>

<script>
import HeaderMain from '@/components/blocks/HeaderMain.vue'
import MainList from '@/components/blocks/MainList.vue'
import { useStore } from 'vuex'
import { computed } from 'vue'

export default {
  name: 'MainPage',
  components: {
    HeaderMain,
    MainList
  },
  props: {
  },
  setup () {
    const store = useStore()

    const arrayMain = computed(() => {
      return store.getters.getProducts
    })
    return {
      arrayMain
    }
  }
}
</script>

<style lang="scss" scoped>
:deep(.card) {
  width: 24%;
}
</style>
