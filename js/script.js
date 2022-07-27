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
   document.write(frase); saltearlinia()
}
function solicitar(dato) {
   var solicitud = prompt(dato)
}
alert('nombre');
contraseha = solicitar("porfavor dicte su contraseña");
usuario = solicitar("porfavor dictesu usuario")
let contra = "master"
let usuar = "master"

let limite = 3;

for (let i = 0;i < limite ; i++){
   if (contra == contraseha && usuar == usuario) {
   mostrar("  bienvenido")
   mostrar("  usaste esta contraseña  " + contra + " y este  usuari  " + usuar)
}else {
   mostrar(" incorreecto usaste una contraseña  erronea desiste usar esto " + usuario + "  y  la contraseña " + contraseha);
   mostrar("intentalo mas tarde")
}

}








