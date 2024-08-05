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
