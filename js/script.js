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

let user = ['master', 'yoni', 'admin'];
let pass = ['master', 'yoni', 'admin'];


let limite = 3;




for (let i = 0; i < pass.length; i++) {
   let contraseha = prompt("porfavor dicte su contraseña");
   let usuario = prompt("porfavor dicte su usuario");
   let resta = limite - i;
   alert('LE QUEDA ' + resta + ' intentos ');
   for (let io = 0; io < pass.length; io++) {
      const pos = pass[io];
      const contra = user[io];
       if (pos == contraseha && contra == usuario) {
         mostrar("  bienvenido " + contra);
         i=10;
         break;

      } else {
         mostrar('te quedan : '+resta+ ' intentos. ');
         mostrar(" incorrecto usaste una contraseña  erronea debiste usar esto " + contra + "  y  la contraseña " + pos);
         mostrar("intentalo mas tarde")

      }break;
   }
}


