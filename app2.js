function saludo() {
    console.log('Hola Mundo');
    return;
}

function nombre(name) {
    console.log(name);
    return;
}

function doble(num) {
    return num*2;
}

function promedio(num1,num2,num3){
    return (num1+num2+num3)/3;
}

function mayor(num1,num2) {
    return Math.max(num1,num2);
}

function cuadrado(num1){
    return num1*=num1
}

saludo();
nombre('Pedro');
doble(3);
console.log(promedio(200,4,5));
console.log(mayor(4,277));
console.log(cuadrado(6));
