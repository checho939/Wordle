const BOTON= document.getElementById("guess-button")
const CONTENEDOR = document.getElementById("guesses")
let intentos = 6;
let palabra = "APPLE"
let palabrass = ["APPLE", "HOUSE", "MOUSE", "MUSIC", "PHONE", "TABLE", "LIMON0", "PIZZA", "IMAGE", "SMILE", "TIGER", "HAPPY", "MONEY", "PLANT", "ROBOT"]
BOTON.addEventListener('click', intentar)///////
palabra = palabrass[Math.floor(Math.random()*palabrass.length)];
console.log(palabra);

function leerIntento() {
    let intento = document.getElementById('guess-input').value
    return intento.toUpperCase()
}

function intentar(){
    const INTENTO = leerIntento();
    CONTENEDOR.innerHTML = ""
    if (INTENTO.length < 5) {
        sinDatos("<h3>INGRESE PALABRA</h3>")
        return
    }
   

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
        if (INTENTO === palabra){

            CONTENEDOR.innerHTML = '<h1>🎉Ganaste🥳</h1>'
            terminar('<h1>🎉Ganaste🥳</h1>')
            return
        }
        if(intentos === 0){
            terminar("<h1>PERDISTE!😔</h1>")
        } 
    }
    
function sinDatos(mensaje){
    CONTENEDOR.innerHTML = mensaje
}

    function terminar(mensaje){
        const INPUT = document.getElementById("guess-input")
        INPUT.disabled = true;
        BOTON.disabled = true;
        CONTENEDOR.innerHTML = mensaje
        setTimeout(function() {
            location.reload();
        }, 2000);
    }

    