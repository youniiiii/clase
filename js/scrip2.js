const usuario = 'yoni';
const pass = 1234;
let user = prompt('indicame un usuario');
let passw = prompt('indicame un contraseña');

if (usuario == user && pass == passw) {
    let edad = prompt('indicame tu edad');
    if (edad < 18 && edad > 22) {
        alert('bienvenidos  a el sector jovenes');
        alert('hola ' + usuario);
    } else if (edad > 23 && edad < 40) {
        alert('bienvenidos  a el sector adultos');
    } else {
        alert('no podes ingresar a ninguna sala  por que superas la edad');
    }
} else {
    alert('no estas mal');
}

class Libro {
    constructor(titulo, autor, anio, genero, valoracion, id) {
        this.titulo = titulo;
        this.autor = autor;
        this.anio = parseInt(anio);
        this.genero = genero;
        this.valoracion = parseInt(valoracion);
        this.id = id;
    }
    asignarId(array) {
        this.id = array.length;
    }
    valorar(valoracion) {
        this.valoracion = valoracion;
    }


}
const Libross = [

    new Libro('juan jose', 'movidick', 2001, 'ficcion', 6, 1),
    new Libro('aame', 'agaiman', 1, 'accion', 16, 11),
    new Libro('american jggod', 'neil gajiman', 20101, 'ficckjion', 62, 21),
    new Libro('americanj god', 'j gaiman', 1211, 'ficckion', 61, 31)

]


let continuar = true;

while (continuar) {
    let ingreso = prompt('datos');
    if (ingreso.toUpperCase() == 'x') {
        continuar = false;
        break;
    }
    let datos = ingreso.split('/');
    const Libro = new Libro(datos[0], datos[1], datos[2], datos[3], datos[4]);
    Libross.push(Libro);
    Libro.asignarId(Libross);
}

let criterio = prompt('especificar\n1 - titulp (a a z) \n2 - titulo (z a a)\n3 - mejor  poer puntuado \n4 - fecha de puublivavion( mas vieja)  ')

function ordenar(criterio, array) {
    let arrayordenado = array.slice(0);
    switch (criterio) {
        case '1':
            let nombreasendiente = arrayordenado.sort((a, b) => a.titulo.localeCompare(b.titulo));
            return nombreasendiente;
        case '2':
            let nombredesendiente = arrayordenado.sort((a, b) => b.titulo.localeCompare(a.titulo));
            return nombredesendiente;
        case '3':
            return arrayordenado.sort((a, b) => b.valoracion - a.valoracion);
        case '4':
            return arrayordenado.sort((a, b) => b.anio - a.anio);
        default:
            alert('criterio de la linia no valido');
            break;
    }


}



function mostrar(array) {
    let info = '';
    array.forEach(element => {
        info += 'titulo :' + element.titulo + '\nAutor :' + element.autor + '\nAÑO de publicaion :' + element.anio + '\nvaloracion :' + element.valoracion + 'puntos.\n\n'
    });


}

alert(crearSreingResultado(ordenar(criterio, Libross)));
let autorelegido = prompt(' escribi un libro');
const filtrado = Libross.filter((Libro) => Libro.autor.toLowerCase().includes(autorelegido.toLowerCase()));
if (filtrado.length == 0) {
    alert('lo sentimos no encontramos el libnro');
} else {
    const imprimime = filtrado.map((Libro) => Libro.titulo);
    alert('loslibros  de nuesto catalogo, de autores ')
}







