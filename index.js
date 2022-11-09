const parsearEntero = (valor) => {
    return parseInt(prompt(valor));
}

const SALUDO = "Bienvenidx";
alert(SALUDO);

const OPCIONES = "1- Sumar \n 2-Restar \n 3- Multiplicar \n 4- Dividir \n 5- Salir";
let seleccion = parseInt(prompt(OPCIONES));

// si seleccion es estrictamente igual a 1 o... 

const condiciones = () => (seleccion ===1 || seleccion ===2 || seleccion ===3 || seleccion ===4 || seleccion ===5);

// con el ! invierto la condicion de arriba

while (!condiciones) {
    const seleccion = parsearEntero(OPCIONES);
    condiciones();
    console.log(seleccion);

}


