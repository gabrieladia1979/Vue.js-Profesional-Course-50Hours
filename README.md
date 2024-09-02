# Proyecto Introduccion a Vue.JS 

Curso Introductorio a Vue.js de GOGODEV de mas de 50 Horas.
Dejo contancia de anotaciones para interesados en lo teorico y lo aprendido.

## Clase 2: 

### Option Api 

- Reactividad Implicita : La reactividad de los datos es automatica , no es necesario usar referencia ;  pero la estructura es distinta y mas declarativa que el "Composite API", hay que declarar los metodos que usemos en apartados distintos (Estructura declarativa) , los datos en otro y demas. De esta manera es mas clara la logica pero es mas trabajo la delcaracion si el proyecto es extenso.

### Composite API

- Estructura Reactiva y Declarativa: La estrucutra es declarativo  y reactiva, necesarios importar el ref de "vue" para que los datos sean reactivos. La estructura solo cuenta con el setup en donde metes todo y los metodos y las declaracion de constantes esta mas inclianda hacia la reactivadad ya que la tenes que hacer a mano. Ademas hay que declarar el retorno de los datos al declarar una constante. Es mas flexible esta manera de usar el script y te da mas control de los datos que queremos hacer reactivos y cuales no.

### ShortCut Composite API: 

- " Simplicidad y Automatización " -> Para Composite API tenemos la opcion de directamente delcarar el "script" con un setup automatizado donde el retorno y la exportacion del componenete lo hace Vue.
  

![image](https://github.com/user-attachments/assets/28cd3ec2-1434-4fe5-86d7-d5c91b792ac3)


## Clase 3: Directivas Selectivas

### Renderizado entre V-IF vs V-SHOW:

Las directivas son modificadores de etiquetas en el template que te permiten añadir comportamiento dinámico a los elementos del DOM. 
V-if es una directiva que agrega o elimina elementos del DOM según una expresión booleana.

### Directivas:

### V-IF: 

- Si Sabemos que los datos de los componentes van a estar cambiando constantemente , el renderizado del Dom virtual al Dom no se muestra la opción que no sea pintada por el "script".

![image](https://github.com/user-attachments/assets/2aec4bcb-202c-46ae-8c70-8d894bb51185)


### V-SHOW: 

- Para el renderizado del v-show , aparece en el Dom pero utiliza una etiqueta para ocultarlo en el template pero esta en el Dom,  aparece con un "display none"

![image](https://github.com/user-attachments/assets/1d46a4e2-ba91-498b-b465-c072da2e4105)

### V-FOR:

- La estrucutura de la directiva del "v-for" , toma la variable del script y la recorre (claramente debe ser un array para poder recorrerla).

![image](https://github.com/user-attachments/assets/7f749629-e8da-49a2-822d-6940336f441a)

- Solo con Javascript y con la referencencia a si misma, se veria asi. 

- Una version mejorada seria crear una interfaz, a travez de objetos. Ya que estamos trabajando con consumo de APIS.

![image](https://github.com/user-attachments/assets/afb65c9c-ac9f-41b2-b99c-067d9577ccfb)

### V-BIND: Unidireccional
 
- Nos sirve para bindear datos de una etiqueta del templeta con las del script(nuestro sistema de datos). Todo lo que vamos a estar viendo es a nivel unidireccional

### Caso 1 : Bindeo de clases 

![image](https://github.com/user-attachments/assets/5a82a303-69c8-4cbf-a187-8b9333a59671)

En la etiqueta "p" usamos el v-bind para que colorie con la clase .danger del styles si es que la variable "hasError" es True.

Caso contrario no resaltaria en rojo y el bindeo no se activaria.

![image](https://github.com/user-attachments/assets/79705e39-6a8a-4da8-9ce8-2ac2a71a9a4d)

Caso Positivo.


### Bindeo de Estilos por Eventos: 

![image](https://github.com/user-attachments/assets/b147d69d-9415-4378-bd5a-dc46d7fd8618)



## Clase 4:


Bindeo Bidireccional:
Que es ? 

Entre la inforamcaion del "Script" y la vista del "Template"

![image](https://github.com/user-attachments/assets/4e4824ba-eb78-4131-97c7-db40a129e2c4)


Si nosotros queremos gestionar la informacion que queremos estar maniupulando en un input , queremos que se vea reflfejado en los datos dentro del componenetes.


Para unidireccional , nuestros datos eran los que gobernanban en la platilla , en el "template". Ahora a su vez la informacion que esta recibe("la plantilla - template") , actualiza tambien el script

Para esot tenemos V-MODEL


V-MODEL

Tendremos un dato de nuestro script vinculado al input de texto , para tener actualizado con el input del template los datos del script.

![image](https://github.com/user-attachments/assets/22be82e0-d1ba-4206-a631-4ed98f2752ca)

De esta manera, con la directiva v-model , referencia al inputText , entonces el valor del input del template estara directamente relacionado con nuestros datos (inputText).

![image](https://github.com/user-attachments/assets/f31f8c11-401a-4cc0-b3b7-339abb53d6f0)

Mostramos como lo que escribimos en el for , directamente se ve reflejado en el input text , mostrandolo por el template a travez de una etiqueta "h1" o un "p".


![image](https://github.com/user-attachments/assets/b0d02ea2-d3ef-4b9c-99a6-9dfdbf40061a)

Aqui mostramos el uso de V-MODEL con el nuevo formato de tipo v-model con el uso de "CheckBox". A travez de las Vuetools como extension de Google podemos ver como cambia de estado cada dato del script.

Pryoecto Porfesores:

Uso del const HandleSubject -> A travez de esta funcion , vamos a poder agregar materias al apretar el botton del template con nombre "Añadir Materias"

![image](https://github.com/user-attachments/assets/bd1faaf5-930a-468f-be7b-21545fbdb0d3)

Aqui añadimos un array con la informacion de profesores con datos no reactivos , ya que mandando el array completo con el .value , cuando querramos limpiar lo que hay en las casillas ya usados de datos , tambien se limpiara lo guardado.

![image](https://github.com/user-attachments/assets/c63a2d7d-d9a3-4570-92b0-8ed4b9782222)

Uso de botton de tipo eliminar y modficar:   

Estos apareces una vez que se haya ingresado informacion al array de materias , si no el v-for no se inicia , estas no apareces. La aparecion de estos botones se renederiza en el momento indicado de esta manera.

![image](https://github.com/user-attachments/assets/bf470684-4a57-4fb6-83d7-38166dfe0f8b)

Estas despeus del {subj} , como todavia no hay un subj dentro del array de materias , no tendria que renderizarse. De esta manera controlamos el renderizado

Y para los modificar , que nos devuelve la informacion que agregamos al teachers al teacher label ,donde hicemos el imput. 

![image](https://github.com/user-attachments/assets/9deedb19-3658-4984-b821-12e8277af838)

## Clase 5:

Ciclo de vida de Componentes:

A travez de montar nuevos componenetes , van a tener un recorrido a travez de ciertos eventos , y que estos se montan. Van a manternerse en escucha una vez creado, actualizandose (a ala reactividad ) hasta que el componenete sea retirado , es decir , sacado del DOM (que el cleinte salga de alguna seccion a otra) y retirado del navegador para hacer otras acciones.

De esta manera anclaremos ciertas acciones para un cierto momento de vida del componente , solo ahi se ejecutaran (modificaciones / borrado / creacion)

O tambien a antes de retirar el componenete - todo a travez de eventos.

![image](https://github.com/user-attachments/assets/a37be1cd-b2c3-4a59-9b1a-d2d6e0ea9190)

Una vez creado el componente, se inicializa el ciclo de vida y los eventos.

El primer evento seria nuestro "beforeCreate" - primer elemenento. No generado inyecciones , no reactividad.

Despues se hacen y ahi recien se dice que el componente esta creado.

Este es un momento preciso para solicitar informacion , porque los elementos no hay sido cargados

Despues hay ciertas verificaciones para montar el componente y pintalarlo en el navegador. (hay tambien comprobaciones en el montado)

Cambios en el componente , beforeUpdate . Si no , ya en el update ya se veria estos cambios.

Lo mismo cuando se destruye el componenete (before - actual) -- todo lo que pasa antes y despues podemos hacer cosas

-

Comounicacion entre Componentes:

-

Con la creación de componentes es una comunicación de forma independiente en la cual todavía los componentes no se comunican entre sí. Todavia no aplicamos una comunicacion seria a pesar de llamarlos dentro de otro.

Podríamos tener llamadas de un componente dentro de otro componente pero si bien su estructura y su lógica eran independientes e individuales entre sí, ind en su comportamiento. ahora aplicaremos una comunicación VERTICAL, de tal manera que podamos mostrar la reactividad del pafre a sus hijos de arriba hacia abajo.


![image](https://github.com/user-attachments/assets/dffb3ca8-5f09-4c75-9a9b-99d568c0e487)


Esta es la información vertical descendente en la cual los Padres pueden pasar información a los hijos y de la misma manera los hijos pueden pasar información a sus hijos y dhica informacion en reactiva de tal manera que si modificamos informacion en el padre , va a bajar la mpdificacion como una cadena descendente.

![image](https://github.com/user-attachments/assets/67214914-b87d-4ef8-92ce-ee68a200dd2a)

Ejemplo con epxlicacion de CSS:

Para esta imagen, aplicamos CSS para el PostDetail: 

![image](https://github.com/user-attachments/assets/a53ae87a-2576-47bd-8637-78cf2c3dc00c)

El padidng nos muestra el ancho sobre el donde  marcara el color (como una caja).
El margin nos muestra la distancia con el titulo , mientras mas , mas lejos.


Uso de PROPS para aplicar la comunicacion Vertical

![image](https://github.com/user-attachments/assets/c158da67-7b21-40fe-8d78-a34484469290)

Queremos que el let y el recorrido que tiene un titulo y un parrafo de texto en el PostList , se ve reflejado en el " hijo " -> el PostDetail , que tambien tiene un titulo y un parrafo , queremos moficarlo con lo del padre.

Estas se etiquetan el la etiqueta html.

![image](https://github.com/user-attachments/assets/5777ff00-aa0c-40b2-bef4-8ae8de0733c2)


Pasamos en cada recorrido del before , le paso la informacion de manera vertical; asi con toda la informacion qur querramos pasar.

Queda ver como el hijo la recoje.

Esta que recibe es de tipo "LECTURA" -> No va a modificar la inforamacion que elige , solo se encarga de leerla.

Para las props en los hijos , defino las props que "espero recibir" , indicando el tipo de informacion.

Asi teniendo disponible las props , tratando de validad que el contenido sea valido (mejor para corroborrar).

![image](https://github.com/user-attachments/assets/bb4b2c8d-c16b-4e4d-a8a8-6cd56e7db478)

Indico si es obligatoria recibir cierta PROPS , para avisar si es o no obligatorio rebir X informacion

![image](https://github.com/user-attachments/assets/8401cde6-9d3f-4599-9532-e88bc7da2264)

: en title y content las uso con : , porque estan bindeada con la infoamacion que tengo

![image](https://github.com/user-attachments/assets/3438d755-73d1-4d2f-8e24-869fd561f1e2)

Aca vemos ya como los compoenentes hijos reciben esa informacion.

FINAL PROPS

-

Arquitectura Vertical Ascendente

-

![image](https://github.com/user-attachments/assets/c98de8c5-9a5c-4f6a-a242-4d9779ff318d)

La idea con esta Emits , es que los hijos puedan modificar la inforamacion de abajo hacia sus padres (arriba).

Lo hacemos emitiendo eventos , con los cuales el hijo emite un evento para que le llegue al padre. De esta manera este lo escucha y ejecuta el componente padres y recibe al informacion.

A travez del alert , le avisamos al padre que modifque el titulo o contenido. Esa es la manera de comunicarnos.


Resumen de sucesos: 

Botton con Habdle click que emite un evento de alerta que le llegua al padre , y de esta manera , lo modifica este en el template.

![image](https://github.com/user-attachments/assets/1186249c-7107-4c74-9f0a-40ab926bf35e)  ![image](https://github.com/user-attachments/assets/625a0ff6-02d4-4b5f-a550-bfaf4b927cb5)

![image](https://github.com/user-attachments/assets/2de755fb-aaeb-4464-8ad4-4ad0b6e437d5)


La alarta como funcion se crea en el padre para poder llamarla y crar el evento ;  pero la que nos muestra el evento y a la inforamacion a travez de los enit , es le hijo.

Fin de Clase 5.

...

## Clase 6:


Nuevo tipo de dato 
Datos Computados:

![image](https://github.com/user-attachments/assets/1f676cd9-8230-493e-8b5c-eec220b2f979)


Elementos de reactividad de primer orden, elementos vinculados a lareactividad de nuestro componente.

Vamos a tener otros valores que tienen dependencias a otros componentes. 

Ejemplo : Cadena de texto como valor de referencia reactiva,  cambiante. (Caso de primer orden)

Ejemplo 2 : Reverse de un input (Hola al revés como cadena) , también lo queremos referenciado a ese input para que sea 
reactivo , pero su contenido depende de la cadena del input que ingresa el usuario. ( dato computado )

De esta manera , estaríamos hablando de un elemento reactivo,  relacionado y dependiente del valor del input , decimos
que es un dato computado.

Indicamos a Vue , que este dato computado , quiero que sea reactivo pero que no lo escuches a el , si no a los valores de 
los que este depende y cuando ellas cambien , de paso también cambie el valor de computed. 

-Practica-
Vamos a hacer una práctica sobre este.


Para estos casos , vamos a necesitar un valor inicial y apartar del cual vamos a generar la dependencia a nuestro valor computado.

Primer caso . Cadena invertida. 


![image](https://github.com/user-attachments/assets/de226300-b2ec-4ad2-89b2-c161767b449a)


Acá podríamos ver como nuestro valor computado , cada vez que calcula el valor de la dependencia , también hace el cálculo del valor computado.


![image](https://github.com/user-attachments/assets/965e2dfe-487d-49d6-8aab-30762bde9091)


De tal manera que Vue "NO" esta ejecutando una reactividad sobre su valor computado, si no que escuha sus dependencias y cuando son modificadas el valor computado desde ahi/ellas.

![image](https://github.com/user-attachments/assets/4d8dd05f-beed-4a93-b5e0-566d3108e0ea)


Aqui podemos calcular como seria el precio de impuestos que deberiamos pagar de mas.

-Final Clase 6-

## Clase 7: 

Directivas Personalizadas: (Modificar como actua dentro de viertual Dom las etiquetas ya prestablecidas)

Ahora haremos nuestras directivas propias , con un ejercicio de servicios (API).

-Pueden cambiar el aspecto , a tambien acciones mas complejas , v-for , o v-lising. Nuestro tope es la imaginacion.

![image](https://github.com/user-attachments/assets/13800e10-cd51-4c7e-b21b-5c7ce1115ea5)

Donde la codificamos : 

En el propio componente , cuando tan solo va a estar definida para el propio componente (Que no es el mejor caso)

La idea es que todos los componenetes puedan utilizarla , por eso hacerlo general para usarla en los majores casos posibles.

La estructuracion va a estar centrada en el main.ts -> Ya que en futuras clases , cuando veamos estructuracion , vamos a hacer el montado a travez del main. (Donde hacemos el montado de nuestra aplicacion)

Paso 1) 

Creo una constante App en la cual creamos la aplicaicon y a esa app le asignamos el montado.
Lo mismo que antes pero ahora podemos antes de montarla , crearle los diferentes elementos. Ahi entran la directivas propias

![image](https://github.com/user-attachments/assets/096f2b5b-916e-48c1-a7b7-6f80a2c325d1)

Estructura de Directiva:


app.directive

1ro nombre de directiva , 2do objeto con comportamientos de la directiva sobre el virual Dom. 

![image](https://github.com/user-attachments/assets/78f04bef-2394-41bd-a7c3-2599aba6f1a1)

Nos paramos en los argunmentos que recibe. 

El famoso nombre de  " v- " , lo asigna VUE directamente a todas nuestras directivas.

Arrancamos con directiva de cambio de fuente , vamos a modificar el tamaño concreto sobre hacia uno en concreto.

Paso 2 - pasar el objeto clave -valor 

a- Donde el primero es el arguemnto de ciclo de vida donde la directiva actual en su aplicacion.
b-  Funcion de actuacion cuando a actue.

Asi como unmountes , mounted  (hooks / eventos).

![image](https://github.com/user-attachments/assets/50c5c63d-ee22-4377-be0a-86c5c56c5725)

Se puede añadir mas de un evento en cada directiva , pero con uno solo en este caso ya basta.

Siempre recibimos el "el" y el "binding"

el : Elemento donde se esta montando el componente , la etiqueta final html que estamos utilizando en app para montarla.

![image](https://github.com/user-attachments/assets/d1d9ec1d-68e5-4aa4-8f03-8f0f187bc71d)

El "el" si lo aplicamos al label , sera esa. Gracias a que la montamos en la app , el "el" va a ser el acceder a nuestras herramientas del DOM.

Binding - Datos recibidos para ejectar acciones o opciones.

La directiva va a poder recibir valores para nuestra directiva , estas llegan aqui , al binding. Toda la configuracion necesario.

![image](https://github.com/user-attachments/assets/e02c078c-c832-4342-a9a3-f0fd51fca78b)

Despues del el , es TypeScript o JavaScript normal.

![image](https://github.com/user-attachments/assets/0c3fbf9b-6e9b-4cae-a07d-8c34ebca536f)

Ya podemos aplicar nuestra directiva declarada en el main.ts y ya van a aparecer las modificaciones sobre el virtual DOM que antes de que se monte , va a cambiar la fuente.

![image](https://github.com/user-attachments/assets/4610ffaf-114d-460a-a4ba-8ee335681166)

Al label se le aplica el font size. Funciona de manera correcta.

--Fin de primer Ejemplo--

--Incio de Binding Variables - Bindeo Value--

![image](https://github.com/user-attachments/assets/56b930c7-165c-4c6e-a493-2389cd4ee47b)

Aca podemos ver como ademas podemos modificar el size segun el bindeo. Ya no es un valor cualquier , el componente nos va a indicar el tamaño dentro del binding.

Como accedemos ?  Por el binding.

![image](https://github.com/user-attachments/assets/56c97f92-9635-4165-971c-53bfaae9c1f7)

Funcionaria igual que el "V-MODEL" , donde a aquel se le da un value ; aqui tambien haremos lo mismo para poder modificar el size que le llega al main a travez de binding.

![image](https://github.com/user-attachments/assets/53989ab9-533b-45b2-9dd6-9a3af9d66fe6)

![image](https://github.com/user-attachments/assets/3a57f049-5972-4990-8d78-1864f13756c4)

Y aca tenemos como ejemplo como funcionaria la directiva pero con actuaciones distintas en funcion a los valores que se le pasan por el bindeo . value

Ahora le podemos aplicar a nuestras directivas valores ya le le llega al binding.


### Directivas Personalizadas con Arguementos:

- Podemos solicitar ademas de los elementos que le pasamos directos a la directiva , podemos solocitar "argumentos"

Ciertos argumentos seran recibidos como parametro, y estos los definimos dentro nuestra directiva con cierto parametro que estaria mostrando o reprensentando.

![image](https://github.com/user-attachments/assets/a5bf32de-e1cc-420a-8b47-660ce1f749f2)

- Asi como v-bind ,  vamos a poder a travez de los " : " , solo acepta argumentos del tipo STYLE - KEY - CLASS , y despues recibe un value.

![image](https://github.com/user-attachments/assets/4575fd3f-7791-469c-b0f6-7adf4bf4e35d)

### Explicacion de LOGICA:

Para este caso , vamos a usar un SWITCH: 
En funcion al ARG , aplico una fuente o otra.

![image](https://github.com/user-attachments/assets/088f2f18-17dc-4e32-a84a-d560f0f492e4)

- Tambien es posible que no reciba un argumento , pero presentamos los distintos casos para cada argumento posible.

El tamaño default es 18 para caundo no haya ningun valor.
Ahora le pasamos distintos argumentos a la directiva y vemos como cambian dichas.

![image](https://github.com/user-attachments/assets/dda3b4c2-814c-4e32-bc10-263d1c49f4cc)

![image](https://github.com/user-attachments/assets/204b4cf0-163f-40cd-824f-f88a532cc093)

### Directivas Personalizadas con Modificadores:

- Asi como vimos los Argumentos , ahora tenemos los modificadores:

Vamos a poder tener tantos modficadores querramos , no tenemos que escojer entre ninguno de otro , escojes 1 o ninguno.
Ademas con el bindeo podemos recibir modifcadores de tamaño ,  como aplicar modifcaciones sobre el color y el aspecto.
Para ver que podes aplicar 1 o varios o ninguno.

![image](https://github.com/user-attachments/assets/f97ab31c-8842-435d-829c-e1911e145c8b)

Mostramos tanto como segun el argumento del size , que cargamos antes : sm , mg , xl 

![image](https://github.com/user-attachments/assets/793b3c7f-4774-42d9-9099-8dcf5c889e81)

- Ademas un punto clave para los modifcadores es que uno puede aplicar 1 o ninguno o todos.
- El orden tampoco importa , es mucho mas flexible que los argumentos desde ese lago

## Ejercicio de Servicios

- Usamos la pagina jsonplaceholder , para acceder a una API de contenido con respuestas JSON asi hacemos el consumo de datos y utilizarla para probar nuestras aplicaciones.
- En la seccion de post , esta nuestro ejercicio
- Tomaremos una solicitud de point a este endponit de la API y obtendremos el listado de POST. Depues los pintaremos en un listado (idea es para poder a futuro entrar a enrutado.)


### Utilizamos una constante con la funcion de un FETCH 

![image](https://github.com/user-attachments/assets/638aeda5-d171-4db7-868a-c9709ac086da)

- La idea es que a travez del array de Post que armamos con **TypeScript** , podamos guardar todos los datos del **JSON** al Array Post.
- De esta manera , con el "axios.get" traemos todos los datos del JSON y los asignamos completos despues de haber montado el componente.

- Tambien hay un caso **ERROR** por si no funcionace.

# Clase 8

- Explicacion de ejercicio de ejercicio por el profe

- **Enfoque** en estructuracion de datos y codigo , como organizamos la estructura para que sea facil de seguir.

- A partir de ahora , vamos a empezar a estructurar nuestros componentes de manera distinta , de la manera correcta.

Nos apoyaremos en las estructuras de:

## Servicios y Estructuras Separadas para consumo de datos

- **Defincion** : Cuando hacemos un consumo de dato , es decir un consumo de un tercero / desarrollo externo (un backend de un tercero API)
- **No hacer el consumo directamente en el componenete !!!** Por que si hay cambios en los endpoint en el sistema que estamos consumiendo , vamos a tener que buzear en donde esta el consumo y como lo estamos consumiendo. Va a ser denso y nada va tener sentido
- Es mejor usar una **Carpeta de Servicios**

## **Carpeta de Servicios**

### Vamos a crear dicha capeta de servicio , con una clase que se encargue de todas las conexiones.

- Buscar Datos
- Linedear consumos de datos
- Mandar Datos , etc

![image](https://github.com/user-attachments/assets/6d54fbd3-d993-4256-8a1e-bbbe7e6072e5)

No vendria a ser un componenete , por eso lo indicamos con **TS**.

Nuestro servicio sera una clase que se va a preocupar de servir e ir a buscar los datos , para que cualquier componente que quiera usarlo , el servicio se encarga de hacer las **peticiones oportunas**.

## Usamos una estructura del tipo orientada a objetos
![image](https://github.com/user-attachments/assets/5c07207c-4102-472e-bca7-ae8212886160)

- Con nuestra variable privada posts solo declarada dentro de la clase.
- Un **Constructor** -- Inicializo la variable posts como un array vacio , que declaramos arriba.
- Si quiero leer los post , los leo a travez del getter

### Funcion  Async

- Funcion **ASYNC** que hace el consumo del servicio externo , metodo asyncrono , donde espero la recepcion de datos y mientras la espero obtengo una promesa de retorno.
  
### Estructura de try catch 

- Control para manejar errores , para gestionar errores no de nuestro sistema , si no de la api externa.

- Dentro de este try vamos a querer **recuperar** la informacion que estamos solicitando (POST) y guardando en la variable post (en realidad lo que estmaos buscando de la api extena )

## Importante

**POST REACTIVO** -> Porque queremos que nuestro servicio actualice la informacion de los post que tiene ,  esta info se muestre en nuestro contenido y en nuestros componentes quede actualizada

![image](https://github.com/user-attachments/assets/51ebdf7e-1bfa-47dd-9608-246f2cd144b2)

- La funcion que hace el consumo del servicio externo , **metodo asyncrono** , donde espero la recepcion de datos y mientras la espero obtengo una promesa de retorno.

## Promesa de retorno

![image](https://github.com/user-attachments/assets/f7321f69-f0af-4adb-b8a2-5ba0159cca2c)

![image](https://github.com/user-attachments/assets/fd9c2970-f449-43c1-89fd-13ed2ef6fb5a)
 
- Fetch es una funcion que hace una peticion a una url , y devuelve una promesa. Debemos esperar a que la url nos responda , porque si no tendriamos solo la promesa de respuesta.

## Paso 1: Recibir la Respuesta HTTP response: 

Después de que la promesa de fetch se resuelve, response contiene la respuesta HTTP completa. Esto incluye tanto los datos que recibes del servidor (el cuerpo de la respuesta) como la metadata, como el estado HTTP (por ejemplo, 200 para "OK", 404 para "No encontrado", etc.).

## Paso 2: Transformar la Respuesta en JSON javascript

const data = await response.json()

### response.json(): 

Este es un método que convierte el cuerpo de la respuesta (que está en formato JSON, una cadena de texto) en un objeto JavaScript. JSON (JavaScript Object Notation) es un formato de intercambio de datos común que representa datos estructurados como objetos de JavaScript.

**await response.json()** 

Aquí, await está esperando a que la conversión del cuerpo de la respuesta en un objeto JSON se complete. Aunque esta operación es relativamente rápida, sigue siendo asíncrona porque puede implicar la lectura y el procesamiento de un flujo de datos, especialmente si la respuesta es grande.

data: Después de que await response.json() se resuelve, data contiene el objeto JavaScript resultante que representa los datos que el servidor envió en la respuesta.

## Listos para Avanzar

- Despues de tener la carpeta de servicios , ya podes crear nuestro componente para la lectura de nuestro servicio de POST , donde usaremos nuestro servicio de post, es decir ...

### El montaje de nuestro servicio

Primero en el setup queremos el consumo de nuestro servicio , como ?

- Con el ciclo de vida de nuestro componente:

- Vamos a interesarnos en la parte donde el componente **solicite** la informacion al servicio.

## Paso 1

- Nuestro componente tiene que solicitar al servicio que pida los datos. 

-  En que momento se dispara ? **Cuando se monta** -> A travez del FETCH ALL


![image](https://github.com/user-attachments/assets/11f7d18c-7eeb-4f53-9d2a-8e40267431b2)

- Accion Componente: Aca lo que hacemos es incializamos el service  , activamos el constructor del **service** 
- Accion servico : En este , se nos genere el post con una referencia vacia para el componente donde podemos obtener los post del servicio con el get
- El post nos devolvera con el .this lo que tenga el array de post dentro de este.

![image](https://github.com/user-attachments/assets/39477d3c-fe0d-40c0-a67f-43fdcd8f21f1)


![image](https://github.com/user-attachments/assets/ffc68786-59dc-436f-880d-6e515072e79d)

- Ahi es donde llama con el get a los post del service.
- Y ademas vemos como aplicamos el funcionamiento del **asincronico del fetch**.

![image](https://github.com/user-attachments/assets/69eb3625-d2ce-4752-a29b-a351be470e18)

## Importancia del onMounted en este contexto
- El uso de onMounted es crucial aquí porque te asegura que la operación de obtener datos (que puede tomar un tiempo indeterminado) no se inicia hasta que el componente está completamente listo para recibirlos y mostrarlos. También evita posibles errores o condiciones de carrera donde el componente intente acceder o manipular el DOM antes de que esté completamente disponible.

- Esto asegura una mayor consistencia y fiabilidad en la interacción con APIs externas y en la representación de los datos obtenidos.

### Gracias a que esperamos al fetch del service , cuando nuestro componente arriba haga el getPost , ya deberian estar cargados todos los post dentro porque con el onMonted marca la creacion del serivice con await hasta que los fetchie.

![image](https://github.com/user-attachments/assets/7b216dc9-cb78-440d-8a52-4d7ab32b114c)

- Declaramos en otra carpeta nuestra interfaz para TypeScript y ponemos ? para indicar no saber si se mantiene a lo largo de los elementos. 
- Forma de protejerse ante opcionalidad del valor
- Exportamos por defecto

![image](https://github.com/user-attachments/assets/a9035488-be09-4989-8467-29648ec1234e)

Tipamos el .ts y vemos que arreglamos los any.

## Estilado del PostList

![image](https://github.com/user-attachments/assets/079807ca-bedb-4d2a-8101-30a82c902a1e)

## Conclusiones

- Ejecutar buenas practicas en el codigo para despues en un futuro no tener problemas en la estrucura interna e externa (API). 
- Cada vez que tengamos logica mas complejas , va a ser mas complicado mantener todo dentro de un componente.

## Estrategias:

- Derivar servicio a una estrucutra de servicio con una clase donde cada vez que necesitemos consumir dicho servicio , tendremos rapidametne visible y facil de usar esta.
- El tipado tambien en otras interfaces para definir interfaces.

# Clase 9

## Estilado

- Las primeras 8 clases , vimos nuestro "style" desde dentro de nuestro componente de manera *scoped* y dentro del Vue.app
### Esto puede traernos problemas en el futuro por diversas cuestiones:

1) Cuando el componenete sea mas grande , y queramos dar mas detalle , el style se disparara y 100 lineas de codigo solo por esta,
2) App.vue , puede provocar mas lineas de codigo en algo que es innecesario el style

## Objetivos para una buena estrucutracion de codigo

1) **Particionar el codigo y dividirlo** , para disponer de forma global y usar los estilos. Crear variables para los colores para modificar un color y para cambiar en todo nuestro proyecto. Dividir en carpetas (fuentes , colores , etc)
2) Propia estrucutra de contenidos - estilo cascada , entonces codigo muy extenso - por eso uso **preprosesado de css** (contenido mas pequeño y mas facil de leer)

## Mejoras:

- Particionar codigo y facil de leer. 
- Reutilizacion de codigo a otros clientes.
- Parametrizacion de codigo
- Nuevas funcionalidad y mejoras a estilos

## Comnezamos con un nuevo proyecto al pre-posesador

![image](https://github.com/user-attachments/assets/a8b000cf-fd49-477e-a1d2-9b3ab6fa1ec0)

Estos son los 3 tipos de pre-procesadores , Sas es el mas extendido de ellos. 

### Muesta de funcionamiento del preprocesador: 

![image](https://github.com/user-attachments/assets/a56b6078-0a00-42b1-a7ba-cb2b0a34f872)

## Instalacion de pre-procesador en un proyecto antiguo: 

![image](https://github.com/user-attachments/assets/7b6b6108-cd85-4b58-aa88-c790391f6dee)


### Uso del mismo: 

![image](https://github.com/user-attachments/assets/2d4fecbd-b021-4bb5-bf06-918ec7d37648)

Creamos una variable con el nombre del color y la usamos en el **li**.

![image](https://github.com/user-attachments/assets/c41b4262-cf66-4da3-839d-569330765351)

- Vamos a realizar ahora una estructuracion a nivel **Global** , crearemos archivos CSS para tener a nivel general , una carpeta con nombre CSS
- Podes estructurar aun mas en la carpeta SCSS , e ir a nivel fuete , tamaño , color , tipografia etc (nivel super especifico - mas estructurado y dividido )

### Donde se exportan las implementacion de estilado ? En el config

![image](https://github.com/user-attachments/assets/e09990c8-e253-4183-9801-984a4d225fab)

Aqui le pasamos el tipo de carga : especificamos que para css usamos scss y que este en x carpeta con el addition data.

![image](https://github.com/user-attachments/assets/351bce62-053e-4f72-bef9-65af071372c0)

- Ahora tenemos a disposicion de nuestro poryecto todas nuestras variables globales.

## Puntos Intersesantes de Pre-procesadores

1) Declaracion de varaibles
2) Anidamiento - Podes escribir dentro de un selector otro selector (usar postlist y dentro li)

![image](https://github.com/user-attachments/assets/7cb7c63f-f385-49aa-94ac-37ec7c424dae)

Y nos evitamos el uso del .postlist li

3) Distribucion de codigo a travez de importaciones

![image](https://github.com/user-attachments/assets/297a898a-1f4f-4cb1-9f32-b0d330c503d0)

Nos permite distribuir el codigo scss ante el contenido escalable.

4) Intrucciones de control (IF - BUCLES)

![image](https://github.com/user-attachments/assets/6608c6b0-ba08-4aa5-8729-5628fe839649)

Acciones del preprocesador

- El codigo SCSS se trasnpila y se convierte en CSS natural. 

### Uso de FrameWork: Boostrap

- npm install --save bootstrap
- npm install --save @popperjs/core
- De esta manera solo nos queda importarlo en el main.ts

# Clase 10:

## Enrutado

Modo history para prosproduccion

- En el main.ts que es el punto de entrada que crea nuestra instancia de vue , nos muestra un cambio.
- Aqui vemos que el "router" se importa y se le indica que se va a utilizar en el div , esto le da potestad al router  para poder controlar las rutas que vamos a estar construyendo en nuestra aplicacion.

## Carpeta Router

-  El routerRaw nos va a permitir generar diferentes rutas. ** Es un array de Objetos **
-  Este va a contener el path - URL - , y el componenete que se va a estar ejecutando cunado entremos a esa ruta.

![image](https://github.com/user-attachments/assets/0d986699-0088-42c9-bdee-7e04272759ee)


-Despues aqui se ejecuta lo mismo , pero con ciertas diferencia , otro ejemplo de construccion de ruta para generar code splitting para despues hacer lazy loading de las diferenctes rutasy hacer cargas mas rapidas de cargas , para apoyarse en el web pack para ponerle nombre a cada una de las rutas de darle a mas agilidad a este proceso.

![image](https://github.com/user-attachments/assets/ea384d74-2cb9-4cc7-a365-bdb98dffad0e)

- Aca el component es el AboutView - (Igual que el HomeView)

### Resumen 

- Tenemos estos dos formatos y ademas la creacion del router

![image](https://github.com/user-attachments/assets/aa659bc1-0b38-483c-8de6-f397df9aa92b)

- Reaccionamos a la constante router , la cual la creamos a travez del history de vue , que alli tenemos el control historico de rutas
- Y le asinamos la constante de routes (las distintas rutas) con componentes que las gobiernan.

# Diferentencias de Views con Components

- Las Views son los padres de una lista de una ruta completa - Llamados por el router  , vistas de router - 
- Components : Elementos parciales , composiciones parciales para el diseño


## Cambios en la Estructuracion del App.Vue 

![image](https://github.com/user-attachments/assets/cdd0fb32-8f34-4890-93e2-0a9bdece6d4b)

- Utilizacion router link para poder acceder a la carpeta de router donde esta cada vista.

- Donde montamos la app , como cambio al estructura **Uso de menu de navegacion** - router link - que nos permite navegar entre las diferentes rutas
- Y el router view pinta la que este activa, pinta la vista en la que pulsemos y nos mostrara dicha vista. (lo va a aver en el router index) - 

![image](https://github.com/user-attachments/assets/df0c960f-05d9-4cce-b51c-12e3335410e8)

  
## Caracteristicas de usar Router: 

![image](https://github.com/user-attachments/assets/dc4f1619-e0a0-4bba-8a89-6ae0ab968919)

### Ahora ya sabemos crear aplicaiones que no son SPA , Si no app con diferentes rutas de contenidos.

## Generar nuevas rutas (Prueba)

![image](https://github.com/user-attachments/assets/b5e3a992-a5d6-4d75-980f-6721373c1078)

- Genenramos nuevas **Vistas** y las enlazamos al App.vue
- Pero hay un problema ...  poner tanto codigo en el app.vue es una mala practica, asi que creamos un componente para el nav-var !!
- Asi atomizamos mas el contenido.

## Creamos un Componenete MainMenu

![image](https://github.com/user-attachments/assets/ab38c59e-5b7b-434e-b755-ae5af19517a0)

- Creamos un componente con el mismo nav-bar que el App.vue y los estilos propios de este.
- De esta manera , podemos tener una estructura mas atomica y limpia.

#Estilos:

![image](https://github.com/user-attachments/assets/f6054448-c2c2-4489-b646-f2d0dec8c9ab)

- Si la ruta donde nos encontramos esta activa , se le aplica el route link active y se le aplica el router link exact active
- Para marcer el estilo general del servicio route link active  - Hijo de home 
- Situacion Concreta del servicio - link exact active - Excatamente la del Home

![image](https://github.com/user-attachments/assets/ded6e567-20ae-4faf-a46f-8a68f103e31c)

## Uso de parametros para rutas dinamicas

- Llamar a la ruta determina y pasar informacion de un componente a otro.
- Mandar un parametro dentro de una ruta y que esta la reciba




- Aca le damos el parametro id para que a esta le llegue dicho paramtro y lo reciba. Este elemneto es **dinamico**
- De esta manera podemos recuperar la inforamacion y utlizarla.

![image](https://github.com/user-attachments/assets/629f2433-802e-422b-b97f-6781f0508476)


![image](https://github.com/user-attachments/assets/2596c356-ed0e-4ffb-b927-540517220b72)

- Carga solamente si le pasamos un parametro.

### Pero esta estructuracion esta mal !! 

- Dejamos el Blog sin id y cramos una View de tipo post view - que utilizaremos para ver el detaller del blog.

![image](https://github.com/user-attachments/assets/58545edd-ae46-466f-bd3d-c6ba862e12aa)

- **De esta manera , cuando se ingresa un compnente en el blog/ , entramos al post view**

## Buena estructuracion de rutas: 

![image](https://github.com/user-attachments/assets/1c9604fd-e67f-4522-b47e-fc397d48395a)

- Vue utiliza el "to" en el router link , ante grandes proyectos vamos a tener multiples enlaces (footer ,etc)
- Elementos que modifican la navegacion
- Es decir , no es mantenible

- Manera correcta: 

![image](https://github.com/user-attachments/assets/97077728-90dd-4a6f-83e4-cd2672f488fe)

- De esta manera , solo responde al nombre en vez de la ruta.

![image](https://github.com/user-attachments/assets/779aea58-9d8a-4d64-b16a-f3c074be7846)


## Comparacion y diferencias: 

![image](https://github.com/user-attachments/assets/00f46060-64c9-4640-8ee8-b9b6fab6e45d)

![image](https://github.com/user-attachments/assets/2c41c5ab-d80e-4c52-84c8-ba1a2d4b6d45)

![image](https://github.com/user-attachments/assets/2625e569-3423-4828-bbce-88bcfd66b004)


## Como obtener la informacion (id) del PostView? 

![image](https://github.com/user-attachments/assets/b5d441a0-f733-4c75-bba3-8fac87659249)

