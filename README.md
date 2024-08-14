Curso Vue.js
Clase 2:

Option Api  - Reactividad Implicita : La reactividad de los datos es automatica , no es necesario usar referencia ;  pero la estructura es distinta y mas declarativa que el "Composite API", hay que declarar los metodos que usemos en apartados distintos (Estructura declarativa) , los datos en otro y demas. De esta manera es mas clara la logica pero es mas trabajo la delcaracion si el proyecto es extenso.

Composite API - Estructura Reactiva y Declarativa: La estrucutra es declarativo  y reactiva, necesarios importar el ref de "vue" para que los datos sean reactivos. La estructura solo cuenta con el setup en donde metes todo y los metodos y las declaracion de constantes esta mas inclianda hacia la reactivadad ya que la tenes que hacer a mano. Ademas hay que declarar el retorno de los datos al declarar una constante. Es mas flexible esta manera de usar el script y te da mas control de los datos que queremos hacer reactivos y cuales no.

ShortCut Composite API: " Simplicidad y Automatización " -> Para Composite API tenemos la opcion de directamente delcarar el "script" con un setup automatizado donde el retorno y la exportacion del componenete lo hace Vue.

![image](https://github.com/user-attachments/assets/28cd3ec2-1434-4fe5-86d7-d5c91b792ac3)

Clase 3: Directivas Selectivas


Renderizado entre V-IF vs V-SHOW:

Las directivas son modificadores de etiquetas en el template que te permiten añadir comportamiento dinámico a los elementos del DOM. 
V-if es una directiva que agrega o elimina elementos del DOM según una expresión booleana.

Directivas:

V-IF: Si Sabemos que los datos de los componentes van a estar cambiando constantemente , el renderizado del Dom virtual al Dom no se muestra la opción que no sea pintada por el "script".

![image](https://github.com/user-attachments/assets/2aec4bcb-202c-46ae-8c70-8d894bb51185)


V-SHOW: Para el renderizado del v-show , aparece en el Dom pero utiliza una etiqueta para ocultarlo en el template pero esta en el Dom,  aparece con un "display none"

![image](https://github.com/user-attachments/assets/1d46a4e2-ba91-498b-b465-c072da2e4105)

V-FOR:

La estrucutura de la directiva del "v-for" , toma la variable del script y la recorre (claramente debe ser un array para poder recorrerla).

![image](https://github.com/user-attachments/assets/7f749629-e8da-49a2-822d-6940336f441a)

Solo con Javascript y con la referencencia a si misma, se veria asi. 

Una version mejorada seria crear una interfaz, a travez de objetos. Ya que estamos trabajando con consumo de APIS.

![image](https://github.com/user-attachments/assets/afb65c9c-ac9f-41b2-b99c-067d9577ccfb)

V-BIND: Unidireccional

Nos sirve para bindear datos de una etiqueta del templeta con las del script(nuestro sistema de datos). Todo lo que vamos a estar viendo es a nivel unidireccional

Caso 1 : Bindeo de clases 

![image](https://github.com/user-attachments/assets/5a82a303-69c8-4cbf-a187-8b9333a59671)

En la etiqueta "p" usamos el v-bind para que colorie con la clase .danger del styles si es que la variable "hasError" es True.

Caso contrario no resaltaria en rojo y el bindeo no se activaria.

![image](https://github.com/user-attachments/assets/79705e39-6a8a-4da8-9ce8-2ac2a71a9a4d)

Caso Positivo.


Bindeo de Estilos por Eventos: 

![image](https://github.com/user-attachments/assets/b147d69d-9415-4378-bd5a-dc46d7fd8618)



Clase 4:


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

CLASE 5

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

Comienzo de Clase 6:


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

-Incio Clase 7 - 

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

Aca podemos ver como ademas podemos modificar el size segun el bindeo. Ya no es un vlaor cualquier , el componente nos va a indicar el tamaño dentro del binding.

Como accedemos ?  Por el binding.

![image](https://github.com/user-attachments/assets/56c97f92-9635-4165-971c-53bfaae9c1f7)

Funcionaria igual que el "V-MODEL" , donde a aquel se le da un value ; aqui tambien haremos lo mismo para poder modificar el size que le llega al main a travez de binding.

![image](https://github.com/user-attachments/assets/53989ab9-533b-45b2-9dd6-9a3af9d66fe6)

























