lenguajesProgramacion=['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];
lenguajesProgramacion.push('Java', 'Ruby','GoLang');


function mostrarLista(lista) {
    for (let i = 0; i < lista.length; i++) {
        console.log(lista[i]);   
    }
}

function mostrarListainv(lista) {
    for (let i = 1; i <= lista.length; i++) {
        console.log(lista[lista.length-i]);   
    }
}

function prmedio(lista) {
    let sum=0;
    let i=0;
    for (i = 0; i < lista.length; i++) {
        sum= sum+lista[i];   
    }
    return sum/i;
}

function maxmin(lista) {
    console.log(Math.max(...lista));
    console.log(Math.min(...lista));
}

mostrarLista(lenguajesProgramacion);

mostrarListainv(lenguajesProgramacion);
let numeros=[2,4,5,6,7,8,9,1];
console.log(prmedio(numeros));

maxmin(numeros);