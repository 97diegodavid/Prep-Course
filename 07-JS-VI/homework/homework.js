// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:
   
   /*
   let inicial ;
   inicial = nombre[0];
   let nuevo = [];
   for(let i =1; i<nombre.length; i++){
       nuevo[i]= nombre[i];
   }
   return inicial.toUpperCase() + nuevo.join('') ;  */
   /*El método join() convierte un arreglo en un string, 
     uniendo todos los elementos de este en una misma cadena.*/
    
   return nombre.charAt(0).toUpperCase() + nombre.slice(1);      //hola 4 
   /*
   El método slice() devuelve una copia de una parte del array dentro 
   de un nuevo array empezando por inicio hasta fin (fin no incluido). */
}

function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:
   cb() ; 
}

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:
  return cb(n1,n2);
}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:
  /*
  let suma = 0 ;
  for(let i = 0 ; i<numeros.length; i++){
    suma+=numeros[i]; 
  }
  cb(suma); */
  const sum = numeros.reduce((a,b)=> a + b ,0);
  cb(sum); 
}

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:
  /*
  for(let i = 0; i<array.length; i++){
      cb(array[i]++); 
  }   */
  array.forEach(cb);
}

function map(array, cb){ 
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:
  /*
  let newArray = []; 
  for(let i = 0 ; i<array.length; i++){
      newArray.push(cb(array[i]));
        
  }
  return newArray;  */
  return   array.map(ele => cb(ele )); 
  /*El método map() también nos permite recorrer un arreglo y realizar una acción por cada elemento. 
    La diferencia es que este método devuelve un nuevo arreglo con  los elementos modificados.*/

}               

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:
  /*
  let nuevo = [];
  for(let i = 0; i<array.length; i++){
    if(array[i].charAt(0)==="a"){
       nuevo.push(array[i]); 
    }
  }
  return nuevo;  */
  /*charAt es un método capaz de devolver el valor del número de posición de un carácter en un string. 
  La salida en la consola es una sola letra. */ 
  /*
  let nuevo = [];
  let cont =0; 
  for(let i = 0; i<array.length; i++){
    if(array[i][0]==="a"){
       //nuevo.push(array[i]); 
        nuevo[cont] = array[i];
        cont ++;
      }
  }
  return nuevo; */
  return array.filter(ele => ele[0]==="a");
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
