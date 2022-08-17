
const mailLogin = document.getElementById('emailLogin'),
passLogin = document.getElementById('passwordLogin'),
btnLogin = document.getElementById('login'),
bienvenidos = document.getElementById('usuarui'),
//aqui va todo lo que es el registro de nuevo usuario
nombreUsuario = document.getElementById('logusers'),
claveuser = document.getElementById('logpass'),
emailuser = document.getElementById('logemail'),
registrarNuevoUsuario = document.getElementById('btnregister'),
modalEl = document.getElementById('modalLogin'),
modal = new bootstrap.Modal(modalEl),
toggles = document.querySelectorAll('.toggles'),
card = document.createElement('div'),
vercarrito =document.getElementById('vercarrito'),
ver = document.getElementById('catalogo'),
buscar = document.getElementById('btnbuscar'),
vender = document.getElementById('btnvender'),
salir = document.getElementById('salir'),
mios = document.querySelectorAll('.mios'),
salida = document.getElementById('btnLogout'),
miCja = document.getElementById('contenedor'),
micards = document.getElementById('template').content,
templateFooter = document.getElementById('template-footer').content,
tmCarrito = document.getElementById('template-carrito').content,
items = document.getElementById('items'),
footer = document.getElementById('footer');
const fragment = document.createDocumentFragment();

document.addEventListener('DOMContentLoaded', () => {
    fechData();
})
const fechData = async () => {
    try {
        const response = await fetch('./js/api.json');
        const data = await response.json();
       ver.addEventListener('click', () => {
        miCja.innerHTML= " ";
        intercambiarClases(toggles, 'd-none');
        pintarCards(data);
       })
    } catch (err) {
        console.log(err);
    }
};

const pintarCards = data => {
    data.forEach(producto => {
        micards.querySelector('p').textContent = producto.precio;
        micards.querySelector('img').setAttribute('src', producto.imagen);
        micards.querySelector('button').dataset.id = producto.id;
        // micards.querySelector('button.bg-white').dataset.id = producto.codigo;
        micards.querySelector('h4').textContent = producto.nombre;
        const clone = micards.cloneNode(true);
        fragment.appendChild(clone);
    })
    miCja.appendChild(fragment);
}
miCja.addEventListener('click', e => {
    captura(e);
    btnAumentarDisminuir(e)
})

let carrito = {}
const setcarrd = objeto => {
    const producto = {
        id: objeto.querySelector('button.micarrits').dataset.id,
        nombre: objeto.querySelector('h4').textContent,
        precio: objeto.querySelector('p').textContent,
        imagen: objeto.querySelector('img').src,
        cantidad: 1
    }
    if (carrito.hasOwnProperty(producto.id)) {
        producto.cantidad = carrito[producto.id].cantidad + 1;
    }
    carrito[producto.id] = { ...producto };

}
function intercambiarClases(array, clase) {
array.forEach(element => {
    element.classList.toggle(clase);
})
}
let  nuevoProducto ={};
vercarrito.addEventListener('click', () => {
    intercambiarClases(toggles, 'd-none');
    miCja.innerHTML= " ";
    pintarCarrito();
})

function captura(e) {
    if (e.target.classList.contains('micarrits')) {
        let a = e.target.parentElement;

        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
          })

        setcarrd(a);
    }
}
class cargarProducto {

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
/* 
buscar.addEventListener('click', () => {
    let contenido = document.getElementById('buscar');
    let entrada = contenido.value;
    let resaltado = data.filter((ele) => { return ele.nombre.toLowerCase() == entrada.toLowerCase() });
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

}) */

vender.addEventListener('click', () => {
    intercambiarClases(toggles, 'd-none');
    miCja.innerHTML = " ";

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
        const vendedor = new cargarProducto(titulo.value, precio.value, codigo.value, imagen.value);

        vendedor.asignarId( vendedor);
        console.log(vendedor);
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
            preventdefault();
            Swal.fire({
                title: 'Custom width, padding, color, background.',
                width: 600,
                padding: '3em',
                color: '#716add',
                background: '#fff url(/images/trees.png)',
                backdrop: `
                  rgba(0,0,123,0.4)
                  url("/images/nyan-cat.gif")
                  left top
                  no-repeat
                `
              })
        });
    })
}
)


const pintarCarrito = () => {
    items.innerHTML = ''

    Object.values(carrito).forEach(producto => {
        tmCarrito.querySelector('th').textContent = producto.id;
        tmCarrito.querySelectorAll('td')[0].textContent = producto.nombre;
        tmCarrito.querySelectorAll('td')[1].textContent = producto.cantidad;
        tmCarrito.querySelector('span').textContent = producto.precio * producto.cantidad;
        tmCarrito.querySelector('.btn-info').dataset.id = producto.id;
        tmCarrito.querySelector('.btn-danger').dataset.id = producto.id;

        const clone = tmCarrito.cloneNode(true)
        fragment.appendChild(clone)
    })
    items.appendChild(fragment)

    pintarFooter()
    localStorage.setItem('carrito', JSON.stringify(carrito))
}

const pintarFooter = () => {
    footer.innerHTML = ''

    if (Object.keys(carrito).length === 0) {
        footer.innerHTML = `
<th scope="row" colspan="5">Carrito vacío con innerHTML</th>
`
        return
    }

    // sumar cantidad y sumar totales
    const nCantidad = Object.values(carrito).reduce((acc, { cantidad }) => acc + cantidad, 0)
    const nPrecio = Object.values(carrito).reduce((acc, { cantidad, precio }) => acc + cantidad * precio, 0)


    templateFooter.querySelectorAll('td')[0].textContent = nCantidad
    templateFooter.querySelector('span').textContent = nPrecio

    const clone = templateFooter.cloneNode(true)
    fragment.appendChild(clone)

    footer.appendChild(fragment)

    const boton = document.getElementById('vaciar-carrito');
    boton.addEventListener('click', () => {
        pintarCarrito();
        pintarFooter();
        carrito = {};
    })
}


items.addEventListener('click', e => { btnAumentarDisminuir(e) })

const btnAumentarDisminuir = e => {
    if (e.target.classList.contains('mas')) {
        const producto = carrito[e.target.dataset.id]
        producto.cantidad++
        carrito[e.target.dataset.id] = { ...producto }
        pintarCarrito()
    }

    if (e.target.classList.contains('menos')) {
        const producto = carrito[e.target.dataset.id]
        producto.cantidad--
        if (producto.cantidad === 0) {
            delete carrito[e.target.dataset.id]
        } else {
            carrito[e.target.dataset.id] = { ...producto }
        }
        pintarCarrito()
    }
    e.stopPropagation()
}
