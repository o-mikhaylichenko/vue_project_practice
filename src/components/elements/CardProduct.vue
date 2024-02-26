<template>
    <div :class="{
        'card':true,
        'card__horizontally': horizontally
        }"
        @click="router.push(`/description/${id}`)"
        >
        <img :src="preview" alt="image" class="card__image">
        <div class="card__info">
          <h2 class="card__name">{{name}}</h2>
          <p class="card__description" v-if="!horizontally">{{description}}</p>  
        </div>

        <div :class="{
            'card__footer': true,
            'card__footer_horizontally': !horizontally
        }">   
            <p class="card__price"> {{`${price.toLocaleString()} ₽`}} </p>
            <ButtionUI @click.stop="$emit('clickCardButton')"
            :rotate="horizontally" 
            />
        </div>
    </div>
</template>

<script>
import { useRouter } from 'vue-router'
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
    id:{
        type: Number,
        default: 0
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
    const router = useRouter()

    return{
        router
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #D58C51;
    padding: 43px 20px 35px 20px;
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
        height: 70px;
    
        :deep(button) {
            transform: rotate(45deg);
        }

        .card__info {
            margin-top: 0;
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
        width: 270px;
        height: 271px;
    }

    &__info {
        margin-top: 31px;
        flex-direction: row;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        gap: 13px;
    }

    &__description {
         font-size: 14px;
         font-weight: 400;
         margin-top: 13px;
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
        box-sizing: border-box;
        gap: 30px;
    }
}
</style>
