<template>
  <div v-show="message" class="flex justify-center items-center bg-white mb-2 text-red-500 p-2 rounded border-l-4 border-red-700">
  <div class="flex">
    <div class="flex-shrink-0">
      <svg class="h-5 w-5 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v4a1 1 0 102 0V5zm-1 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
      </svg>
    </div>
    <div class="ml-3">
      <p class="text-sm text-red-500">{{ message }}</p>
    </div>
  </div>
</div>
  <div class="min-h-screen flex items-center justify-center border-t border-gray-100 bg-nature2">
    <div class="border mt-2 p-6 rounded-md w-full md:w-2/3 lg:w-1/2 xl:w-1/3">
      <h2 class="text-2xl font-semibold mb-6 text-white flex items-center justify-center">Create a new product</h2>
      <div v-if="!submitted">
        <form>
          <div class="mb-4">
            <label for="productName" class="block text-lg font-medium text-gray-700 text-white">Name</label>
            <input type="text" id="productName" class="mt-1 p-2 border w-full rounded-md" v-model="product.name"/>
          </div>
          <div class="mb-4">
            <label for="productDescription" class="block text-lg font-medium text-gray-700 text-white">Description</label>
            <textarea id="productDescription" class="mt-1 p-2 border w-full rounded-md" v-model="product.description"></textarea>
          </div>
          <div class="mb-4">
            <label for="productPrice" class="block text-lg font-medium text-gray-700 text-white">Price (CAD)</label>
            <input type="number" id="productPrice" class="mt-1 p-2 border w-full rounded-md" v-model.number="product.price" />
          </div>
          <div class="mb-4">
            <label for="productPhoto" class="block text-lg font-medium text-gray-700 text-white">Photo</label>
            <input type="text" id="productPhoto" class="mt-1 p-2 border w-full rounded-md" v-model="product.photo" />
          </div>
          <div class="mb-4">
            <label for="productCategory" class="block text-lg font-medium text-gray-700 text-white">Category</label>
            <select id="productCategory" class="mt-1 p-2 border w-full rounded-md" v-model="product.category">
              <option value="">Select</option>
              <option value="Soins de la peau">Soins de la peau</option>
              <option value="Massage">Massage</option>
              <option value="Soin du visage">Soin du visage</option>
              <option value="Maquillage">Maquillage</option>
              <option value="Soins des cheveux">Soins des cheveux</option>
              <option value="Beauty">Beauty</option>
            </select>
          </div>
          <div class="mb-4">
            <label for="productQuantity" class="block text-lg font-medium text-gray-700 text-white">Quantity</label>
            <input type="number" id="productQuantity" class="mt-1 p-2 border w-full rounded-md" v-model="product.quantity" />
          </div>
          <div class="mb-6">
            <button type="button" @click="storeProduct" class="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
              Save
            </button>
          </div>
        </form>
      </div>
      <div v-else>
        <h2 class="text-2xl font-semibold mb-6 text-white text-center">Product created successfully!</h2>
        <button type="button" @click="productToCreate" class="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
          Create another product
        </button>
        <router-link to="/catalogue">
          <button type="button" class="w-full bg-green-500 text-white p-2 rounded-md hover:bg-green-600 mt-4">
            Return to Catalogue
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>

import ProductDataService from '@/services/ProductDataService'
export default {
  props: ['addToInventory'],
  data () {
    return {
      message: null,
      submitted: false,
      product: {
        name: '',
        description: '',
        price: '',
        photo: 'https://images.unsplash.com/photo-1548610762-7c6afe24c261?q=80&w=2376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D_1',
        category: '',
        quantity: 1
      }
    }
  },
  methods: {
    storeProduct () {
      ProductDataService.create(this.product)
        .then((response) => {
          this.product.id = response.data.id
          this.addToInventory(this.product)
          this.message = null
          this.submitted = true
        })
        .catch((e) => {
          this.message = e.response.data.message
        })
    },
    productToCreate () {
      this.submitted = false
      this.product = {}
    }
  }
}
</script>

<style scoped>
.bg-nature2 {
    background-image: url('~@/assets/bg.jpg');
    background-size: cover;
    background-position: center;
}
</style>
