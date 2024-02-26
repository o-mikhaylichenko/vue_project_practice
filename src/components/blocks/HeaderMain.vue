<template>
  <header class="header">
    <div :class="{
      'container header__wrapper': true,
      'container__secandary': smallContainer,
    }">
    <div class="header__basket" v-if="isBasket">
      <router-link to="/">
        <ButtonUI title="←"/>
      </router-link>
    </div>
    <ButtonUI v-if="isItem" title="←" @click="router.go(-1)"/>
    <h1 class="header__title" v-if ="!isItem">{{ title }}</h1>   
    <div class="header__right">
        <div class="header__info">
          <p class="header__text" v-if="!isBasket">{{ countBasket }} товара</p>
          <p class="header__text" v-if="!isBasket">на сумму {{ priceInBasket.toLocaleString() }} ₽</p>
        </div>
        <router-link to="/basket" v-if="!isBasket">
          <basketIcon />
        </router-link>
        <ButtonExitUi title="Выйти" @click.stop="clickExitAuth"/>
    </div> 
    </div>
  </header>
</template>

<script>
import basketIcon from '@/components/icons/basketIcon.vue'
import ButtonUI from '@/components/ui/ButtonUi.vue'
import ButtonExitUi from '@/components/ui/ButtonExitUi.vue'
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
  name: 'HeaderMain',
  components: {
    basketIcon,
    ButtonUI,
    ButtonExitUi
  },
  props: {
    isBasket: {
      type: Boolean,
      default: false
    },
    isItem: {
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
    const router = useRouter()

    const countBasket = computed(() => {
      return store.getters.getCountProductsInBasket
    })
    
    const priceInBasket = computed(() => {
      return store.getters.getAllPricePoductsInBasket
    })
  
    const clickExitAuth = () => {
      localStorage.setItem('isAuth', JSON.stringify(false))
      router.push('/auth')
    }
    
    return {
      countBasket,
      priceInBasket,
      router,
      clickExitAuth
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  padding: 54px 38px;
  color: #FFF;
  background-color: #161516;

  &__wrapper {
    display: flex;
    justify-content: space-between;
    margin: 0 35px
  }

  &__right {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
  }

  &__title {
    font-size: 31px;
    font-weight: 700;
    display: flex;
    align-items: center;
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
