<template>
    <div class="card">
        <img :src="preview" alt="image" class="card__image">
        <div class="card__content">
            <h2 class="card__name">{{name}}</h2>
            <p class="card__description">{{description}}</p>
        </div>
        <div class="card__footer">
            <h2 class="card__price">{{`${price} ₽`}}</h2>
            <ButtionUI />
        </div>
    </div>
</template>

<script>
import ButtionUI from '@/components/ui/ButtonUi.vue'

export default {
  name: 'CardProduct',
  components: {
    ButtionUI
  },
  props: {
    name: {
        type: String,
        default: ''
    },
    description: {
        type: String,
        default: ''
    },
    price: {
        type: String,
        default: ''
    },
    preview: {
        type: String,
        default: ''
    }
  },
  setup () {
  }
}
</script>

<style lang="scss" scoped>
.card {
    width: 312px;
    height: 552px;
    border: 1px solid #D58C51;
    padding: 43px 0px 32px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: transparent;
    color: #FFF;
    font-size: 16px;
    font-weight: 500;
    &__image {
        width: 270px;
        height: 271px
    }
    &__content {
        width: 264px;
        margin-top: 31px;
        flex-direction: column;
        display: flex;
        gap: 13px;
    }
    &__description {
        font-size: 14px;
        font-weight: 400;
    }
    &__footer {
        width: 270px;
        margin-top: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
}
</style>
