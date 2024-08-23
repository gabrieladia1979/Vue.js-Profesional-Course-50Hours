const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true, // solo indicar para transpilar dependencias
  css: {
    
    loaderOptions:{ // Moficaciones de carga de css
      
      sass: {
      
        additionalData: `@import "@/scss/_variables.scss";` //La comilla invertida nos permite escribir codigo
      
      }

     }
  }
})
