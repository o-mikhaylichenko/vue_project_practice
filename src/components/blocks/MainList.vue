<template>
  <main class="main">
    <div :class="{
      'container main__wrapper': true,
      'main__wrapper_column': column,
      'container__secandary': column
      }">
      <CardProduct 
        :horizontally="column"
        v-for="(item, i) in listArray"
          :key="i"
          :name="item.name"
          :description="item.description"
          :price="item.price"
          :preview="item.image"
          @clickCardButton="$emit('clickCard',item)"
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
      default: '255px'
    },
    column: {
      type: Boolean,
      default: false
    },
    listArray: {
      type: Array,
      default: () => {}
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

  &__wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 35px 0;

    &_column {
      flex-direction: column;
    }
  }
  .container__secandary {
    width: 850px; 
  }
  }
</style>
