<template>
  <HeaderMain title="НАША ПРОДУКЦИЯ"/>
  <MainList
    :listArray="arrayMain"
    @clickCard="clickCard"
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

    const clickCard = (item) => {
      console.log('item ',item);
      store.commit('SetbasketProducts', item.id)
    }

    return {
      arrayMain,
      clickCard
    }
  }
}
</script>

<style lang="scss" scoped>
:deep(.card) {
  width: 24%;
}
</style>
