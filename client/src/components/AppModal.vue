<template>
    <div class="carousel">
      <router-link to="/catalogue" class="absolute right-0 mt-8 mr-5 circle-link inline-block px-4 py-2 text-gray-900 bg-gray-300 rounded-full hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 w-24 h-24 flex items-center justify-center">
        <svg class="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="9" cy="21" r="1"></circle>
          <circle cx="20" cy="21" r="1"></circle>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
        </svg>
      </router-link>
      <transition name="fade">
        <img class="rounded-lg" :src="images[activeIndex].src" :alt="images[activeIndex].alt" />
      </transition>
    <button @click="prevImage" class="mt-4 bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
    </svg>
</button>
    <button @click="nextImage" class="absolute right-0 mt-4 mr-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
    </svg>
</button>
    </div>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: 0,
      images: [
        { src: require('@/assets/imgB.jpg'), alt: 'Image B' },
        { src: require('@/assets/imgA.jpg'), alt: 'Image A' },
        { src: require('@/assets/imgC.jpg'), alt: 'Image C' },
        { src: require('@/assets/imgD.jpg'), alt: 'Image D' },
        { src: require('@/assets/imgE.jpg'), alt: 'Image E' }
      ]
    }
  },
  methods: {
    nextImage () {
      this.activeIndex = (this.activeIndex + 1) % this.images.length
    }
  },
  mounted () {
    setInterval(this.nextImage, 2000) // Change l'image toutes les 2 secondes
  },
  prevImage () {
    if (this.activeIndex > 0) {
      this.activeIndex--
    } else {
      this.activeIndex = this.images.length - 1
    }
  }
}
</script>

<style scoped>
  .carousel {
    position: relative;
    width: 100%;
    height: 50%;
    overflow: hidden;
  }

  .fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
  .fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
