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
let miCja = document.getElementById('contenedor');
class cargar {

    constructor(nombre, precio, codigo, imagen,id) {
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


let cliente = prompt('sos cliente si o no');
let clientes = 'si';
const card = document.createElement('div');

if (cliente.toLowerCase() == clientes) {
    let entrada = prompt('que prenda busca');

    let resaltado = usuario.filter((ele) => { return ele.nombre.toLowerCase() == entrada.toLowerCase() });
    console.log(resaltado);

    if (resaltado) {

        let comprar = prompt('desea comprarla');
        if (comprar == 'si') {
            card.innerHTML = `
                    <h4 class="titulo">${resaltado[0].nombre}</h4>
                    <img src=" ${resaltado[0].imagen}" class="" width="400px" height="500px"  alt="">
                    <div class="card-body">
                        <span id="precio">$ ${resaltado[0].precio}</span>
                    </div>
                    <div class="card-footer">
                    <a href="#" class="btn btn-primary">gracias por comprar</a></div>`;
            miCja.append(card);
        } else {
            card.innerHTML = `
              <h4 class="titulo">gracias por visitarnos</h4>
            <img src="https://memegenerator.net/img/instances/85503550.jpg" class="" width="400px" height="500px"  alt="">
            `;
            miCja.append(card);
        }
    } else {
        card.innerHTML = `
        <h4 class="titulo">no tenemos ese artticulo</h4>
      <img src="https://memegenerator.net/img/instances/85503550.jpg" class="" width="400px" height="500px"  alt="">
      `;
        miCja.append(card);
    }

} else if (cliente == 'no') {
    card.innerHTML = `
    <h4 class="titulo">vende y ingresa tus productosno</h4>
  <img src="https://cdn.palbincdn.com/images/blog/gallery/vender-comida-por-internet@x1600--s1.png" class="" width="400px" height="500px"  alt="">
  `;
    miCja.append(card);
    let continuar = true;

    while (continuar) {

        let ingreso = prompt('Ingresa nombre, precio, codigo, imagen separados por (*). Ingresa X para finalizar');

        if (ingreso.toUpperCase() == 'X') {
            continuar = false;
            break;
        }
        let datos = ingreso.split('*');

        const vendedor = new cargar(datos[0], datos[1], datos[2], datos[3]);

        usuario.push(vendedor);

        vendedor.asignarId(usuario);



        card.innerHTML = `
    <h4 class="titulo">${vendedor.nombre}</h4>
    <img src=" ${vendedor.imagen}" class="" width="400px" height="500px"  alt="">
    <div class="card-body">
        <span id="precio">$ ${vendedor.precio}</span>
    </div>
    <div class="card-footer">
    <a href="#" class="btn btn-primary">gracias por vender</a></div>`;
        miCja.append(card);

    }

}

