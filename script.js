const BOTON= document.getElementById("guess-button")
let intentos = 6;
let palabra = "APPLE"
BOTON.addEventListener('click', intentar)
function leerIntento() {
    let intento = document.getElementById('guess-input').value
    return intento.toUpperCase()
}

function intentar(){
    const INTENTO = leerIntento();
   

    const GRID = document.getElementById("cuadro");
    const ROW = document.createElement("div");
    ROW.className = "row";
    for (let i in palabra){
        const SPAN = document.createElement("span");
        SPAN.className = "letter";
        SPAN.innerHTML = INTENTO[i];
        if (INTENTO[i]===palabra[i]){
            SPAN.style.backgroundColor = "green"}
            else if(palabra.includes(INTENTO[i])){
                SPAN.style.backgroundColor = "yellow"
            } else {
                SPAN.style.backgroundColor = "gray"
            }
            ROW.appendChild(SPAN);
        }
        GRID.appendChild(ROW);
        intentos--;
        console.log(intentos)
        if (INTENTO === palabra){
            let contenedor = document.getElementById("guesses")
            contenedor.innerHTML = '<h1>Ganaste</h1>'
            terminar('<h1>Ganaste</h1>')
            return
        }
        if(intentos === 0){
            terminar("<h1>PERDISTE!</h1>")
        }
    }
    
    function terminar(mensaje){
        const INPUT = document.getElementById("guess-input")
        INPUT.disabled = true;
        BOTON.disabled = true;
        let contenedor = document.getElementById("guesses")
        contenedor.innerHTML = mensaje
        setTimeout(function() {
            location.reload();
        }, 2000);
    }