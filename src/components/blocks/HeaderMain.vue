<template>
  <header class="header">
    <div :class="{
      'container header__wrapper': true,
      'container__secandary': smallContainer
    }">
    <div class="header__basket" v-if="isBasket">
      <router-link to="/">
        <ButtionUI title="←"/>
      </router-link>
    </div>
      <h1 class="header__title">{{ title }}</h1>   
      <div class="header__right">
        <div class="header__info">
          <p class="header__text" v-if="!isBasket">{{ countBasket }} товара</p>
          <p class="header__text" v-if="!isBasket">на сумму {{ priceInBasket }} ₽</p>
        </div>
        <router-link to="/about" v-if="!isBasket">
          <basketIcon />
        </router-link>
      </div> 
    </div>
  </header>
</template>

<script>
import basketIcon from '@/components/icons/basketIcon.vue'
import ButtionUI from '@/components/ui/ButtonUi.vue'
import { useStore } from 'vuex'
import { computed } from 'vue'

export default {
  name: 'HeaderMain',
  components: {
    basketIcon,
    ButtionUI
  },
  props: {
    isBasket: {
      type: Boolean,
      default: false
    },
    smallContainer: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    }
  },
  setup() {
    const store = useStore()

    const countBasket = computed(() => {
      return store.getters.getCountProductsInBasket
    })
    
    const priceInBasket = computed(() => {
      return store.getters.getAllPricePoductsInBasket
    })
  
    return {
      countBasket,
      priceInBasket
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  padding: 54px 70px;
  align-items: center;
  color: #FFF;
  background-color: #161516;

  &__wrapper {
    display: flex;
    justify-content: space-between;
  }

  &__right {
    display: flex;
    justify-content: space-between;
    gap: 20px;
  }

  &__title {
    font-size: 31px;
    font-weight: 700;
  }

  &__basket {
    align-items: center;
    gap: 20px;
  }

  &__info {
    display: flex;
    flex-direction: column;
  }

  &__text {
    font-size: 17px;
    font-weight: 500;
  }
}
</style>
