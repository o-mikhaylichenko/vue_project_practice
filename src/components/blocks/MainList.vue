<template>
  <main class="container main">
    <CardProduct 
    :preview="require('@/assets/images/image_1.png')"
    name = "Устрицы по рокфеллеровски"
    description = "Значимость этих проблем настолько очевидна, что укрепление и развитие структуры"
    price = "2 700"   
    />
    <CardProduct 
    :preview="require('@/assets/images/image_2.png')"
    name = "Свиные ребрышки на гриле с зеленью"
    description = "Не следует, однако забывать, что реализация намеченных плановых"
    price = "1 600"  
    />
    <CardProduct 
    :preview="require('@/assets/images/image_3.png')"
    name = "Креветки по-королевски в лимонном соке"
    description = "Значимость этих проблем настолько очевидна, что укрепление и развитие структуры обеспечивает широкому кругу"
    price = "1 820"  
    />
    <CardProduct 
    :preview="require('@/assets/images/image_1.png')"
    name = "Устрицы по рокфеллеровски"
    description = "Значимость этих проблем настолько очевидна, что укрепление и развитие структуры"
    price = "2 700"  
    />
    <CardProduct 
    :preview="require('@/assets/images/image_1.png')"
    name = "Устрицы по рокфеллеровски"
    description = "Значимость этих проблем настолько очевидна, что укрепление и развитие структуры"
    price = "2 700"  
    />
    <CardProduct 
    :preview="require('@/assets/images/image_2.png')"
    name = "Свиные ребрышки на гриле с зеленью"
    description = "Не следует, однако забывать, что реализация намеченных плановых"
    price = "1 600"  
    />
    <CardProduct 
    :preview="require('@/assets/images/image_3.png')"
    name = "Креветки по-королевски в лимонном соке"
    description = "Значимость этих проблем настолько очевидна, что укрепление и развитие структуры обеспечивает широкому кругу"
    price = "1 820" 
    />
    <CardProduct 
    :preview="require('@/assets/images/image_1.png')"
    name = "Устрицы по рокфеллеровски"
    description = "Значимость этих проблем настолько очевидна, что укрепление и развитие структуры"
    price = "2 700"  
    />
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
  },
  setup () {
  }
}
</script>

<style lang="scss" scoped>
.main {
  background: #161516;
  padding: 27px 68px 67px 70px;
  display: flex;
  flex-wrap: wrap;
  row-gap: 35px;
  column-gap: 20px;
  }
</style>
