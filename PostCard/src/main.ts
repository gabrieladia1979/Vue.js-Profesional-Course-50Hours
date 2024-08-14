import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.directive('font-size', 
    {beforeMount: (el,binding) => {
        el.style.fontSize = '70px'
    
    }}
)

app.directive('custom-size',{
    beforeMount: (el,binding) =>{
        el.style.fontSize = binding.value + 'px'
    }
})

app.mount('#app')
