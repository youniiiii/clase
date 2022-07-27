const usuario = 'yoni';
const pass = 1234;
let user = prompt('indicame un usuario');
let passw = prompt('indicame un contraseña');

if (usuario == user && pass == passw) {
    let edad = prompt('indicame tu edad');
    if (edad < 18 && edad > 22) {
        alert('bienvenidos  a el sector jovenes');
        alert('hola ' + usuario);
    }else if(edad > 23 && edad < 40){
        alert('bienvenidos  a el sector adultos');
    }else {
        alert('no podes ingresar a ninguna sala  por que superas la edad');
    }
} else {
    alert('no estas mal');
}
