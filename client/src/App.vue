<template>
<div>
  <header>
      <div class="container mx-auto px-6 py-3">
          <div class="flex items-center justify-between">
              <div class="hidden w-full text-gray-600 md:flex md:items-center">
                  <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M16.2721 10.2721C16.2721 12.4813 14.4813 14.2721 12.2721 14.2721C10.063 14.2721 8.27214 12.4813 8.27214 10.2721C8.27214 8.06298 10.063 6.27212 12.2721 6.27212C14.4813 6.27212 16.2721 8.06298 16.2721 10.2721ZM14.2721 10.2721C14.2721 11.3767 13.3767 12.2721 12.2721 12.2721C11.1676 12.2721 10.2721 11.3767 10.2721 10.2721C10.2721 9.16755 11.1676 8.27212 12.2721 8.27212C13.3767 8.27212 14.2721 9.16755 14.2721 10.2721Z" fill="currentColor" /><path fill-rule="evenodd" clip-rule="evenodd" d="M5.79417 16.5183C2.19424 13.0909 2.05438 7.39409 5.48178 3.79417C8.90918 0.194243 14.6059 0.054383 18.2059 3.48178C21.8058 6.90918 21.9457 12.6059 18.5183 16.2059L12.3124 22.7241L5.79417 16.5183ZM17.0698 14.8268L12.243 19.8965L7.17324 15.0698C4.3733 12.404 4.26452 7.97318 6.93028 5.17324C9.59603 2.3733 14.0268 2.26452 16.8268 4.93028C19.6267 7.59603 19.7355 12.0268 17.0698 14.8268Z" fill="currentColor" />
                  </svg>
                  <span class="mx-1 text-sm">NY</span>
              </div>
              <h1 class="text-3xl xl:text-4xl font-semibold leading-7 xl:leading-9 text-gray-800 dark:text-white px-10 w-full text-center mx-auto">Boutique Allure</h1>
              <div class="flex items-center justify-end w-full">
                <button type="button" class="mr-2" @click="toggleSideBar">
                      <svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                      </svg>
                  </button>
                  <span class="bg-gray-800 rounded-full text-white h-7 w-7 flex items-center justify-center">{{ totalQuantity }}</span>
            </div>
          </div>
           <nav class="sm:flex sm:justify-center sm:items-center mt-4">
          <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
            <router-link to="/" class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</router-link>
          </li>
          <li>
            <router-link to="/catalogue" class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Catalogue</router-link>
          </li>
          <li>
            <router-link to="/contact" class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Contact</router-link>
          </li>
        </ul>
          </nav>
          <div class="relative mt-6 max-w-lg mx-auto">
          <span class="absolute inset-y-0 left-0 pl-3 flex items-center">
              <svg class="h-5 w-5 text-gray-500" viewBox="0 0 24 24" fill="none">
                  <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
          </span>

              <input class="w-full border rounded-md pl-10 pr-4 py-2 focus:border-blue-500 focus:outline-none focus:shadow-outline" type="text" placeholder="Search">
          </div>
      </div>
  </header>
    <router-view
    :addToInventory="addInventory"
    :inventory="inventory"
    :add="addToCart"
    :decreaseInventory="removeInventory"
    :erase="removeFromCart"
    :updateStock="updateInventory"

    />
    <AppFooter/>
    <SideCart
    v-if="showSidebar"
    :toggle="toggleSideBar"
    :cart="cart"
    :inventory="inventory"
    :erase="removeFromCart"
    />
  </div>
</template>

<script>
import AppFooter from '@/components/AppFooter.vue'
import SideCart from '@/components/SideCart.vue'
import ProductDataService from '@/services/ProductDataService'

export default {
  components: {
    SideCart,
    AppFooter
  },
  mounted () {
    ProductDataService.getAll()
      .then(response => {
        this.inventory = response.data
      })
  },
  data () {
    return {
      showSidebar: false,
      inventory: [],
      cart: {
      }
    }
  },
  methods: {
    toggleSideBar () {
      this.showSidebar = !this.showSidebar
    },
    addToCart (product, index) {
      if (!this.cart[product]) this.cart[product] = 0
      this.cart[product] += this.inventory[index].quantity
    },
    removeFromCart (name) {
      delete this.cart[name]
    },
    addInventory (product) {
      this.inventory.push(product)
    },
    updateInventory (index, data) {
      this.inventory[index].name = data.name
      this.inventory[index].description = data.description
      this.inventory[index].price = data.price
      this.inventory[index].photo = data.photo
      this.inventory[index].category = data.category
      this.inventory[index].quantity = data.quantity
    },
    removeInventory (index) {
      this.inventory.splice(index, 1)
    }
  },
  computed: {
    totalQuantity () {
      return Object.values(this.cart).reduce((acc, curr) => {
        return acc + curr
      }, 0)
    }
  }
}
</script>
