<template>
<div class="contact justify-center h-screen p-10 bg-nature">
        <h1 class="text-2xl font-bold mb-4 text-center">Contactez-nous pour nos produits de beauté</h1>
        <p class="mb-10 text-center">Si vous avez des questions sur nos produits de beauté, n'hésitez pas à nous contacter.</p>
        <form class="mx-auto text-center mt-10 shadow-2xl appearance-none border rounded w-1/2 p-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
    <div class="mb-10 text-center">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="name">Nom :</label>
        <input class="shadow appearance-none border rounded w-full w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="name" id="name" name="name">
    </div>
    <div class="mb-10 text-center">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="email">Email :</label>
        <input class="shadow appearance-none border rounded w-full w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" id="email" name="email">
    </div>
    <div class="mb-10 text-center">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="message">Message :</label>
        <textarea class="shadow appearance-none border rounded w-full w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" name="message"></textarea>
    </div>
    <div class="text-center">
        <input class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" value="Envoyer">
    </div>
    </form>
</div>
</template>

<script>
export default {
  name: 'ContactView'
}
</script>

<style scoped>
.bg-nature {
    background-image: url('~@/assets/fleur.jpg');
    background-size: cover;
    background-position: center;
}
</style>
