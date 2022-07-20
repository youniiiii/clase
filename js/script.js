alert('analizaremos tu salud');

let nombre = prompt('ingresa tu nombre');
let apellido = prompt('ingresa tu apellido');

let peso = prompt('ingresa tu peso');
let altura = prompt('ingresa tu altura');
let sexo = prompt('ingresa tu genero');

const mujer = 'mujer';
const hombre = 'hombre';
 let altura2 =(altura*altura);
 let resultado = parseInt(peso/ altura2);

 function menor(){
   alert('solo es para mayores de 18 años');
 }
if( mujer === sexo ){
   let edad = prompt('ingresa tu edad');
   if(edad>18){
      if (resultado>20 && resultado<23){

          alert('tu imc es normal: '+ resultado);

      }else if(resultado>23){

         alert(nombre+' '+ apellido +' obesidad leve su imc es : '+ resultado);

      }
 
   }else if(edad<18){

      menor();
      }
}else if(hombre === sexo){ 
   let edad = prompt('ingresa tu edad');
      if(edad>18){

         if (resultado>20 && resultado<23){
   
              alert('tu imc es normal: '+ resultado);
   
         }else if(resultado>23){
   
            alert(nombre+' '+ apellido +' obesidad leve su imc es : '+ resultado);
   
         }
    
      }else if(edad<18){ 
         menor();
        
      }

}else{
alert('por favor ingrese su genero hombre o mujer');
}