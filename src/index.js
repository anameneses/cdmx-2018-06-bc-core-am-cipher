//Funcion codificar
const codificar = () =>{
  let entrada = document.getElementById("txt");
  //console.log(entrada.value);
  let key = document.getElementById("caracteres");
  //console.log(key.value);
  let encode = document.getElementById("codificar");
  //console.log(encode);
  let resultado = document.getElementById("salir1");
  let texto = entrada.value;
//Recorrido del alfabeto y formula codigo Ascii
  for (let i=0; i<texto.length; i++){
    let mostrar= texto.charCodeAt();
    if(mostrar <=65 ){
     texto += String.fromCharCode(mostrar - 65 + key)% 26 + 65;
}
    resultado.innerHTML = mostrar
  }
}
codificar()

//Funcion descodificar
const descodificar = () =>{
  let entrada = document.getElementById("txt");
  //console.log(entrada.value);
  let key = document.getElementById("caracteres");
  //console.log(key.value);
  let decode = document.getElementById("descodificar");
  //console.log(decode);
  let resultado = document.getElementById("salir1");
  let texto = entrada.value;
  //Recorrido del alfabeto y formula codigo Ascii
  for (let i=0; i<texto.length; i++){
    let mostrar= texto.charCodeAt();
    if(mostrar <=65 ){
     texto += String.fromCharCode(mostrar - 65 + key)% 26 + 65;
}
    resultado.innerHTML = mostrar;
  }
}
descodificar()
