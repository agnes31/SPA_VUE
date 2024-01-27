import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CatalogueView from '../views/CatalogueView.vue'
import ContactView from '../views/ContactView.vue'
import CreateProductView from '../views/CreateProductView.vue'
import ModifView from '../views/ModifView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/catalogue',
    name: 'catalogue',
    component: CatalogueView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/create-product',
    name: 'create-product',
    component: CreateProductView
  },
  {
    path: '/modif-product/:id',
    name: 'modifProduct',
    component: ModifView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
