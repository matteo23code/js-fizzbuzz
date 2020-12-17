
var listaNumeri = document.getElementById('lista-numeri');

// numeri da 1 a 100.
for (var i = 1; i < 101; i++) {
  // se i è multiplo di 3 o 5 scrivi fizz o buzz
  if (i % 3 == 0 && i % 5 == 0) {
    console.log('FizzBuzz');
  }else if (i % 3 == 0) { // multiplo di 3
    console.log('fizz');
  }else if (i % 5 == 0) { // multiplo di 5
    console.log('buzz');
  }else {
    console.log(i);
  }
}
