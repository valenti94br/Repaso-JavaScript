/* Crea una función multiplicacion que espere dos parámetros a y b y que devuelva la multiplicación de los mismos.*/


function multiplicacion(a, b) {
    return a * b;
}

console.log(multiplicacion(2, 4))

/* Crea un programa que pida al usuario su edad y, dependiendo de la misma, muestre por consola uno de los siguientes mensajes: "Eres menor de edad", "Eres mayor de edad" o "Eres un adulto mayor". Debes utilizar un condicional if/else.*/


function mayor() {
    let edad = prompt("¿Cual es tu edad?")
    if (edad < 18) {
        return "Eres menor de edad"
    } else if (edad >= 18 && edad < 65) {
        return "Eres mayor de edad"
    } else {
        return "Eres un adulto mayor"
    }
}

console.log(mayor())

/* Crea la función sumaTresNumeros que reciba tres números como argumento y devuelva la suma de los mismos. Si alguno de los argumentos no es un número, debe devolver el string "Debo ser ejecutada con números".*/

function sumaTresNumeros(num1, num2, num3) {
    if (typeof num1 === 'number' && typeof num2 === 'number' && typeof num3 === 'number') {
        return num1 + num2 + num3;
    } else {
        return 'Debo ser ejecutada con números';
    }
}

console.log(sumaTresNumeros("hola"))

/* Crea la función primerosTresCaracteres que reciba un string como argumento y devuelva los tres primeros caracteres del mismo. Si el argumento no es un string, debe devolver el string "Debo ser ejecutada con un string". Si el string tiene menos de tres caracteres, debe devolver el string completo.*/

function primerosTresCaracteres(string) {
    if (typeof string !== 'string') {
      return 'Debo ser ejecutada con un string';
    } else if (string.length < 3) {
      return string;
    } else {
      return string.slice(0, 3);
    }
  }

  console.log(primerosTresCaracteres("Hola"))

  /* Crea la función getPrecioMostrarIVA para que devuelva una cadena de texto con formato precio con dos decimales y con el IVA ya incluido. Para 2 debería devolver 2.42 € (suponiendo un IVA del 21%). Si la función no recibe un número debería devolver devolver 'no es un formato correcto'.*/

  function getPrecioMostrarIVA(precio) {
    if (typeof precio !== 'number') {
      return 'no es un formato correcto';
    }
  
    const IVA = 0.21;
    const precioConIVA = precio + (precio * IVA);
  
    return `${precioConIVA.toFixed(2)} €`;
  }
  console.log(getPrecioMostrarIVA(2))

  // EXTRAS

  /* Crea la función penultimoCaracter que reciba un string como argumento y devuelva el penúltimo carácter del mismo. Si el argumento no es un string, debe devolver el string "Debo ser ejecutada con un string". Si el string tiene menos de dos caracteres, debe devolver el primer carácter.*/

  function penultimoCaracter(string) {
    if (typeof string !== 'string') {
      return 'Debo ser ejecutada con un string';
    } else if (string.length < 2) {
        return str[0];
    } else {
      return str[str.length - 2];
    }
}

  console.log(primerosTresCaracteres("Hola"))