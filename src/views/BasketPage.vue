<template>
  <HeaderMain 
    isBasket
    smallContainer
    title="КОРЗИНА С ВЫБРАННЫМИ ТОВАРАМИ"
  />
  <MainList 
    :listArray="arrayBasket"
    @clickCard="clickCard"
    column
    minusHeigth="250px"
  />
  <hr class="basket__line">
  <footer class="container footer">
    <div class="footer__total">
        <div class="footer__info">
            <span>ЗАКАЗ НА СУММУ:</span>
            <span class="footer__amount">{{ priceInBasket }} ₽</span>
        </div>
        <button class="basket__button">Оформить заказ</button>
    </div>
  </footer>
</template>

<script>
import HeaderMain from '@/components/blocks/HeaderMain.vue'
import MainList from '@/components/blocks/MainList.vue'
import { useStore } from 'vuex'
import { computed } from 'vue'

export default {
  name: 'BacketPage',
  components: {
    HeaderMain,
    MainList
  },
  props: {
  },
  setup () {
    const store = useStore()

    const arrayBasket = computed(() => {
      return store.getters.getBasketProducts
    })

    const priceInBasket = computed(() => {
      return store.getters.getAllPricePoductsInBasket
    })

    const clickCard = (item) => {
      store.commit('SetBasketRemoveItem', item.idx)
    }

    return {
      arrayBasket,
      priceInBasket,
      clickCard
    }
  }
}
</script>

<style lang="scss" scoped>

.footer {
        background-color: #161516;
        padding: 20px 0px 27px 0px;
        color: #ffffff;
        display: flex;
        justify-content: center;
        &__total {
            width: 895px;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        &__info {
            display: flex;
            gap: 16px;
            align-items: center;
            font-size: 21px;
            font-weight: 400;
        }
        &__amount {
            color: #d58c51;
            font-size: 18px;
            font-weight: 400;
        }
    }

.basket__line {
  margin: 0;
  padding: 0;
  border: 1px solid #D58C51;
}

.basket__button {
  background-color:#D58C51;
  color: #161516;
  width: 200px;
  height: 42px;
  font-size: 14px;
}
</style>
