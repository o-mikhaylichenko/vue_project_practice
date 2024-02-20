<template>
  <main class="main">
    <div :class="{
      'container main__wrapper': true,
      'main__wrapper_column': column,
      'container__secandary': column
      }">
      <CardProduct 
    :horizontally="column"
    :preview="require('@/assets/images/image_1.png')"
    name = "Устрицы по рокфеллеровски"
    description = "Значимость этих проблем настолько очевидна, что укрепление и развитие структуры"
    price = "2 700"   
    />
    <CardProduct 
    :horizontally="column"
    :preview="require('@/assets/images/image_2.png')"
    name = "Свиные ребрышки на гриле с зеленью"
    description = "Не следует, однако забывать, что реализация намеченных плановых"
    price = "1 600"  
    />
    <CardProduct 
    :horizontally="column"
    :preview="require('@/assets/images/image_3.png')"
    name = "Креветки по-королевски в лимонном соке"
    description = "Значимость этих проблем настолько очевидна, что укрепление и развитие структуры обеспечивает широкому кругу"
    price = "1 820"  
    />
    <CardProduct 
    :horizontally="column"
    :preview="require('@/assets/images/image_1.png')"
    name = "Устрицы по рокфеллеровски"
    description = "Значимость этих проблем настолько очевидна, что укрепление и развитие структуры"
    price = "2 700"  
    />
    <CardProduct 
    :horizontally="column"
    :preview="require('@/assets/images/image_1.png')"
    name = "Устрицы по рокфеллеровски"
    description = "Значимость этих проблем настолько очевидна, что укрепление и развитие структуры"
    price = "2 700"  
    />
    <CardProduct 
    :horizontally="column"
    :preview="require('@/assets/images/image_2.png')"
    name = "Свиные ребрышки на гриле с зеленью"
    description = "Не следует, однако забывать, что реализация намеченных плановых"
    price = "1 600"  
    />
    <CardProduct 
    :horizontally="column"
    :preview="require('@/assets/images/image_3.png')"
    name = "Креветки по-королевски в лимонном соке"
    description = "Значимость этих проблем настолько очевидна, что укрепление и развитие структуры обеспечивает широкому кругу"
    price = "1 820" 
    />
    <CardProduct 
    :horizontally="column"
    :preview="require('@/assets/images/image_1.png')"
    name = "Устрицы по рокфеллеровски"
    description = "Значимость этих проблем настолько очевидна, что укрепление и развитие структуры"
    price = "2 700"  
    />
    </div>
  </main>
</template>

<script>
import CardProduct from '@/components/elements/CardProduct.vue'

export default {
  name: 'MainList',
  components: {
    CardProduct
},
  props: {
    minusHeigth: {
      type: String,
      default: '176px'
    },
    column: {
      type: Boolean,
      default: false
    }
  },
  setup () {
  }
}
</script>

<style lang="scss" scoped>
.main {
  background: #161516;
  color: #ffffff;
  height: calc(100vh - v-bind(minusHeigth));
  padding: 27px 68px 67px 70px;
  overflow: auto;
  // display: flex;
  // flex-wrap: wrap;
  // row-gap: 35px;
  // column-gap: 20px;

  &__wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 35px 0;

    &_column {
      flex-direction: column;
    }
  }
  }
</style>
