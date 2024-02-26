<template>
  <div class="wrapper">
    <HeaderMain 
    isItem
    />
    <div class="main">
      <img :src="product.image" alt="image" class="main__image">
      <div class="main__info">
        <h1 class="main__name">{{product.name}}</h1>
        <p class="main__description">{{product.description}}</p>  
        <div class="main__info__footer">
          <span class="main__price">{{ product.price.toLocaleString() }} ₽</span>
          <ButtonExitUi 
            title="В корзину" 
            buttonAddInBasket 
            @click="AddInBasket()"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderMain from '@/components/blocks/HeaderMain.vue'
import ButtonExitUi from '@/components/ui/ButtonExitUi.vue'
import { onBeforeMount, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'

export default {
  name: 'DescriptionPage',
  components: {
    HeaderMain,
    ButtonExitUi
  },
  props: {
  },
  setup () {
    const route = useRoute()
    const store = useStore()

    const product = computed(() => {
      return store.getters.getProductDescription
    })

    onBeforeMount(() => {
      store.commit('SetProductDescription', route.params.id)
    })

    const AddInBasket = () => {
      store.commit('SetbasketProducts', product.value.id)
    }

    return {
      product,
      AddInBasket
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  height: 100vh;
  background-image: url('@/assets/images/bgDescription.png');
  background-size: cover;
  background-repeat: no-repeat;

  :deep(.header) {
    background-color: transparent;
  }
}

.main {
  font-family: 'Montserrat';
  display: flex;
  justify-content: center;

  &__image {
    width: 501px;
    height: 503px;
    margin: 0 140px 0 60px;
  }

   &__info {
     max-width: 500px;

     &__footer {
      display: flex;
      align-items: center;
      gap: 137px;
     }
   }

  &__name {
    font-size: 30px;
    font-weight: 500;
    color: #D58C51;
    margin-top: 58px;
    margin-bottom: 21px;
  }

  &__description {
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 139px;
    color: #ffffff;
  }

  &__price {
    font-size: 23px;
    color: #ffffff;
  }
}
</style>
