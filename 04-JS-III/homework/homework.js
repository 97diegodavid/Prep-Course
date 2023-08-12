// No cambies los nombres de las funciones.

const eleventyNavigation = require("@11ty/eleventy-navigation/eleventy-navigation");

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0]; 
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length-1];
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  /*for(let i=0; i<array.length; i++){
      array[i]++ ;
  }
  return array;*/
  /*var Resultado =[];
  for(let i =0 ; i<array.length; i++){
    Resultado.push(array[i]+1);
  }
  return Resultado; */
  let incremento = array.map((num)=> num+1);
  return incremento ; 
  

}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  /*var  vec = [array.length+1];    
    for(let i =0; i<array.length;i++){
       vec[i]= array[i];
    }
    vec[array.length] = elemento;
    return vec ;  */
    /*El método push() añade uno o más elementos al final de un arreglo, y devuelve la
      nueva longitud del array.*/
    array.push(elemento);
    return array;
    
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  /*var vec = [array.length+1];
    vec[0]=elemento;
    for(let i =0;i<array.length;i++){
      vec[i+1]=array[i];
    }
    return vec ; */
    array.unshift(elemento);
    return array ;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
 
  /*
  let frase = "";
  for(let i = 0; i<palabras.length;i++){
    if(frase==="") frase = palabras[i];
    
    else  frase = frase + ' ' + palabras[i];

  }
  return frase ;  */
  
  /* El método join() convierte un arreglo en un string, uniendo todos los elementos de
     este en una misma cadena.*/
    return palabras.join(' ');

}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  /*
  for(let i =0; i<array.length;i++){
     if(array[i]===elemento) {
      return true ;
     }
  }
  return false ; */
  return array.includes(elemento);
  /*El método includes() determina si un arreglo incluye o contiene un elemento
  específico. Devuelve true o false en cada caso. */
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  /*
  var suma =0 ;
  for(let i =0 ; i<numeros.length;i++){
    suma+=numeros[i];
  }
  return suma;  */
  /*
  let suma =0 ; 
    numeros.forEach(element => {
      suma+=element;
   });
   return suma;  */
   /*El método forEach() nos permite recorrer un arreglo, realizando alguna acción en
     para cada elemento.*/  
   let suma= 0; 
   return suma= numeros.reduce((n1,n2)=>n1+n2);
   /*El método reduce en JavaScript se utiliza para reducir los elementos de un array a un 
     único valor . Se puede aplicar una función a cada uno de los elementos del array y 
     acumular el resultado en un solo valor de retorno */

}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  /*
  var suma =0 ;
  for(i=0;i<resultadosTest.length;i++){
      suma+=resultadosTest[i];
  }
  return suma/resultadosTest.length;*/
  var suma =0;
  for (var i   of resultadosTest) {
     suma+=i; 
  }
  return suma / resultadosTest.length; 
   /*El for...of en JavaScript es una declaración utilizada para iterar a través de objetos
     iterables (como Arrays, Strings, Maps, Sets, etc.) y permite acceder a cada valor de forma 
     secuencial en una variable temporal. A diferencia del for clásico y el for...in, for...of 
     no se limita a objetos con índices numéricos, sino que puede recorrer cualquier objeto 
     iterativo sin importar la estructura de los índices.

  */

  }


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:

 var mayor =0;
  for(let i =0; i<numeros.length;i++){
      if(numeros[i]>mayor){
        mayor= numeros[i];
      }
    }
    return mayor ; 
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  let mult = 1 ;
  if(arguments.length===0) return 0 ;
  if(arguments.length===1) return arguments[0]; 
  else {
           for(var i =0 ; i<arguments.length; i++){
                mult*=arguments[i]; 
           }
      }
  
  return mult ; 
  
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  /*
  let cont =0; 
  for(let i = 0; i<arreglo.length;i++){
     if(arreglo[i]>18)  cont ++;
  }
  return cont ;*/
  /*
  let cont =0; 
  arreglo.forEach(element => {
    if(element>18) cont++;
  });
  return cont ;  */
  /*El método forEach() nos permite recorrer un arreglo, realizando alguna acción en
    para cada elemento.*/
   let mayores = arreglo.filter(elementoDelArreglo => elementoDelArreglo >18);
     return  mayores.length;
     /*El método filter() crea un nuevo array con todos los elementos que
       cumplan la condición implementada por la función dada.*/
      /* return array.filter(num => num > 18 ).length */
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
   return numeroDeDia===1 || numeroDeDia===7 ?  "Es fin de semana" : "Es dia Laboral" ; 
   // operadores ternarios 
   
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  /*
  while(n>10){
    n= Math.trunc(n/10);
  }
  if(n===9) return true; 
  else return false;   */
  /* La función Math. trunc() devuelve la parte entera de un numero removiendo
     cualquier dígito decimal */
    n = n.toString(); 
    if(n.charAt(0)==="9") return true ; 
    else return false;
    /* El método toString() permite convertir cualquier valor de tipo numérico en su 
       representación de tipo cadena , en este caso convierte un numero entero en un string */ 
    /* El método charAt() de String devuelve en un nuevo String el carácter  de una cadena. */
  
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí 
  /*
  for(let i = 0 ; i<arreglo.length; i++){
        if(arreglo[i]===arreglo[i+1]) return true;
  }
  return false; */
  /*
  for(let i =0 ; i<arreglo.length;i++)
     for(let j= i+1 ; j<arreglo.length ; j++)
        if(arreglo[i]===arreglo[j]) return true ; 

  return false ; */
  //return new  Set(arreglo).size!==arreglo.length; 
  let aux = arreglo[0];
  return arreglo.every(elem => elem === aux);
  /* El método every() determina si todos los elementos en un arreglo satisfacen una 
     misma condición. */
      
}
function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  /*
  let newArray = [];
  for(let i=0; i<array.length; i++){
     if(array[i]==="Enero")  newArray.push(array[i]);
     if(array[i]==="Marzo")  newArray.push(array[i]);
     if(array[i]==="Noviembre")  newArray.push(array[i]);
 
  }
  if(newArray.length===3) return newArray;
  else return  "No se encontraron los meses pedidos" ;*/
  /* 
  let newArray = [];
  for(let i=0; i<array.length; i++){
    if(array[i]==="Enero" || array[i]==="Marzo"  || array[i]==="Noviembre"){
        newArray.push(array[i]);
    }
  }
  if(newArray.length===3) return newArray;
  return "No se encontraron los meses pedidos"; */
  let aux1 = ["Enero", "Marzo" ,"Noviembre"];
  let aux2 = [];
  array.forEach(elem => {
    if(aux1.includes(elem))
       aux2.push(elem);
  });
  if(aux2.length===3) return aux2;
  return "No se encontraron los meses pedidos"
  /* El método includes() determina si un arreglo incluye o contiene un elemento 
     específico. Devuelve true o false en cada caso.*/
  /* El método forEach() nos permite recorrer un arreglo, realizando alguna acción en
     para cada elemento.
   */
  /*El método push() añade uno o más elementos al final de un arreglo, y devuelve la
    nueva longitud del array.  */
} 


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código
  /*
  let newArray = [];
  for(let i =0; i<array.length; i++){
      if(array[i]>100){
           newArray.push(array[i]) ;

      }
  }
  return newArray;*/
  return array.filter(num => num >100);

}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  /*
  let newArray = [];
  for(let i =0 ; i<10; i++ ){
      numero+=2;
      if(numero===i){
        return "Se interrumpió la ejecución" ;

      } else newArray[i] = numero;
  }
  return newArray; */ 
  /*
  let newArray = [];
  var cont =0;
  while(cont<10){
     numero+=2;
     if(numero===cont)  return "Se interrumpió la ejecución" ;
     else newArray[cont] = numero; 
     cont ++;
   }
   return newArray;*/
   let newArray = [];
   let aux =0 ;
   for(let i =0; i<10;i++){
      numero+=2;
      if(numero!==i){
        newArray[i] = numero; 
      }
      else{
        aux = 1 ; 
        break;

      }
   }
   if(aux===1) return "Se interrumpió la ejecución";
   else return newArray; 
   

  }


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
 
var array = [];
for( let i = 0 ; i<10 ; i++){
    if(i===5){

      continue;
    }

    numero+=2 ;
    array.push(numero);

}
return array ;  


}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
