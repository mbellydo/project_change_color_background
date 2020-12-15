//Choose a random color
const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple']

//Seleccionamos el elemento del DOM con su selector CSS. Como solo hay un tag 'button', esto ya nos sirve
let button = document.querySelector('button')

// Qué queremos hacer cuando el usuario haga clic en dicho botón? Ejecutar la función 'cambiarColor'
button.onclick = cambiarColor

/**
 * 1. Necesitamos crear una función que devuelva un color aleatorio entre todos los colores del array 'colors'. Crea esta función o mira por Internet como hacer para escoger una posición aleatorio de un array
 */

function getRandomColor() {
    // Si bien normalmente las funciones no conocen nada del exterior; estos casos son una buena excepción. La lista de colores se puede considerar una cofiguración "global" a la cual cualquier función debe poder acceder.
    let numColores = colors.length
    let indiceRandom = Math.floor(Math.random() * numColores)

    return colors[indiceRandom]
}

/**
 * 2. Debemos seleccionar el botón a clicar, y todo el elemento 'body'. Guarda cada uno de los elementos en una variable. Deberían ser tan solo dos líneas de código. Muestra por consola el valor de las variables para comprobar que has seleccionado los elementos adecuados
 */

// let body ....
// let button ...

 /**
  * 3. Asocia al botón 'button' un evento onclick. Dicho evento debe llamar a una función; que se va a encargar de:
  * 
  *   A) Llamar a la otra función 'getRandomColor' y obtener un color aleatorio
  *    B) Modificar el 'backgroundColor' del body con el valor que hemos conseguido. Deves investigar como cambiar el color del fondo de un elemento HTML a través de JavaScript
  */
 function cambiarColor() {
    // Recuperamos un color aleatorio de la función
    let color = getRandomColor()

    // Recuperamos el elemento 'body'. Tampoco estaria mal dejarlo fuera de la función: es un elemento muy general que seguramente muchas funciones lo van a utilizar; igual que la variable 'colors'. Lo pongo aquí dentro para mostrar que las dos opciones son válidas
    let body = document.querySelector('body')

    // El objeto 'body' tiene una propiedad de nombre 'style. A su vez 'style' tiene una propiedad de nombre 'backgroundColor'. En ella se establece el valor del color de fondo del elemento a través de su etiqueta 'style' (inline style)
    body.style.backgroundColor = color
}
