import { ref, Ref } from 'vue';

class PostService {
    // Definimos el tipo de la propiedad posts como Ref<Array<any>> porque es una referencia a un array
    private posts: Ref<Array<any>>;

    constructor() {
        // Inicializamos la variable posts como un array vacío
        this.posts = ref([]) as Ref<Array<any>>;
    }

    // El método getPosts retorna la referencia al array posts, por lo que el tipo de retorno es Ref<Array<any>>
    getPosts(): Ref<Array<any>> {
        return this.posts;
    }

    // Método asíncrono que obtiene los posts de un servicio externo
    async fetchAllPosts(): Promise<void> {
        try {
            const url = 'https://jsonplaceholder.typicode.com/posts';

            // Realizamos una petición HTTP usando fetch, que devuelve una promesa con la respuesta
            const response: Response = await fetch(url);

            // Transformamos el cuerpo de la respuesta en un objeto JavaScript
            const data: Array<any> = await response.json();

            // Asignamos los datos obtenidos al array posts
            this.posts.value = data;
        } 
        catch (error) {
            console.error(error);
        }
    }
}

export default PostService;
