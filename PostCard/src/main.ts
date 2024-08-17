import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.directive('font-size', 
    {beforeMount: (el,binding) => {
        el.style.fontSize = '70px'
    
    }}
)

//app.directive('custom-size',{    --caso 1 solo binding
//    beforeMount: (el,binding) =>{
//        el.style.fontSize = binding.value + 'px'
//    }
//})


// caso 2 con argumento
app.directive('custom-size',{

    beforeMount: (el,binding) => {
    
        let size = 18
    
        switch(binding.arg){
            
            case 'sm':
                size = 10
                break
            
            case 'md':
                size = 18
                break   
            
            case 'lg':
                size = 24
                break
           
            case 'xl':
                size = 36
                break
                
            case 'xxl':
                size = 48
            
            
        }
    el.style.fontSize = size + 'px'
    }
})

app.directive('custom-font',{   
    beforeMount: (el, binding) =>{
        let size = 18
        
    }
})
app.mount('#app')
