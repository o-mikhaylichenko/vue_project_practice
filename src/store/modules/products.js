import { v4 as uuidv4 } from 'uuid'

export default {
    state: {
      products: [
        {
            id: 1,
            name: "Устрицы по рокфеллеровски",
            description: "Значимость этих проблем настолько очевидна, что укрепление и развитие структуры",
            price: 2700,
            image: require('@/assets/images/image_1.png')
        },
        {
            id: 2,
            name: "Свиные ребрышки на гриле с зеленью",
            description: "Не следует, однако забывать, что реализация намеченных плановых",
            price: 1600,
            image: require('@/assets/images/image_2.png')
        }
        ,
        {
            id: 3,
            name: "Креветки по-королевски в лимонном соке",
            description: "Значимость этих проблем настолько очевидна, что укрепление и развитие структуры обеспечивает широкому кругу",
            price: 1820,
            image: require('@/assets/images/image_3.png')
        }
        ,
        {
            id: 4,
            name: "Устрицы по рокфеллеровски",
            description: "Значимость этих проблем настолько очевидна, что укрепление и развитие структуры ",
            price: 2700,
            image: require('@/assets/images/image_1.png')
        },
        {
            id: 5,
            name: "Устрицы по рокфеллеровски",
            description: "Значимость этих проблем настолько очевидна, что укрепление и развитие структуры",
            price: 2700,
            image: require('@/assets/images/image_1.png')
        },
        {
            id: 6,
            name: "Свиные ребрышки на гриле с зеленью",
            description: "Не следует, однако забывать, что реализация намеченных плановых",
            price: 1600,
            image: require('@/assets/images/image_2.png')
        }
        ,
        {
            id: 7,
            name: "Креветки по-королевски в лимонном соке",
            description: "Значимость этих проблем настолько очевидна, что укрепление и развитие структуры обеспечивает широкому кругу",
            price: 1820,
            image: require('@/assets/images/image_3.png')
        }
        ,
        {
            id: 8,
            name: "Устрицы по рокфеллеровски",
            description: "Значимость этих проблем настолько очевидна, что укрепление и развитие структуры ",
            price: 2700,
            image: require('@/assets/images/image_1.png')
        } 
      ],
      basketProducts: [],
      countProductsInBasket: 0,
      allPricePoductsInBasket: 0,
      productDescription: null
    },
    getters: {
      getProducts: state => state.products,
      getBasketProducts: state => state.basketProducts,
      getCountProductsInBasket: state => state.countProductsInBasket,
      getAllPricePoductsInBasket: state => state.allPricePoductsInBasket,
      getProductDescription: state => state.productDescription
    },
    mutations: {
      SetbasketProducts (state, val) {
        state.products.forEach(item => {
          if (item.id === val) {
            const itemBasket = {
              id: item.id,
              idx: uuidv4(),
              name: item.name,
              price: item.price,
              image: item.image
            }
            state.basketProducts.push(itemBasket)
          }
        })
  
        state.countProductsInBasket = state.basketProducts.length
        state.allPricePoductsInBasket = state.basketProducts.reduce((sum, item) => sum + item.price, 0)
      },
      SetBasketRemoveItem (state, val) {
        state.basketProducts = state.basketProducts.filter(item => {
          return item.idx !== val
        })

        state.countProductsInBasket = state.basketProducts.length
        state.allPricePoductsInBasket = state.basketProducts.reduce((sum, item) => sum + item.price, 0)
      },
      SetProductDescription (state, val) {
        state.productDescription = state.products.find(element => {
          return element.id === +val
        })
      }
    },
    actions: {
    }
  }