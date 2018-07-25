//Crear una variable donde se guardara el texto que ingrese el usuario
let entrada = document.getElementById('txt');
//console.log(entrada.value)
let mostrarResultado = document.getElementById('salir1');
//Creando variable que mandara llamar al boto codificar
let codificar = document.getElementById('codificando');
//crando variable que mandará llamar al boton descodificar
let descodificar = document.getElementById('descodificando');

// Creando funcion para que el boton 'codificar' realice una accion
codificar.addEventListener('click', (encode) => {
   let entradaTexto = entrada.value;
   let contenedor="";
   //console.log(entradaTexto)
   //Recorrido del alfabeto 
   for(let i=0; i<entradaTexto.length; i++){ 
    let textoNumero;
    let letras;
    // formula codigo ascii convierte a numero
    if(entradaTexto.charCodeAt(i) == 32){
        textoNumero = entradaTexto.charCodeAt(i);
        letras = String.fromCharCode(textoNumero);
        contenedor += letras;
    }else{
        textoNumero = (entradaTexto.charCodeAt(i) - 97 + 3)%26 +97;
       letras = String.fromCharCode(textoNumero);
           contenedor += letras;
    }
       
       //console.log(textoNumero)
       if(textoNumero >= 65 && textoNumero <=90){           
        mostrarResultado.innerHTML = contenedor;
       }else if(textoNumero >= 97 && textoNumero <= 122){
        mostrarResultado.innerHTML = contenedor;
       }else{
        mostrarResultado.innerHTML = contenedor;
       }
       

       //mostrarResultado.innerHTML = textoFormula;
   }
 

})

descodificar.addEventListener('click', (encode) => {
    let entradaTexto = entrada.value;
    let contenedor="";
    //console.log(entradaTexto)
    //Recorrido del alfabeto 
    for(let i=0; i<entradaTexto.length; i++){ 
     let textoNumero;
     let letras;
     // formula codigo ascii convierte a numero
     if(entradaTexto.charCodeAt(i) == 32){
         textoNumero = entradaTexto.charCodeAt(i);
         letras = String.fromCharCode(textoNumero);
         contenedor += letras;
     }else{
         textoNumero = (entradaTexto.charCodeAt(i) - 97 - 3)%26 + 97;
        letras = String.fromCharCode(textoNumero);
            contenedor += letras;
     }
        
        //console.log(textoNumero)
        if(textoNumero >= 65 && textoNumero <=90){           
         mostrarResultado.innerHTML = contenedor;
        }else if(textoNumero >= 97 && textoNumero <= 122){
         mostrarResultado.innerHTML = contenedor;
        }else{
         mostrarResultado.innerHTML = contenedor;
        }
        
 
        //mostrarResultado.innerHTML = textoFormula;
    }
  
 
 })