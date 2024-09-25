const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const sectionReiniciar = document.getElementById('reiniciar')
const botonMascotaJugador = document.getElementById('boton-mascota')

sectionReiniciar.style.display = 'none'

const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
const spanMascotaJugador = document.getElementById('mascota-jugador')
const spanMascotaEnemigo = document.getElementById('mascota-enemigo')

const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')

const sectionMensajes = document.getElementById('resultado')
const ataquesDelJugador = document.getElementById('ataques-del-jugador')
const ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')
const contenedorTarjetas = document.getElementById('contenedorTarjetas')
const contenedorAtaques = document.getElementById('contenedorAtaques')

const sectionverMapa = document.getElementById('ver-mapa')
const mapa = document.getElementById('mapa')
 
let jugadorId = null
let enemigoId = null
let mokepones = []
let mokeponesEnemigos = []
let ataqueJugador =[]
let ataqueEnemigo =[]
let opcionDeMokepones
let inputharry
let inputdumbledore
let inputhermione
let inputVoldemort
let inputSeverusSnape 
let inputSiriusBlack 
let mascotaJugador
let mascotaJugadorObjeto
let ataquesMokepon
let ataquesMokeponEnemigo
let botonTierra 
let botonFuego 
let botonAgua 
let botonReiniciar 
let botones =[]
let indexAtaqueJugador
let indexAtaqueEnemigo
let victoriasJugador = 0
let victoriasEnemigo = 0
let vidasJugador = 3
let vidasEnemigo = 3
let lienzo = mapa.getContext("2d")
let intervalo
let mapaBackground = new Image()
mapaBackground.src = './imagenes_Mokepon/fondohogwarts.jpg' 
let alturaQueBuscamos
let anchoDelMapa = window.innerWidth -20 // usamos el metodo de window.innerWidth para conseguir el ancho de la pantalla y -20 para que quede espacio 
const anchoMaximoDelMapa = 350
if (anchoDelMapa > anchoMaximoDelMapa) {
    anchoDelMapa = anchoMaximoDelMapa - 20
}

alturaQueBuscamos = anchoDelMapa * 600 / 800
mapa.width = anchoDelMapa 
mapa.height = alturaQueBuscamos


class Mokepon {
    constructor(nombre, foto, vida, fotoMapa, id =0) {
        this.id = id
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
        this.ancho = 30
        this.alto = 50
        this.x = aleatorio(0, mapa.width - this.ancho) // que se ubique aleatoriamente y le restamos el ancho del personaje para que no se salga
        this.y = aleatorio(0, mapa.height - this.alto)
        this.mapaFoto = new Image()
        this.mapaFoto.src = fotoMapa 
        this.velocidadx = 0
        this.velocidady = 0 
    }

    pintarMokepon(){
        lienzo.drawImage(  // creamos nuestro lienzo
            this.mapaFoto, // primer parametro
            this.x,  //posicion en X
            this.y, // posicion en y
            this.ancho, // ancho
            this.alto //alto
        )
    }

}

let harry = new Mokepon('Harry', './imagenes_Mokepon/harry.png', 5, './imagenes_Mokepon/harry.png' )
let dumbledore = new Mokepon('Dumbledore', './imagenes_Mokepon/dumbledore.png', 5, './imagenes_Mokepon/dumbledore.png' )
let hermione = new Mokepon('Hermione', './imagenes_Mokepon/hermione.png', 5, './imagenes_Mokepon/hermione.png')

let voldemort = new Mokepon('Voldemort', './imagenes_Mokepon/volde.png', 5, './imagenes_Mokepon/volde.png')
let SeverusSnape = new Mokepon('SeverusSnape', './imagenes_Mokepon/SeverusSnape.png', 5, './imagenes_Mokepon/SeverusSnape.png')
let SiriusBlack = new Mokepon('SiriusBlack', './imagenes_Mokepon/SiriusBlack.png', 5, './imagenes_Mokepon/SiriusBlack.png')


const HARRY_ATAQUES =[
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🌱', id: 'boton-tierra' },
]



const DUMBLEDORE_ATAQUES=[
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🔥', id: 'boton-fuego' }
]


const HERMIONE_ATAQUES=[
{ nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🌱', id: 'boton-tierra' }
]


const VOLDEMORT_ATAQUES =[
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🌱', id: 'boton-tierra' },
]


const SEVERUSsNAPE_ATAQUES = [
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🔥', id: 'boton-fuego' },
]


const SIRIUSbLACK_ATAQUES = [
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🌱', id: 'boton-tierra' },
]
harry.ataques.push(...HARRY_ATAQUES) // para q no me aparezca en forma de lista sino solo los valores uso los 3 ... puntos
dumbledore.ataques.push(...DUMBLEDORE_ATAQUES)
hermione.ataques.push(...HERMIONE_ATAQUES)
voldemort.ataques.push(...VOLDEMORT_ATAQUES)
SeverusSnape.ataques.push(...SEVERUSsNAPE_ATAQUES)
SiriusBlack .ataques.push(...SIRIUSbLACK_ATAQUES)


mokepones.push(harry, hermione,dumbledore, voldemort, SeverusSnape, SiriusBlack,)

function iniciarJuego() 
{
    sectionSeleccionarAtaque.style.display = 'none'
    sectionverMapa.style.display = 'none'
    mokepones.forEach((mokepon) => {
        opcionDeMokepones = `
        <input type="radio" name="mascota" id=${mokepon.nombre} />
        <label class="tarjeta-de-mokepon" for=${mokepon.nombre}>
            <p>${mokepon.nombre}</p>
            <img src=${mokepon.foto} alt=${mokepon.nombre}>
        </label>
        `
    contenedorTarjetas.innerHTML += opcionDeMokepones

     inputharry = document.getElementById('Harry')
     inputdumbledore = document.getElementById('Dumbledore')
     inputhermione = document.getElementById('Hermione')

     inputVoldemort = document.getElementById('Voldemort')
     inputSeverusSnape = document.getElementById('SeverusSnape')
     inputSiriusBlack = document.getElementById('SiriusBlack')

    })
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
   // botonReiniciar.addEventListener('click', reiniciarJuego)
    unirseAlJuego()
}

function unirseAlJuego() {
    fetch("http://192.168.1.5:8080/unirse")
        .then((res) => {
            if (res.ok) {
                res.text()
                    .then((respuesta)=> {
                        console.log(respuesta)
                        jugadorId = respuesta
                    })
            }
        })
}

function seleccionarMascotaJugador() 
{  
            if (inputharry.checked) 
            {
                spanMascotaJugador.innerHTML = inputharry.id
                mascotaJugador = inputharry.id
            } else if (inputdumbledore.checked) {
                spanMascotaJugador.innerHTML = inputdumbledore.id
                mascotaJugador = inputdumbledore.id
            } else if (inputhermione.checked) {
                spanMascotaJugador.innerHTML = inputhermione.id
                mascotaJugador = inputhermione.id
            }else if (inputVoldemort.checked) {
                spanMascotaJugador.innerHTML = inputVoldemort.id
                mascotaJugador = inputVoldemort.id
            }else if (inputSeverusSnape.checked) {
                spanMascotaJugador.innerHTML = inputSeverusSnape.id
                mascotaJugador = inputSeverusSnape.id
            }else if (inputSiriusBlack.checked) {
            spanMascotaJugador.innerHTML = inputSiriusBlack.id
            mascotaJugador = inputSiriusBlack.id
            }  
    
            else {
                 alert('Selecciona una mascota')
                 return // frenar la ejecucion
            }   
    sectionSeleccionarMascota.style.display = 'none'
    
    
    seleccionarMokepon(mascotaJugador)        
    extraerAtaques(mascotaJugador)
    sectionverMapa.style.display = 'flex'
    iniciarMapa()
    
        
}

function seleccionarMokepon(mascotaJugador) {
    fetch(`http://192.168.1.5:8080/mokepon/${jugadorId}`, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            mokepon: mascotaJugador
        })
    })
}


function extraerAtaques(mascotaJugador)
{
    let ataques
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre) {
            ataques = mokepones[i].ataques 
        }
        
    }
    mostrarAtaques(ataques)
}
function mostrarAtaques(ataques)
{
    ataques.forEach((ataque) => {
        ataquesMokepon = `
        <button id=${ataque.id} class="boton-de-ataque BAtaque">${ataque.nombre}
        </button>
        `
        contenedorAtaques.innerHTML += ataquesMokepon    
    })    
    botonTierra = document.getElementById('boton-tierra')
    botonFuego = document.getElementById('boton-fuego')
    botonAgua = document.getElementById('boton-agua')
    botonReiniciar = document.getElementById('boton-reiniciar')
    botones = document.querySelectorAll('.BAtaque')
    botonReiniciar.addEventListener('click', reiniciarJuego)
    
}
function secuenciaAtaque()
{
    botones.forEach((boton) => {
        boton.addEventListener('click', (e) =>{
            if (e.target.textContent === "🔥\n        ") {
                ataqueJugador.push('FUEGO')
                boton.style.display='none'
                //boton.style.background ='#CAE6B2'
                
            } else if (e.target.textContent === "💧\n        "){
                ataqueJugador.push('AGUA')
                boton.style.display='none'
                //boton.style.background ='#CAE6B2'
                
            }else {
                ataqueJugador.push('TIERRA')
                boton.style.display='none'
                //boton.style.background ='#CAE6B2'
                
            }
            if (ataqueJugador.length ===5) {
                enviarAtaques()
            }
            
        })
    })
}
function enviarAtaques(){
    console.log('Enviar ataques',ataqueJugador)
    fetch(`http://192.168.1.5:8080/mokepon/${jugadorId}/ataques`,{ // subir ataques al servidor id para saber quien los envia 
        method: "post", // como envio datos es tipo post
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            ataques: ataqueJugador
        })
    })

    intervalo = setInterval(obtenerAtaques, 50)
}

function obtenerAtaques(){
    console.log('OBTENER ATAQUES');
    
    fetch(`http://192.168.1.5:8080/mokepon/${enemigoId}/ataques`)
        .then(function (res){
            if (res.ok) {
                res.json()
                    .then(function({ataques}){
                        if (ataques.length===5) {
                            ataqueEnemigo = ataques
                            combate()
                        }
                    })
            }
        })
}

function seleccionarMascotaEnemigo(enemigo) 
{
    //let mascotaAleatoria = aleatorio(0, mokepones.length -1) // lenght me informa q cantidad tengo de mis mokepones 
    spanMascotaEnemigo.innerHTML = enemigo.nombre // escogemos un solo elemento y su propiedad nombre
    ataquesMokeponEnemigo =  enemigo.ataques
    secuenciaAtaque()
}
//function ataqueAleatorioEnemigo() 
//{
//    console.log('Ataques enemigo', ataquesMokeponEnemigo);
//    let ataqueAleatorio = aleatorio(0, ataquesMokeponEnemigo.length -1)
    
//    if (ataqueAleatorio == 0 || ataqueAleatorio == 1) {
//        ataqueEnemigo.push('FUEGO')
//    } else if (ataqueAleatorio == 3 || ataqueAleatorio == 4) {
//        ataqueEnemigo.push('AGUA')
//    } else {
//        ataqueEnemigo.push('TIERRA')
//    }
//    console.log(ataqueEnemigo)
//    iniciarPelea()
//}

//function iniciarPelea()
//{
//    if(ataqueJugador.length === 5 ){
        
//        combate()
//    }
//}
function indexAmbosOponentes(jugador,enemigo)
{
    indexAtaqueJugador=ataqueJugador[jugador]
    indexAtaqueEnemigo = ataqueEnemigo[enemigo]
}
function combate() 
{
    clearInterval(intervalo)
    console.log('COMBATE');

    for (let index = 0; index < ataqueJugador.length; index++) {
            if (ataqueJugador[index] === ataqueEnemigo[index]) {
                indexAmbosOponentes(index,index)
                crearMensaje("EMPATE 🟰")
                sectionReiniciar.style.display = 'block'
            }else if(ataqueJugador[index] === 'FUEGO' && ataqueEnemigo[index] === 'TIERRA' 
                || ataqueJugador[index] === 'AGUA' && ataqueEnemigo[index] === 'FUEGO' 
                || ataqueJugador[index] === 'TIERRA' && ataqueEnemigo[index] === 'AGUA') {
                indexAmbosOponentes(index,index)
                crearMensaje("GANASTE 🟡")
                victoriasJugador++
                sectionReiniciar.style.display = 'block'
                spanVidasJugador.innerHTML= victoriasJugador
            }
            else {
                indexAmbosOponentes(index,index)
                crearMensaje("PERDISTE 🔴")
                victoriasEnemigo++
                spanVidasEnemigo.innerHTML = victoriasEnemigo
                sectionReiniciar.style.display = 'block'
            }
    }
    revisarVidas()
}
function revisarVidas() 
{
    if (victoriasJugador === victoriasEnemigo) {
        crearMensajeFinal('ESTO FUE UN EMPATE 🤓')
    } else if (victoriasJugador > victoriasEnemigo) {
        crearMensajeFinal('GANASTE 🏆')
    }else{
        crearMensajeFinal('PERDISTE 😢😭')
    }
}
function crearMensaje(resultado) 
{
    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = indexAtaqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = indexAtaqueEnemigo

    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}
function crearMensajeFinal(resultadoFinal) 
{
    sectionMensajes.innerHTML = resultadoFinal
    sectionReiniciar.style.display = 'block'
}
function reiniciarJuego() 
{
    location.reload()
}
function aleatorio(min, max) 
{
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function pintarCanvas(){
    mascotaJugadorObjeto.x = mascotaJugadorObjeto.x + mascotaJugadorObjeto.velocidadx
    mascotaJugadorObjeto.y = mascotaJugadorObjeto.y + mascotaJugadorObjeto.velocidady
    
    lienzo.clearRect(0, 0, mapa.width, mapa.height) // hacer una limpieza del lienzo
    
    lienzo.drawImage(
        mapaBackground, // que sea mi imagen del lienzo
        0, // empiece en la ezquina de arriba 
        0, // a la de abajo
        mapa.width,
        mapa.height
    )
    
        mascotaJugadorObjeto.pintarMokepon()

    enviarPosicion(mascotaJugadorObjeto.x, mascotaJugadorObjeto.y)
    mokeponesEnemigos.forEach(function(mokepon){
        mokepon.pintarMokepon()
        comprobarColision(mokepon)
    })

    

}
function enviarPosicion(x,y){
    fetch(`http://192.168.1.5:8080/mokepon/${jugadorId}/posicion`,{
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({    //body en formato Json en tipo string
            x, // cuando la clave y velor valen lo mismo lo abrebiamos x: x solo ponemos x 
            y
        })
        
    })
    .then(function(res){
        if (res.ok) {
            res.json()
            .then(function({enemigos}){ //con la variable especifica
                mokeponesEnemigos = enemigos.map(function(enemigo){ // map me retorna un elemento
                    console.log({enemigo}) ;// siempre es la misma variable que definimos desde el backend
                        let mokeponEnemigo = null
                        const mokeponNombre = enemigo.mokepon.nombre 
                        if (mokeponNombre === 'Harry') {
                            mokeponEnemigo = new Mokepon('Harry', './imagenes_Mokepon/harry.png', 5, './imagenes_Mokepon/harry.png', enemigoId)         
                        }
                        else if (mokeponNombre === 'Dumbledore' ){
                            mokeponEnemigo = new Mokepon('Dumbledore', './imagenes_Mokepon/dumbledore.png', 5, './imagenes_Mokepon/dumbledore.png', enemigo.id)
                        }
                        else if (mokeponNombre === 'Hermione' ){
                            mokeponEnemigo = new Mokepon('Hermione', './imagenes_Mokepon/hermione.png', 5, './imagenes_Mokepon/hermione.png', enemigo.id)
                        }
                        else if (mokeponNombre === 'Voldemort' ){
                            mokeponEnemigo = new Mokepon('Voldemort', './imagenes_Mokepon/volde.png', 5, './imagenes_Mokepon/volde.png', enemigo.id)
                        }
                        else if (mokeponNombre === 'SeverusSnape' ){
                            mokeponEnemigo = new Mokepon('SeverusSnape', './imagenes_Mokepon/SeverusSnape.png', 5, './imagenes_Mokepon/SeverusSnape.png', enemigo.id)
                        }
                        else if (mokeponNombre === 'SiriusBlack' ){
                            mokeponEnemigo = new Mokepon('SiriusBlack', './imagenes_Mokepon/SiriusBlack.png', 5, './imagenes_Mokepon/SiriusBlack.png', enemigo.id)
                        }

                        mokeponEnemigo.x = enemigo.x || 0
                        mokeponEnemigo.y = enemigo.y || 0

                        return mokeponEnemigo // rertornar ese nuevo elemento de la lista
                    })
                   
                })
        }
    })
}
    


   
function moverArriba(){
    
    mascotaJugadorObjeto.velocidady = - 5
    
}
function moverIzquierda(){
    
    mascotaJugadorObjeto.velocidadx = - 5
    
}
function moverDerecha(){
    
    mascotaJugadorObjeto.velocidadx = + 5
    
}

function moverAbajo(){
    
    mascotaJugadorObjeto.velocidady = + 5
    
}
function detenerMovimiento(){
    
    mascotaJugadorObjeto.velocidadx = 0
    mascotaJugadorObjeto.velocidady = 0
}
function sePresionoUnaTecla(event){
    //console.log(event.key) me informa que tecla se oprimio
    switch (event.key) {
        
        case 'ArrowUp':
            moverArriba()
            break
        case 'ArrowDown':
            moverAbajo()
            break;   
        case 'ArrowLeft':
            moverIzquierda()
            break
        case 'ArrowRight':
        moverDerecha()
            break
        default:
            break
    }
}
function iniciarMapa(){
    
    mascotaJugadorObjeto = obtenerObjetoPersonaje(mascotaJugador)
    console.log(mascotaJugadorObjeto, mascotaJugador);
    
    intervalo = setInterval(pintarCanvas, 50) //recibe parametro de la funcion a ejecutar continuamente,2 parametro en minisegundos 
    
    window.addEventListener('keydown', sePresionoUnaTecla)
    window.addEventListener('keyup', detenerMovimiento)
}
function obtenerObjetoPersonaje(){
    for (let i = 0; i < mokepones.length; i++) {
        if(mascotaJugador === mokepones[i].nombre){
            return mokepones[i]
        }
        
    }
}

function comprobarColision(enemigo){
    
    const arribaEnemigo = enemigo.y
    const abajoEnemigo = enemigo.y + enemigo.alto
    const derechaEnemigo = enemigo.x + enemigo.ancho
    const izquierdaEnemigo = enemigo.x
    
    const arribaMascota = mascotaJugadorObjeto.y
    const abajoMascota = mascotaJugadorObjeto.y + mascotaJugadorObjeto.alto
    const derechaMascota = mascotaJugadorObjeto.x + mascotaJugadorObjeto.ancho
    const izquierdaMascota = mascotaJugadorObjeto.x

    if (abajoMascota < arribaEnemigo || 
        arribaMascota > abajoEnemigo ||
        izquierdaMascota > derechaEnemigo ||
        derechaMascota < izquierdaEnemigo 
    ) 
    {
        return
        
    }    
    detenerMovimiento()
    clearInterval(intervalo)
    console.log('se detecto una colision');

    enemigoId = enemigo.id
    sectionSeleccionarAtaque.style.display = 'flex'
    sectionverMapa.style.display= 'none'
    seleccionarMascotaEnemigo(enemigo) 
        
        
}
window.addEventListener('load', iniciarJuego)
