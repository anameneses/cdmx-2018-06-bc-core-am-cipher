//Crear una variable donde se guardara el texto que ingrese el usuario
let entrada = document.getElementById('txt');
//console.log(entrada.value)
let mostrarResultado = document.getElementById('salir1');


//Creando variable que mandara llamar al boto codificar
let codificar = document.getElementById('codificando');
// Creando funcion para que el boton 'codificar' realice una accion
codificar.addEventListener('click', (encode) => {
   let entradaTexto = entrada.value;
   //console.log(entradaTexto)
   //Recorrido del alfabeto 
   for(let i=0; i<entradaTexto.length; i++){ 
    // formula codigo ascii convierte a numero
       let textoNumero = entradaTexto.charCodeAt(i)
       //console.log(textoNumero)
       if(textoNumero >= 65 && textoNumero <=90){           
        mostrarResultado.innerHTML = textoNumero;
       }else if(textoNumero >= 97 && textoNumero <= 122){
        mostrarResultado.innerHTML = textoNumero;
       }
       

       //mostrarResultado.innerHTML = textoFormula;
   }
 

})
