<template>
  <main class="main">
    <div :class="{
      'container main__wrapper': true,
      'main__wrapper__column': column,
      'container__secandary': column
      }">
      <CardProduct 
        :horizontally="column"
        v-for="(item, i) in listArray"
          :key="i"
          :id="item.id"
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
      default: '163px'
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
  //  display: flex;
  //  justify-content: center;
  // align-items: flex-start;
  background-color: #161516;
  color: #ffffff;
  height: calc(100vh - v-bind(minusHeigth));
  padding: 0px 70px;
  overflow: auto;
  scrollbar-width: none;

  &__wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 35px 0;

    &__column {
      flex-direction: column;
    }
  }

  .container__secandary {
    width: 900px; 
  }

  }
</style>
