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
      <h2 class="text-2xl font-semibold mb-6 text-center">Modifier le produit</h2>
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
              <option value="Soin de la peau">Soin de la peau</option>
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

          <div class="mb-6 mt-4">
            <button type="button" @click="updateProduct" class="w-full bg-pink-200 text-white p-2 rounded-md hover:bg-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:ring-opacity-50 transition duration-150 ease-in-out">
                Update
            </button>
          </div>
        </form>
      </div>
      <div v-else>
        <div class="w-64 h-64 bg-white mx-auto p-5 relative absolute right-0 top-0 bottom-0 w-1/2" style="background-image: url('https://i.pinimg.com/564x/72/bd/86/72bd86183fff8f4b151eb7fe34f2a930.jpg'); background-size:cover; background-position:10% auto;"></div>
        <h2 class="text-pink-600 font-semibold mb-4 text-center">Le message a bien été changé!</h2>
        <button type="button" @click="productToCreate" class="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
          Créer un nouveau produit
        </button>
        <router-link to="/catalogue">
          <button type="button" class="w-full bg-green-500 text-white p-2 rounded-md hover:bg-green-600 mt-4">
            Retourner à la liste des produits
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import ProductDataService from '@/services/ProductDataService'
export default {
  props: ['inventory', 'updateStock'],
  data () {
    return {
      message: null,
      submitted: false,
      product: {},
      id: parseInt(this.$route.params.id)
    }
  },
  methods: {
    updateProduct () {
      ProductDataService.update(this.id, this.product)
        .then((response) => {
          this.updateStock(this.productIndex, this.product)
          this.submitted = true
          this.message = null
        })
        .catch((e) => {
          this.message = e.response.data.message
        })
    }
  },
  computed: {
    productIndex () {
      return this.inventory.findIndex((item) => item.id === this.id)
    }
  },
  mounted () {
    ProductDataService.get(this.id).then((response) => {
      this.product = response.data
    })
  }
}
</script>
