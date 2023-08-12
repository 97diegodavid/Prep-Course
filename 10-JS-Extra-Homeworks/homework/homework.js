// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  /*
  let newArray  = [];
  let keys = Object.keys(objeto);   // propiedades 
  let values = Object.values(objeto); // valores 

    for(i=0;i<keys.length;i++){
       newArray.push([keys[i],values[i]]);
    }
   console.log(newArray);
   return newArray;  */
  //return Object.entries(objeto).map(([clave,valor]) =>[clave ,valor]); 
   return Object.entries(objeto); 
       // hola 5 
  }


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
   /*
   let objeto = {};
   string = string.split('').sort();

   for(let i= 0; i<string.length; i++){
      if(string[i]!==string[i-1]){
          objeto[string[i]] = 1 ; 

      }
      else {
          objeto[string[i]]+=1;

      }

   }
   return objeto ; */
   
   let objeto = {};
   let array = string.split('');
   array.sort();

   for( let i  of array ){
    var cantidad =  objeto [i] || 0; 
 
    objeto[i] =  cantidad  +1 ; 

   }
   return objeto ; 


/*
   let objeto = {} ;

   for(let i =0; i<string.length;i++){
        
      if(objeto[string[i]]){
          objeto[string[i]]++;
      }
      else {
          objeto[string[i]] = 1 ; 
      }
   }
   return objeto;  */ 


   /*El método split() convierte un string en un arreglo, donde cada elemento contendrá un sub-string, 
     dependiendo del parámetro divisor que indiquemos. */
  /*El método sort() ordena los elementos de un arreglo (array) 
    localmente y devuelve el arreglo ordenado. */
 
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  let Mayus = [];
  let Minus = [];
  for(let i = 0; i<s.length; i++){
    if(s[i]===s[i].toUpperCase()){
       Mayus.push(s[i]);
    }
    else {
       Minus.push(s[i]);
    }
  }
  return Mayus.join('') + Minus.join('') ; 
  
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  /*
  let aux = [];
  let palabras = str.split(' ');
  for(let i = 0 ; i<palabras.length; i++){
      aux[i]  = palabras[i].split("").reverse().join('');
  
  }
  return  aux.join(' '); */  
  
  return str 
      .split(" ")
      .map((palabra) => palabra.split("").reverse().join(""))
      .join(" ");  

}



function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
 /* 
 var   numString =  numero.toString();
 var   numInvertido  =  numString.split("").reverse().join('');
 if(numString===numInvertido) return "Es capicua" ; 
 else return "No es capicua"; */ 

  let string = numero.toString();
  for(let i =0 ; i<string.length; i++){
      if(string[i]===string[string.length - i -1 ]){
            return  "Es capicua" ; 
      }
      else return  "No es capicua" ; 
  }
  
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  /*
  let resultado = "";
  for(let i=0; i<cadena.length; i++){
     const caracter = cadena[i];
       if(caracter!=='a'&&caracter!=='b'&&caracter!=='c'){
          resultado+=caracter; 
       }
      
  }
  return resultado; */ 
  //return cadena.split("a").join('').split("b").join("").split("c").join('');
  return cadena.replace(/[abc]/g, ''); 
  /*El método replace() devuelve una nueva cadena con una, 
  algunas, o todas las coincidencias de un patrón , 
  siendo cada una de estas coincidencias reemplazadas por un reemplazo 
  */
  

}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  /*
  let aux = 0; 
  for(let i =0; i<arr.length -1 ; i++)
      for(let j=0; j<arr.length -1 - i ; j++)
          if(arr[j].length>arr[j+1].length){           // ordenamiento por burbujeo 
            aux= arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = aux ; 

          }
  return arr ;  */
  // return arr.sort((a,b) => a.length -  b.length  ); 
  /*El método sort() ordena los elementos de un arreglo (array) localmente y devuelve el arreglo ordenado.*/
  /*
    let arrayOrdenado = [];

    for(let i = 0; i<arr.length; i++){
        let min = Infinity; 
        let aux = 0; 
        for(let j = 0 ; j<arr.length ; j++){
            if(arr[j].length < min && !arrayOrdenado.includes(arr[j])){
                min = arr[j].length; 
                aux = j; 
             }
        }
      arrayOrdenado.push(arr[aux]);
    }
 return arrayOrdenado;  */
    let aux , posmin ; 
    for(let i =0 ; i<arr.length -1; i++){
      posmin  = i ; 
      for(let j= i+1; j<arr.length ; j++){
          if(arr[j].length< arr[posmin].length )
                posmin = j;
                                                       // ordenamiento por seleccion 
    }  
          if(posmin!=i){
            aux= arr[i];
            arr[i]= arr[posmin];
            arr[posmin] = aux ;
          }

    }
    return arr ; 
}

function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  /*
  let interseccion = [];
  for(let i=0 ; i<arreglo1.length ; i++){
       for(let j = 0 ; j<arreglo2.length; j++){           // Con dos for 
            if(arreglo1[i]===arreglo2[j]){
              interseccion.push(arreglo1[i]);
              break;
            }
      }
  }
  return interseccion; */ 

  //const interseccion = arreglo1.filter(elem => arreglo2.includes(elem));  // Con el metodo filter 
  //return interseccion ; 
  /*
  let interseccion = [];
  arreglo1.forEach(elem => {
    if(arreglo2.includes(elem)){                // Con forEach 
      interseccion.push(elem);
    }
  });

  return interseccion;  */
  let interseccion = [];
  for(let i =0; i<arreglo1.length; i++){
      if(arreglo2.includes(arreglo1[i])){       // Con un solo for 
        interseccion.push(arreglo1[i])
      }
  }
  return interseccion ; 

}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

