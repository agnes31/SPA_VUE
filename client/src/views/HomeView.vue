<template>
  <div class="flex justify-center items-center">
    <div class="2xl:mx-auto 2xl:container py-12 px-4 sm:px-6 xl:px-20 2xl:px-0 w-full">
      <div class="flex flex-col jusitfy-center items-center space-y-10">
        <div class="w-full text-gray-700 md:text-center text-2xl font-semibold">
          Bienvenue sur notre site! Découvrez notre gamme de produits santé.
        </div>
        <AppModal/>
      </div>
    </div>
  </div>
</template>

<script>
import AppModal from '../components/AppModal.vue'
export default {
  components: {
    AppModal
  }
}
</script>
