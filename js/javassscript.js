const usuario = [{ ropa: 'remera', precio: 500 }, { ropa: 'pantalon', precio: 600 }, { ropa: 'pollera', precio: 1000 }]
function cargar(ropa, precio) {
    this.ropa = ropa;
    this.precio = precio;
}

let cliente = prompt('sos cliente si o no');

let clientes = 'si';

if (cliente == clientes) {
    let buscas = prompt('que prenda busca');
    for (let index = 0; index < usuario.length; index++) {
        const element = usuario[index];
        let resultado = element.ropa;
        let pre = element.precio;
        if (buscas == resultado) {
            alert('tenemos esa prenda ' + resultado + ' su precio es ' + pre);
            let comprar = prompt('desea comprarla');
            if (comprar == 'si') {
                alert('gracias por tu compra');
                index = 30;
            } else {
                alert('gracias por visitarnos');
                index = 30;
            }
        } else if (index === usuario.length) {
            alert('gracias por visitarnos');
            index = 30;

        } /* else {
            alert('no tenemos nada por ese nombre quiere filtrar');
            let si = prompt('si o no?');
            if (si == 'si') {
                let filtrar = prompt('que desearia que busque');

                let result2 = usuario.filter((item, index) => item = filtrar)
                console.log('tenemos  solo esto ' + result2);
                alert(result2);
                index = 30;
            } else if (si == 'no') {
                alert('gracias por visitarnos');
                index = 30;
            } else {
                alert('gracias por visitarnos');
                index = 30;
            }
        } */
    }
} else if (cliente == 'no') {
    alert(' sos vendedor? ingresa tus productos');

    let ropa = prompt('ropa');
    let precio = parseInt(prompt('precio'));
    let vendedor = new cargar(ropa, precio);
    console.log(vendedor);
    usuario.push(vendedor);
    alert('cargaste la prenda  :' + vendedor.ropa + '  y su precio  :' + vendedor.precio);
} else {
    alert('solo clientes o vendedores');
}
