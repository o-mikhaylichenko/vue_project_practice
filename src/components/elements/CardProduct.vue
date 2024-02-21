<template>
    <div :class="{
        'card':true,
        'card__horizontally': horizontally
        }"
        >
        <img :src="preview" alt="image" class="card__image">
        <div class="card_info">
          <h2 class="card__name">{{name}}</h2>
          <p class="card__description" v-if="!horizontally">{{description}}</p>  
        </div>

        <div :class="{
            'card__footer': true,
            'card__footer_horizontally': !horizontally
        }">   
            <p class="card__price"> {{`${price} ₽`}} </p>
            <ButtionUI @click="$emit('clickCardButton')"
            :rotate="horizontally" 
            />
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
    horizontally: {
        type: Boolean,
        default: false
    },
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
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #D58C51;
    padding: 20px 5px;
    font-size: 17px;
    font-weight: 500;
    
    &:hover {
        color: #d58c51;
    }

    :deep(button) {
        font-size: 25px;
    }

    &__horizontally {
        align-items: center;
        flex-direction: row;
        border: none;
        height: 100px;
    
        :deep(button) {
            transform: rotate(45deg);
        }
        .card__name {
            margin-left: 100px;
            margin-bottom: 0; 
        }

        .card__price {
            color: #d58c51; 
        }
        .card__footer {
            margin-top: inherit;
            margin-inline-start: auto;
            gap: 30px;
        }

        .card__image {
           width: 122px;
           height: 122px;
        }
    }
    &__image {
        width: 250px;
        height: 251px;
        margin-bottom: 31px;
    }
    &__info {
        margin-top: 31px;
        flex-direction: row;
        display: flex;
        justify-content: space-between;
        gap: 13px;
    }
    &__description {
         font-size: 14px;
         font-weight: 400;
         margin-top: 31px;
         margin-bottom: 31px;
    }
    &__footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: auto;
    }
    &__footer_horizontally {
        display: flex;
        justify-content: space-between;
        align-items: center; 
        width: 100%;
        padding: 0 10px;
        box-sizing: border-box;
        gap: 30px;
    }
}
</style>
