import {ref} from 'vue'
class PostService{
    
    private posts
    
    constructor(){
        
        this.posts = ref([]) //Inicializo la variable posts como un array vacio
    }

    getPosts(){ //Si quiero leer los post , los leo a travez del getter
    
        return this.posts
    
    }

    async fetchAllPosts(){ // Funcion que hace el consumo del servicio externo , metodo asyncrono , donde espero la recepcion de datos y mientras la espero obtengo una promesa de retorno.
    
        try{ //estructura de control para manejar errores try catch , para gestionar errores no de nuestro sistema si no de la api externa.
            
            const url = 'https://jsonplaceholder.typicode.com/posts'
            
            const response = await fetch(url) //fetch es una funcion que hace una peticion a una url , y devuelve una promesa. - debemos esperar a que la url nos responda , porque si no tendriamos solo la promesa de respuesta.
            
            const data = await response.json() //response.json() es una funcion que transforma la respuesta en un objeto json
            
            this.posts = data //asigno la data a mi variable
        }

        catch(error){
            
            console.error(error)
        }

    }
}

export default PostService