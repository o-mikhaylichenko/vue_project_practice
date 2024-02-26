import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../views/MainPage.vue'
import BasketPage from '../views/BasketPage.vue'
import DescriptionPage from '../views/DescriptionPage.vue'
import AuthPage from '../views/AuthPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: MainPage
  },
  {
    path: '/basket',
    name: 'basket',
    component: BasketPage
  },
  {
    path: '/description/:id',
    name: 'description',
    component: DescriptionPage
  },
  {
    path: '/auth',
    name: 'auth',
    component: AuthPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
