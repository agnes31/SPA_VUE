<template>
    <div>
    <main class="my-8">
        <div class="container mx-auto px-6">
          <h3 class="text-gray-700 text-2xl font-medium">Wrist Watch</h3>
            <div class="flex justify-between items-center mt-3">
            <span class="text-sm text-gray-500">200+ Products</span>
            <router-link to="/create-product" class="circle-link inline-block px-4 py-2 text-gray-900 bg-gray-300 rounded-full hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 w-24 h-24 flex items-center justify-center">
                <svg class="w-8 h-8" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M12 4v16m8-8H4"></path>
                </svg>
            </router-link>
            </div>
            <div class="grid sm:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 gap-4  my-4" >
                <div v-for="(product, i) in inventory" :key="i" class="w-full max-w-sm  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <div class="flex items-end justify-end h-56 w-full bg-cover hover:bg-blue-500" :style="{ 'background-image': `url(${product.photo})` }"
                    :class="{ 'animate-half-spiral': clickedPhotoIndex === i }"
                    @click="toggleBounce(i)">
                        <button @click="add(product.name, i)" class="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                            <svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                        </button>
                    </div>
                    <div class="px-5 py-3">
                        <h3 class="text-gray-700 uppercase">{{ product.name }}</h3>
                        <span class="text-gray-500 mt-2">${{ product.price.toFixed(2) }}</span>
                        <div class="mt-2 text-gray-700">{{ product.description }}</div>
                        <div class=mt-4 flex items-center bg-gray-200 rounded-lg>
                            <button @click="product.quantity--" class="px-3 py-2 text-gray-700 bg-gray-300 rounded-l-lg focus:outline-none">-</button>
                            <input v-model.number="product.quantity" type="number" class="mt-4 w-[80px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <button @click="product.quantity++" class="px-3 py-2 text-gray-700 bg-gray-300 rounded-r-lg focus:outline-none">+</button>
                        </div>
                        <h1 class="text-2xl font-thin mt-4">Category</h1>
                        <div class="text-sm text-gray-500">{{ product.category }}</div>
                        <div class="mt-4 flex items-center">
                          <router-link :to="{ name: 'modifProduct', params: { id: product.id }}" class="text-center w-full bg-pink-200 text-white p-2 rounded-md hover:bg-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:ring-opacity-50 transition duration-150 ease-in-out">Update</router-link>
                        </div>
                        <button type="button" @click="deleteProduct(product.id)" class="w-full mt-4 bg-red-500 text-white p-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50 transition duration-150 ease-in-out">
                          Delete
                        </button>
                    </div>
                </div>
            </div>
            <div class="flex justify-center">
                <div class="flex rounded-md mt-8">
                    <a href="#" class="py-2 px-4 leading-tight bg-white border border-gray-200 text-blue-700 border-r-0 ml-0 rounded-l hover:bg-blue-500 hover:text-white"><span>Previous</span></a>
                    <a href="#" class="py-2 px-4 leading-tight bg-white border border-gray-200 text-blue-700 border-r-0 hover:bg-blue-500 hover:text-white"><span>1</span></a>
                    <a href="#" class="py-2 px-4 leading-tight bg-white border border-gray-200 text-blue-700 border-r-0 hover:bg-blue-500 hover:text-white"><span>2</span></a>
                    <a href="#" class="py-2 px-4 leading-tight bg-white border border-gray-200 text-blue-700 border-r-0 hover:bg-blue-500 hover:text-white"><span>3</span></a>
                    <a href="#" class="py-2 px-4 leading-tight bg-white border border-gray-200 text-blue-700 rounded-r hover:bg-blue-500 hover:text-white"><span>Next</span></a>
                </div>
            </div>
        </div>
    </main>
</div>
</template>

<script>
import ProductDataService from '@/services/ProductDataService'
export default {
  props: ['inventory', 'add', 'decreaseInventory', 'erase'],
  data () {
    return {
      clickedPhotoIndex: null
    }
  },
  methods: {
    toggleBounce (i) {
      this.clickedPhotoIndex = i
    },
    deleteProduct (id) {
      ProductDataService.delete(id)
        .then(response => {
          this.decreaseInventory(this.productIndex)
        })
        .catch((e) => {
          this.message = e.response.data.message
        })
    }
  },
  computed: {
    productIndex () {
      const index = this.inventory.findIndex((p) => {
        return p.id === this.id
      })
      return index
    }
  }
}
</script>

<style scoped>
.animate-half-spiral {
  animation: half-spiral 2s infinite;
}

@keyframes half-spiral {
  0% {
    transform: rotate(0deg) translateX(0px);
  }
  100% {
    transform: rotate(7deg) translateX(20px);
  }
}
</style>
