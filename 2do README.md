# Cifrado_Cesar:

El **Cifrado Cesar** es una de las técnicas de codificacion mas básicas que existen, si bien es una excelente e interesante forma de iniciarse en el mundo del cifrado. En su forma original, consiste en trasladar las palabras del texto a cifrar un número determinado de posiciones en el alfabeto. Este número de posiciones será la **clave** que necesitaremos para descifrar mas tarde nuestro mensaje. 

El **Cifrado Cesar** recibe su nombre en honor a **Julio Cesar**, que según Suetonio, lo usó con un desplazamiento de tres espacios para proteger sus mensajes imprtantes de contenido militar:

```text

"Si tenía que decir algo confidencial, lo escribia usando el cifrado,
esto es cambiando el orden de las letras del alfabeto para que ni una
palabra pudiera entenderse. Si alguien quiere decodificarlo y entender
su significado, debe sustituir la cuarta letra del alfabeto, es decir,
la D por la A, y asi con las demás."
									Suetonio, Vida de los Cesares 56
```


Por ejemplo:


Si quisiéramos **cifrar** la palabra **HOLA** con una clave de **13**, simplemente **desplazariamos** cada letra 13 posociones en el alfabeto.


![caeser-cipher](https://erwol.com/wp-content/uploads/2017/04/cifrado-cesar-erwol.jpg)


## Preámbulo:





## Definición del Producto:

Teniendo en cuenta lo anterior, se realiza lo siguiente:

Se  creará una herramienta que permitirá al usuario enviar mensajes de tipo texto de tal forma que éstos no puedan ser entendidos a simple vista, no sin antes contar con una clave que el  usuario original deberá proporcionar.

El nombre del programa se definirá en consideración a la solicitud del usuario, donde nos hace mención de que: "desea poder codificar pequeños textos"; por ello se ha elegidio que por nombre lleve el siguiente: **"Small Code"**

Este programa contempla la posibilidad de que no todos los usuarios entiendan o sepan la funcionalidad y hasta para que sirve, por ello en la intefaz podrán apreciar que han sido listados los pasos a seguir, colocando un número que corresponderá a la acción que el usuario deberá ejecutar, de esta forma, se pretende que el usuario pueda disfrutar el uso del programa, sin que le surgan sentimientos negativos (frustracion, enojo, decepción, etc), que generalmente suceden cuando no comprendemos el flujo de algun programa.

Se ha contemplado que los principales usuarios de este programa serán  usuarios mayores de 18 años y hasta los 50 años, quienes en estos tiempos ya han tenido un  acercamento con el area de tecnología, de tal forma que se han elegido combinaciones de colores divertidos y elementos que son agradables a la vista, como tamaños y formas. 

Se entiende que el uso principal de esta herramienta es por diversión, crear una nueva y poco convencinal forma de comunicacion entre los usuarios, que les permita experimentar nuevas emociones (entre ellas el suspenso). es por ello que su estructura es simple e insita a su uso.

Este programa no necesitará ser instalado, tampoco requiere de algun programa en particular, bastará con solo contar con una conexion a internet para accesar a la liga, principalmente podra tener una mejor vista si accesa desde su computadora, en  telefonos moviles o tabletas podrá accesar también.


## Pseudocodigo:

1. El usuario deberá escribir un  mensaje (input) de texto "Escribe tu mensaje." 
2. El usuario deberá seleccionar el número de caracteres que desplazará su texto.
3. El usuario deberá presionar el botón "Cifrar" al hacer esta acción el texto se convertira a Codigo Ascii.
4. El texto cifrado será mostrado debajo del texto "Aqui se mostrará tu texto CIFRADO/DESCIFRADO.
5. El resultado de este texto podrá ser copiado y pegado en la parte "Ingresa aqui un mensaje"
6. El usuario deberá seleccionar el número de caracteres que desplazará su texto (clave de usuario original).
7. El usuario deberá presionar el boton "Descifrar", lo cual le mostrará al usuario el mensaje original.
8. El texto cifrado será mostrado debajo del texto "Aqui se mostrará tu texto CIFRADO/DESCIFRADO.


## Control de Flujo:


<img align="center" src="./imagenes/CF.jpg" />