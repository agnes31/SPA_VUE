const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

//fichier de configuration de vue
module.exports = { 
  devServer: {
    port: 8083
  }
} 
