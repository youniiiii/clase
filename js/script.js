//alert('compra de una entrada de boliche <br> solo tiene  tres intentos');


////let apellido1 = document.getElementById('#apellido').value;
//let edad1 = document.getElementById('#edad').value;
//let dinero1 = document.getElementById('#pagar').value;
//let entradas1 = document.getElementById('#entradas').value;

//const precio = 300;

//function resta(n, nn) {
// resultado = n - nn;
// return resultado;
//}


//const teket = {
//   nombre: 'nombre',
//   apellido: 'apellido',
//   edad: 'edad',
//   vuelto: 'vuelto'
//}

//for (let i = 0; i < 3; i++) {

// if (edad1 > 18 && entradas1 <= 3 && dinero1 > precio) {
// }
//}


function saltearlinia() { document.write("<br>") }
function mostrar(frase) {
   document.write(frase); saltearlinia();
}




let limite = 3;
 const pass = 'master';
const user = 'master';
for (let i = 0; i < limite; i++) {
  let contraseha = prompt("porfavor dicte su contraseña");
  let usuario = prompt("porfavor dicte su usuario");
   let resta = limite - i;
   alert('LE QUEDA ' + resta + ' intentos ');
    mostrar(limite - i);
   if (pass == contraseha && user == usuario) {
      mostrar("  bienvenido " + user);
      break;
   } else {
      mostrar(" incorrecto usaste una contraseña  erronea debiste usar esto " + user + "  y  la contraseña " + pass);
      mostrar("intentalo mas tarde")

   }
  
}








