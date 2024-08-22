
//Pido la cantidad de veces que el usuario quiere jugar (no puse límites para no complicar el código, con do while o algo por el estilo)
var numVeces = parseInt(prompt("Cuantas veces quiere jugar de 1 a 5"));

var num = 1;

//se ejecuta siempre que el num sea inferior al numVeces ingresado por el usuario
while (num <= numVeces) {
    var eleccionJugador = prompt("Escriba su elección: piedra, papel o tijera"); //acá da igual que ingrese con mayusc o minusc, abajo lo normalizo
    var jugadaRandom = Math.floor(Math.random() * 3);
    switch (jugadaRandom) {
        case 0:
            jugadaMaquina = "piedra";
            break;
        case 1:
            jugadaMaquina = "papel";
            break;
        case 2:
            jugadaMaquina = "tijera";
            break;
        default:
            console.log("Valor inválido");
            break;
    }
    //Alert con mayúsculas para dar énfasis
    alert(`Tu elección: ${eleccionJugador.toUpperCase()}--- Elección de la máquina: ${jugadaMaquina.toUpperCase()}`)

    //En distintos if voy normalizando la elección del jugador para que quede todo en minúsculas
    if (eleccionJugador.toLowerCase() === jugadaMaquina) {
        alert(`El resultado de la partida n° ${num} es: EMPATE! \n
        intentos disponibles: ${numVeces - num}`);
    } else if (
        (eleccionJugador.toLowerCase() === 'piedra' && jugadaMaquina === 'tijera') ||
        (eleccionJugador.toLowerCase() === 'papel' && jugadaMaquina === 'piedra') ||
        (eleccionJugador.toLowerCase() === 'tijera' && jugadaMaquina === 'papel')
    ) {
        alert(`El resultado de la partida n° ${num} es: GANASTE! \n  
        intentos disponibles: ${numVeces - num}`); //agregué los intentos disponibles o créditos
    } else {
        alert(`El resultado de la partida n° ${num} es: PERDISTE! \n
        intentos disponibles: ${numVeces - num}`); //agregué los intentos disponibles o créditos
    }
    num++;
}
alert("JUEGO TERMINADO!"); //al erminar las iteraciones se termina el juego




//ESTA PARTE HACIA ABAJO ERA MI DESAFÍO DE CACHIPUN ORIGINAL, LA DEJÉ PORQUE ME SIRVE PARA EL APRENDIZAJE
//PERO ENCONTRÉ MÁS FACIL HACERLO TODO DIRECTO EN JS


/*
//obtener la cantidad de veces que jugará la persona



// Obtener el elemento HTML con el id "resultado"
const resultadoElement = document.getElementById("eleccionMaquina");
console.log(resultadoElement);


//obtener el ID del html donde se define la jugada de la persona
const selectElement = document.getElementById('jugadaPersona');
console.log(selectElement);
//captura el elemento click del html, para que recién ahí haga la jugada la máquina
selectElement.addEventListener('click', () => {

    // const jugadaUsuario = selectElement.value;

    var jugadaRandom = Math.floor(Math.random() * 3);


    switch (jugadaRandom) {
        case 0:
            jugadaMaquina = "piedra";
            break;
        case 1:
            jugadaMaquina = "papel";
            break;
        case 2:
            jugadaMaquina = "tijera";
            break;
        default:
            console.log("Valor inválido");
            break;
    }

    // Asignar el valor de jugadaMaquina al contenido del elemento
    resultadoElement.innerHTML = jugadaMaquina;
});


//obtengo el campo donde irá el resultado del juego
const resultadoJuego = document.getElementById("resultadoJuego");

//obtengo el formulario completo para explorarlo
const formulario = document.getElementById('jugadaPersona');

formulario.onchange = function () {
    // Luego de traerme el trozo completo (formulario) busco la opción que esté checkada y esa queda como la elección del jugador
    const eleccionJugador = formulario.querySelector('input[name="opcion"]:checked').value;
    // Ahora efectúo las comparaciones con un if y dejo en var el resultado para luego exportarlo al html
    if (eleccionJugador === jugadaMaquina) {
        var result = 'Empate';
    } else if (
        (eleccionJugador === 'piedra' && jugadaMaquina === 'tijera') ||
        (eleccionJugador === 'papel' && jugadaMaquina === 'piedra') ||
        (eleccionJugador === 'tijera' && jugadaMaquina === 'papel')
    ) {
        var result = 'Ganaste!';
    } else {
        var result = 'Perdiste!';
    }

    resultadoJuego.innerHTML = result;
};
*/


