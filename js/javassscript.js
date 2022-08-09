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
function refrescar() {location.reload();}

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
const card = document.createElement('div');
let ver = document.getElementById('catalogo');
let buscar = document.getElementById('btnbuscar');
let vender = document.getElementById('btnvender');


vender.addEventListener('click', () => {
    const card0 = document.createElement('div');
    const card1 = document.createElement('div');
    card0.innerHTML = `
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
      <input type="submit" id="vender" value="cargar">
    </li>
  </ul>
  `;
    miCja.append(card0);
    card1.innerHTML = `
    
    <button id="clear">refrescar</button>
    <h4 class="titulo">vende y ingresa tus productosno</h4>
  <img src="https://cdn.palbincdn.com/images/blog/gallery/vender-comida-por-internet@x1600--s1.png" class="" width="400px" height="500px"  alt="">
  `;
    miCja.append(card1);
    let vender = document.getElementById('vender');
    let titulo = document.getElementById('titulo');
    let imagen = document.getElementById('imagen');
    let precio = document.getElementById('precio');
    let codigo = document.getElementById('codigo');

    vender.addEventListener('click', () => {
       card1.className = 'conts';
        const vendedor = new cargar(titulo.value, precio.value, codigo.value, imagen.value);

        usuario.push(vendedor);

        vendedor.asignarId(usuario);
        const card2 = document.createElement('div');
        card2.innerHTML = `
        <button id="clear">refrescar</button>
    <h4 class="titulo">${vendedor.nombre}</h4>
    <img src=" ${vendedor.imagen}" class="" width="400px" height="500px"  alt="">
    <div class="card-body">
        <span id="precio">$ ${vendedor.precio}</span>
    </div>
    <div class="card-footer">
    <a href="./page/clas.html"id="btnvendr" class="btn btn-primary">vender</a></div>`;

        miCja.append(card2);

    })
}
)

ver.addEventListener('click', () => {


    for (let index = 0; index < usuario.length; index++) {
        const element = usuario[index];
        const card = document.createElement('div');
        card.innerHTML = `
    <h4 class="titulo">${element.nombre}</h4>
    <img src=" ${element.imagen}" class="" width="400px" height="500px"  alt="">
    <div class="card-body">
        <span id="precio">$ ${element.precio}</span>
    </div>
    <div class="card-footer">
    <a href="./page/clas.html"id="misCompras" class="btn btn-primary">comprar</a></div>`;
        miCja.append(card);

    }
});

buscar.addEventListener('click', () => {

    let contenido = document.getElementById('buscar');
    let entrada = contenido.value;
    let resaltado = usuario.filter((ele) => { return ele.nombre.toLowerCase() == entrada.toLowerCase() });
    const card3 = document.createElement('div');
    if (resaltado.length > 0) {
        card3.innerHTML = `
                    <h4 class="titulo">${resaltado[0].nombre}</h4>
                    <img src=" ${resaltado[0].imagen}" class="" width="400px" height="500px"  alt="">
                    <div class="card-body">
                        <span id="precio">$ ${resaltado[0].precio}</span>
                    <div class="card-footer">
                    <a href="./page/clas.html" class="btn btn-primary">comprar</a></div>`;
        miCja.append(card3);
    } else {
       
        const card1 = document.createElement('div');
        card1.innerHTML = `
        <h4 class="titulo">no tenemos nada de ese producto</h4>
        <img src="https://imagenes.20minutos.es/files/image_990_v3/uploads/imagenes/2021/11/24/google-imagenes-2.png" class="" width="400px" height="500px"  alt="">
        `;
         miCja.append(card1);
    }

})
