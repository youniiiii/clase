let numeroTabla = parseInt(prompt('ingrese la tabla de multiplicar que quiere ver'));

if(numeroTabla >= 0 && numeroTabla <= 10){
    
    for (let i = 1 ; i <=10 ; i++) {

    let resultado = (  i*numeroTabla);

   alert ('tabla de  :  ' + numeroTabla + ' x ' + i + ' = ' +   resultado );

}
}else{
     alert('el numero ingresado es incorrecto');
    }
 echo ('gracias por consultar');