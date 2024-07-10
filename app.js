
let numeroSecreto=0;
let numeroIntentos=0;
let listaNumeros=[];
let numerMaximo=5;

function asignarTextoElemeto(elemento,texto){
    let elemtoHtml = document.querySelector(elemento);
    elemtoHtml.innerHTML = texto;
}

function verificarIntento(){
    let numeroDeUsuario= parseInt(document.getElementById('valorUsuario').value);

    //console.log(numeroIntentos);

    if (numeroSecreto===numeroDeUsuario){
        asignarTextoElemeto('p',`Acertaste, el número es ${numeroSecreto} y lo hiciste en ${numeroIntentos} ${(numeroIntentos===1)?'intento':'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else{
        limpiarCaja();
        numeroIntentos++;
        if(numeroDeUsuario>numeroSecreto){
            asignarTextoElemeto('p', 'El numero secreto es menor');
            
        } else{
            asignarTextoElemeto('p','El numero secreto es mayor');
        }
    }

    return;
}

function condicionesIniciales() {
    asignarTextoElemeto('h1','Juego del Numero Secreto');
    asignarTextoElemeto('p',`Ingresa numero del 1 al ${numerMaximo}`);
    document.getElementById('reiniciar').setAttribute('disabled','');
    numeroSecreto=generarNumeroSecreto();
    numeroIntentos=1;
}

function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
    
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value='';
    //let valorCaja= document.querySelector('#valorUsuario');
    //valorCaja.value='';
}

function generarNumeroSecreto() {
    //return 3;
    let numeroGenerado=Math.floor(Math.random()*numerMaximo)+1;
    
    //ya sorteamos todos los numeros
    if (numerMaximo==listaNumeros.length) {
        asignarTextoElemeto('p', 'Ya se sorteron todos los elementos');
    } else{
        console.log(numeroGenerado);
        console.log(listaNumeros);
        
    //si numero generado esta en lista
        if (listaNumeros.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else{
            listaNumeros.push(numeroGenerado);
            return numeroGenerado;
        }
        
    }     
}

condicionesIniciales();