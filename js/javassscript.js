
const card = document.createElement('div'),
    vercarrito = document.getElementById('vercarrito'),
    ver = document.getElementById('catalogo'),
     vender = document.getElementById('btnvender'),
    items = document.getElementById('items'),
    mios = document.querySelectorAll('.mios'),
    miCja = document.getElementById('contenedor'),
    salida = document.getElementById('btnLogout'),
    micards = document.getElementById('template').content,
    templateFooter = document.getElementById('template-footer').content,
    tmCarrito = document.getElementById('template-carrito').content,
    footer = document.getElementById('footer'),
    miUsuario = document.getElementById('usuario'),
    logemail = document.getElementById('logemail'),
    logpass = document.getElementById('logpass'),
    login = document.getElementById('login');
const fragment = document.createDocumentFragment();

const fetchData = async () => {
    try {
        const datas = await fetch('https://fakestoreapi.com/products');
        const data = await datas.json();
        guardarArticulos(data);
        pintarCards(data);
    } catch (err) {
        alert(err);
    }
};

const pintarCards = data => {
    data.forEach(producto => {
        micards.querySelector('p').textContent = producto.price;
        micards.querySelector('img').setAttribute('src', producto.image);
        micards.querySelector('button').dataset.id = producto.id;
        micards.querySelector('h4').textContent = producto.title;
        const clone = micards.cloneNode(true);
        fragment.appendChild(clone);
    })
    miCja.appendChild(fragment);
}

let carrito = {}
let nuevoProducto = {};
const usuarios = [{
    nombre: 'Belen',
    mail: 'belen@mail.com',
    pass: 'belen',
    image: 'https://www.espaciotrascender.com/wp-content/uploads/2019/02/Foto-7-CLAVES-INFALTABLES-PARA-CAUTIVAR-CON-TU-IMAGEN-PERSONAL-Y-PROFESIONAL.jpg'

},
{
    nombre: 'yoni',
    mail: 'yoni@mail.com',
    pass: 'yoni',
    image: 'http://ambitodelaeducacion.com/wp-content/uploads/2014/05/Imagen-personal.jpg'

}]

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
}

const pintarFooter = () => {
    footer.innerHTML = ''

    if (Object.keys(carrito).length === 0) {
        footer.innerHTML = `
<th scope="row" colspan="5">Carrito vacío con innerHTML</th>
`
        return
    }
    const nCantidad = Object.values(carrito).reduce((acc, { cantidad }) => acc + cantidad, 0)
    const nPrecio = Object.values(carrito).reduce((acc, { cantidad, precio }) => acc + cantidad * precio, 0)

    templateFooter.querySelectorAll('td')[0].textContent = nCantidad
    templateFooter.querySelector('span').textContent = nPrecio

    const clone = templateFooter.cloneNode(true)

    fragment.appendChild(clone)

    footer.appendChild(fragment)
    const boton = document.getElementById('vaciar-carrito');
    boton.addEventListener('click', () => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        })
        swalWithBootstrapButtons.fire({
            title: 'esta seguro?',
            text: "perdera todos sus datos!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'si vaciar!',
            cancelButtonText: 'No me arrepeti!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                swalWithBootstrapButtons.fire(
                    'vacio su carrito!',
                    'volver a seleccionar producto',
                    'success'
                )
            } else if (
                
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    'Cancelled',
                    'Your imaginary file is safe :)',
                    'error'
                )
            }
        })
        pintarCarrito();
        pintarFooter();
        carrito = {};
    })
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

const setcarrd = objeto => {
    const producto = {
        id: objeto.querySelector('button.mis').dataset.id,
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


function guardarDatos(usuarioDB, storage) {

    const usuario = {
        'name': usuarioDB.nombre,
        'user': usuarioDB.mail,
        'pass': usuarioDB.pass,
        'image': usuarioDB.image
    }

    storage.setItem('usuario', JSON.stringify(usuario));
}


function guardarArticulos(articulos) {
    localStorage.setItem('articulos', JSON.stringify(articulos));
}



function guardarPDU(articulos, usuario) {
    localStorage.setItem(usuario, JSON.stringify(articulos));
}


function captura(e) {
    if (e.target.classList.contains('mis')) {

        let a = e.target.parentElement;
        setcarrd(a);
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'guardado en el carrito',
            showConfirmButton: false,
            timer: 1000
          })
    }
}

function validarUsuario(usersDB, user, pass) {
    let encontrado = usersDB.find((userDB) => userDB.mail == user);

    if (typeof encontrado === 'undefined') {
        return false;
    } else {
        if (encontrado.pass != pass) {
            return false;
        } else {
            return encontrado;
        }
    }
}

function intercambiarClases(array, clase) {
    array.forEach(element => {
        element.classList.toggle(clase);
    })
}

// con este comando eliminamos  lo que vamos a usar  const eliminamos = elarray.splice(pocision,cantidad);position es el numero en donde se encuentra y cantidad de datos borrados del array
function eliminar(array, position, cantidad) {
    array.split(position, cantidad);
}

function saludar(usuario) {
    miUsuario.innerHTML = ``;
    miUsuario.innerHTML = `
     <img src="${usuario.image}" class="" width="100px" height="100px"  alt="">
     <h4 class="titulo">${usuario.name}</h4>
    `

}


function recuperarUsuario(storage) {
    let usuarioEnStorage = JSON.parse(storage.getItem('usuario'));
    return usuarioEnStorage;
}
function estaLogueado(usuario) {
    if (usuario) {
        saludar(usuario);
        fetchData();
        intercambiarClases(mios, 'd-none');

    }
}
estaLogueado(recuperarUsuario(localStorage));

///eventos de botones y mas

login.addEventListener("click", () => {
    if (!logemail.value || !logpass.value) {
        alert('Todos los campos son requeridos');

    } else {
        let data = validarUsuario(usuarios, logemail.value, logpass.value);
        if (!data) {
            alert(`Usuario y/o contraseña erróneos`);
        } else {
            Swal.fire("Bienvenido");
            guardarDatos(data, localStorage);
            intercambiarClases(mios, 'd-none');
            fetchData();
            location.reload();
        }
    }
})


salida.addEventListener('click', () => {
    location.reload();
    localStorage.clear();
})


document.addEventListener('DOMContentLoaded', () => {
    fetchData();
})


miCja.addEventListener('click', e => {
    captura(e);
})


vercarrito.addEventListener('click', () => {
    pintarCarrito();
})


vender.addEventListener('click', () => {
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
      <input  class ="btn "type="submit" id="vende" value="cargar">
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
        vendedor.asignarId(vendedor);

        guardarArticulos(vendedor)
        guardarPDU(vendedor,'Product');
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

ver.addEventListener('click', ()=>{
    let vendedor = JSON.parse(localStorage.getItem('Product'));
    console.log(vendedor);
    miCja.innerHTML = " ";
    card.innerHTML = `
    <h4 class="titulo">${vendedor.nombre}</h4>
    <img src=" ${vendedor.imagen}" class="" width="400px" height="500px"  alt="">
    <div class="card-body">
        <span id="precio">$ ${vendedor.precio}</span>
    </div>
    <div class="card-footer">
    <a href=""id="btnvendr" class="miBoton">vender</a></div>`;
    miCja.append(card);
})

items.addEventListener('click', e => {
    btnAumentarDisminuir(e)
})
