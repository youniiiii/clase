let usuario = [{
    id: 1,
    nombre: 'televisor',
    codigo: 'UN32',
    precio: 80000,
    imagen: './img/televisor.png'
}, {
    id: 2,
    nombre: 'HELADERA',
    codigo: 'PH35',
    precio: 390000,
    imagen: './img/heladera.png'
}, {
    id: 3,
    nombre: 'PC',
    codigo: '553B',
    precio: 134999,
    imagen: './img/pc.png',

}, {
    id: 4,
    nombre: 'CAMPERA',
    codigo: '552B',
    precio: 14999,
    imagen: './img/ropa2.png'

}, {
    id: 5,
    nombre: 'CELULAR',
    codigo: '523B',
    precio: 154999,
    imagen: './img/celular2.png'

}, {
    id: 6,
    nombre: 'PABAELECTRICA',
    codigo: '563F',
    precio: 17999,
    imagen: './img/pabaelectrica.png'

}, {
    id: 7,
    nombre: 'MAQUINADECOSER',
    codigo: '201F',
    precio: 134999,
    imagen: './img/maquinadecoser.png'

}, {
    id: 8,
    nombre: 'VAPORERA',
    codigo: 'BFQF',
    precio: 14999,
    imagen: './img/vaporera.png'

}, {
    id: 9,
    nombre: 'CALOVENTO',
    codigo: 'BFQ1',
    precio: 1999,
    imagen: './img/caloventor.png'

}, {
    id: 10,
    nombre: 'CARPA',
    codigo: 'Q12F',
    precio: 134999,
    imagen: './img/carpa.png'
}];
function refrescar() { location.reload(); }

let miCja = document.getElementById('contenedor');
class cargar {

    constructor(nombre, precio, codigo, imagen, id) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.codigo = codigo;
        this.imagen = imagen;
    }
    asignarId(array) {
        this.id = array.length;
    }
}
const carrito =[];

const card = document.createElement('div');
let ver = document.getElementById('catalogo');
let buscar = document.getElementById('btnbuscar');
let vender = document.getElementById('btnvender');
let salir = document.getElementById('salir');

vender.addEventListener('click', () => {
    card.innerHTML = `
     <ul class="vender">
    <li>
      <input type="text" id="titulo" placeholder="titulo"required>
    </li>
    <li>
      <input type="number" id="precio" placeholder="precio"required>
    </li>
    <li>
    <input type="number" id="codigo" placeholder="codigo"required>
  </li>
    <li>
      <input type="url" id="imagen" placeholder="imagen"required>
    </li>
    <li>
      <input type="submit" id="vende" value="cargar">
    </li>
  </ul>  
   <h4 class="titulo">vende y ingresa tus productosno</h4>
  <img src="https://cdn.palbincdn.com/images/blog/gallery/vender-comida-por-internet@x1600--s1.png" class="" width="400px" height="500px"  alt="">
  
  `;
    miCja.append(card);

    let vender = document.getElementById('vende');
    let titulo = document.getElementById('titulo');
    let imagen = document.getElementById('imagen');
    let precio = document.getElementById('precio');
    let codigo = document.getElementById('codigo');

    vender.addEventListener('click', () => {
        const vendedor = new cargar(titulo.value, precio.value, codigo.value, imagen.value);

        usuario.push(vendedor);

        vendedor.asignarId(usuario);
        card.classList.add('justify-content-center text-center');
        card.innerHTML = `

    <h4 class="titulo">${vendedor.nombre}</h4>
    <img src=" ${vendedor.imagen}" class="" width="400px" height="500px"  alt="">
    <div class="card-body">
        <span id="precio">$ ${vendedor.precio}</span>
    </div>
    <div class="card-footer">
    <a href=""id="btnvendr" class="miBoton">vender</a></div>`;

        miCja.append(card);
        let venders = document.getElementById('btnvendr');
        venders.addEventListener('click', () => {
            Toastify({
                text: "This is a toast",
                duration: 5000,
                destination: "https://github.com/apvarun/toastify-js",
                newWindow: true,
                close: true,
                gravity: "top", // `top` or `bottom`
                position: "left", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                    background: "linear-gradient(to right, #00b09b, #96c93d)",
                },
                onClick: function () { } // Callback after click
            }).showToast();
        });
    })
}
)

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

buscar.addEventListener('click', () => {
    let contenido = document.getElementById('buscar');
    let entrada = contenido.value;
    let resaltado = usuario.filter((ele) => { return ele.nombre.toLowerCase() == entrada.toLowerCase() });
    if (resaltado.length > 0) {
        card.innerHTML = `
        <div class="card">
        <div class="card-img"> 
              <img src="${resaltado[0].imagen}" class="" width="100%" height="300px"  alt="">
        </div>
        <div class="card-info">
              <p class="text-title titulo">${resaltado[0].nombre}</p>
              <p class="text-body">${resultado[0].codigo}</p>
        </div>
        <div class="card-footer">
              <span class="text-title"id="precio">$${resaltado[0].precio}</span>
          <div class="card-button">
              <a href="./page/clas.html"id="misCompras"class="miBoton">
              <svg class="svg-icon" viewBox="0 0 20 20">
              <path d="M17.72,5.011H8.026c-0.271,0-0.49,0.219-0.49,0.489c0,0.271,0.219,0.489,0.49,0.489h8.962l-1.979,4.773H6.763L4.935,5.343C4.926,5.316,4.897,5.309,4.884,5.286c-0.011-0.024,0-0.051-0.017-0.074C4.833,5.166,4.025,4.081,2.33,3.908C2.068,3.883,1.822,4.075,1.795,4.344C1.767,4.612,1.962,4.853,2.231,4.88c1.143,0.118,1.703,0.738,1.808,0.866l1.91,5.661c0.066,0.199,0.252,0.333,0.463,0.333h8.924c0.116,0,0.22-0.053,0.308-0.128c0.027-0.023,0.042-0.048,0.063-0.076c0.026-0.034,0.063-0.058,0.08-0.099l2.384-5.75c0.062-0.151,0.046-0.323-0.045-0.458C18.036,5.092,17.883,5.011,17.72,5.011z"></path>
              <path d="M8.251,12.386c-1.023,0-1.856,0.834-1.856,1.856s0.833,1.853,1.856,1.853c1.021,0,1.853-0.83,1.853-1.853S9.273,12.386,8.251,12.386z M8.251,15.116c-0.484,0-0.877-0.393-0.877-0.874c0-0.484,0.394-0.878,0.877-0.878c0.482,0,0.875,0.394,0.875,0.878C9.126,14.724,8.733,15.116,8.251,15.116z"></path>
              <path d="M13.972,12.386c-1.022,0-1.855,0.834-1.855,1.856s0.833,1.853,1.855,1.853s1.854-0.83,1.854-1.853S14.994,12.386,13.972,12.386z M13.972,15.116c-0.484,0-0.878-0.393-0.878-0.874c0-0.484,0.394-0.878,0.878-0.878c0.482,0,0.875,0.394,0.875,0.878C14.847,14.724,14.454,15.116,13.972,15.116z"></path>
              </svg>
              </a>
          </div>
        </div>
     </div> `;
        miCja.append(card);
    } else {

        card.innerHTML = `
        <h4 class="titulo">buscar con otro nombre</h4>
        <img src="https://imagenes.20minutos.es/files/image_990_v3/uploads/imagenes/2021/11/24/google-imagenes-2.png" class="" width="400px" height="500px"  alt="">
        `;
        miCja.append(card);
    }

})

const usuarios = [{
    nombre: 'admin',
    mail: 'admin@',
    pass: 'admin'
},
]



const mailLogin = document.getElementById('emailLogin'),
    passLogin = document.getElementById('passwordLogin'),
    recordar = document.getElementById('recordarme'),
    btnLogin = document.getElementById('login'),
    nombreUsuario = document.getElementById('nombreUsuario'),
    modalEl = document.getElementById('modalLogin'),
    modal = new bootstrap.Modal(modalEl),
    toggles = document.querySelectorAll('.toggles');


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
function intercambiarClases(array, clase) {
    array.forEach(element => {
        element.classList.toggle(clase);
    })
}

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

btnLogin.addEventListener('click', (e) => {
    e.preventDefault();
    //Validamos que ambos campos estén completos
    if (!mailLogin.value || !passLogin.value) {
        alert('Todos los campos son requeridos');

    } else {
        let data = validarUsuario(usuarios, mailLogin.value, passLogin.value);
        //Revisamos si el return de la función validate es un objeto o un boolean. Si es un objeto, fue una validación exitosa y usamos los datos. Si no, informamos por alert.
        if (!data) {
            alert(`Usuario y/o contraseña erróneos`);
        } else {
            //Revisamos si elige persistir la info aunque se cierre el navegador o no
            if (recordar.checked) {
                guardarDatos(data, localStorage);
                saludar(recuperarUsuario(localStorage));
            } else {
                guardarDatos(data, sessionStorage);
                saludar(recuperarUsuario(sessionStorage));
            }

            //Recién ahora cierro el cuadrito de login
            modal.hide();

            //Muestro la info para usuarios logueados
            mostrarInfoMascota(mascotas);
            intercambiarClases(toggles, 'd-none');
        }
    }


})

btnLogout.addEventListener('click', () => {
    borrarDatos();
    intercambiarClases(toggles, 'd-none');
});

//Esta función revisa si hay un usuario guardado en el storage, y en ese caso evita todo el proceso de login 
function estaLogueado(usuario) {
    if (usuario) {
        intercambiarClases(toggles, 'd-none');
    }
}

estaLogueado(recuperarUsuario(localStorage));







