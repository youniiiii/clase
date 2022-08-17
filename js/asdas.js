



const usuarios = [{
id: 1,
nombre: 'admin',
mail: 'admin@',
pass: 'admin'
},
]

function intercambiarClases(array, clase) {
array.forEach(element => {
    element.classList.toggle(clase);
})
}
btnLogin.addEventListener('click',()=>{

if (usuarios[0].mail == mailLogin.value && passLogin.value == usuarios[0].pass) {

 
}else{
alert('error'+usuarios.nombre + ''+mailLogin.value);

}
})



/* 
class cargarUsuario {
    constructor(nombre, email, pass, id) {
        this.id = id;
        this.nombre = nombre;
        this.email = email;
        this.pass = pass;
    }
    asignarId(array) {
        this.id = array.length;
    }
}

*/



/* 


ver.addEventListener('click', () => {

    for (let index = 0; index < usuario.length; index++) {
        const element = usuario[index];
        let cards = document.createElement('div');
        cards.className = 'text-center flex-direction-column';
        cards.innerHTML = `
         <div class="card">
         <div class="card-img"> 
               <img src=" ${element.imagen}" class="" width="100%" height="300px"  alt="">
         </div>
         <div class="card-info">
               <p class="text-title titulo">${element.nombre}</p>
               <p class="text-body">#${element.codigo}</p>
         </div>
         <div class="card-footer">
               <span class="text-title"id="precio">$${element.precio}</span>
           <div class="card-button">
               <a href="" id="carrito"class="miBoton">
                  <svg class="svg-icon" viewBox="0 0 20 20">
                   <path d="M17.72,5.011H8.026c-0.271,0-0.49,0.219-0.49,0.489c0,0.271,0.219,0.489,0.49,0.489h8.962l-1.979,4.773H6.763L4.935,5.343C4.926,5.316,4.897,5.309,4.884,5.286c-0.011-0.024,0-0.051-0.017-0.074C4.833,5.166,4.025,4.081,2.33,3.908C2.068,3.883,1.822,4.075,1.795,4.344C1.767,4.612,1.962,4.853,2.231,4.88c1.143,0.118,1.703,0.738,1.808,0.866l1.91,5.661c0.066,0.199,0.252,0.333,0.463,0.333h8.924c0.116,0,0.22-0.053,0.308-0.128c0.027-0.023,0.042-0.048,0.063-0.076c0.026-0.034,0.063-0.058,0.08-0.099l2.384-5.75c0.062-0.151,0.046-0.323-0.045-0.458C18.036,5.092,17.883,5.011,17.72,5.011z"></path>
                   <path d="M8.251,12.386c-1.023,0-1.856,0.834-1.856,1.856s0.833,1.853,1.856,1.853c1.021,0,1.853-0.83,1.853-1.853S9.273,12.386,8.251,12.386z M8.251,15.116c-0.484,0-0.877-0.393-0.877-0.874c0-0.484,0.394-0.878,0.877-0.878c0.482,0,0.875,0.394,0.875,0.878C9.126,14.724,8.733,15.116,8.251,15.116z"></path>
                   <path d="M13.972,12.386c-1.022,0-1.855,0.834-1.855,1.856s0.833,1.853,1.855,1.853s1.854-0.83,1.854-1.853S14.994,12.386,13.972,12.386z M13.972,15.116c-0.484,0-0.878-0.393-0.878-0.874c0-0.484,0.394-0.878,0.878-0.878c0.482,0,0.875,0.394,0.875,0.878C14.847,14.724,14.454,15.116,13.972,15.116z"></path>
                   </svg>
               </a>
           </div>
         </div>
      </div>
`;
        miCja.append(cards);
        let carrito = document.getElementById('carrito');
        carrito.addEventListener('click', () => {

            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your work has been saved',
                showConfirmButton: false,
                timer: 2500
            })
        });
    }

});



//Guardamos los datos que recuperamos de la database en el storage
function guardarDatos(usuarioDB, storage) {
    const usuario = {
        'name': usuarioDB.nombre,
        'user': usuarioDB.mail,
        'pass': usuarioDB.pass
    }
    storage.setItem('usuario', JSON.stringify(usuario));
}

//Limpiar los storages

function borrarDatos() {
    localStorage.clear();
    sessionStorage.clear();
}


function recuperarUsuario(storage) {
    return JSON.parse(storage.getItem('usuario'));
}

//Esta función nos permite intercambiar la visualización de los elementos del DOM, agregando o sacando la clase d-none. Si el elemento la tiene, se la saco, y si no la tiene, se la agrego. La gata Flora de las funciones sería.


//La función de validar se aprovecha del tipo de return que hace el método find (el objeto si lo encuentra, o undefined si no encuentra ninguno que cumpla con la condición)
function validarUsuario(usersDB, user, pass) {
    let encontrado = usersDB.find((userDB) => userDB.mail == user);

    if (typeof encontrado === 'undefined') {
        return false;
    } else {
        //si estoy en este punto, quiere decir que el mail existe, sólo queda comparar la contraseña
        if (encontrado.pass != pass) {
            return false;
        } else {
            return encontrado;
        }
    }
}


//Esta función revisa si hay un usuario guardado en el storage, y en ese caso evita todo el proceso de login 
function estaLogueado(usuario) {
    if (usuario) {
        intercambiarClases(toggles, 'd-none');
    }
}

estaLogueado(recuperarUsuario(localStorage));










 */