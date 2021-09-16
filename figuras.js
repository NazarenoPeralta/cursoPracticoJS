// CUADRADO
console.group("Cuadrados");

//const ladoCuadrado = 5;

function perimetroCuadrado(lado){ 
    return lado * 4;
}
//console.log("El perimetro es: " + perimetroCuadrado);

function areaCuadrado(lado){ 
    return lado * lado;
}
//console.log("El area es: " + areaCuadrado + "cm^2");

function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputLadoCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value)

    return console.log(perimetro);
}
function calcularAreaCuadrado(){
    const input = document.getElementById("inputLadoCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);

    return console.log(area);
}

console.groupEnd()

// TRIANGULO
console.group("Triangulo");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const alturaTriangulo = 5.5;

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}
// console.log("El perimetro del triangulo es: " + perimetroTriangulo);

function areaTriangulo(base, altura){
    return (base * altura) / 2;
}
// console.log("El area del triangulo es: " + areaTriangulo + "cm^2");


function calcularPerimetroTriangulo(){
    const inputLado1 = Number(document.getElementById("inputLado1Triangulo").value);
    const inputLado2 = Number(document.getElementById("inputLado2Triangulo").value);
    const inputBase = Number(document.getElementById("inputBaseTriangulo").value);
    const inputAltura = Number(document.getElementById("inputAlturaTriangulo").value);
    
    const perimetro = perimetroTriangulo(inputLado1, inputLado2, inputBase);

    return console.log(perimetro);
}
function calcularAreaTriangulo(){
    const inputBase = document.getElementById("inputBaseTriangulo").value;
    const inputAltura = document.getElementById("inputAlturaTriangulo").value;
    const area = areaTriangulo(inputBase, inputAltura);
    
    return console.log(area);
}

console.groupEnd();

// CIRCULO
console.group("Circulo");

// const radioCirculo = 4;
function diametroCirculo(radio){
    return radio * 2;
}

const PI = Math.PI
//console.log("PI es: " + PI);

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
// console.log("El perimetro del circulo es: " + perimetroCirculo);

function areaCirculo(radio){
    return (radio * radio) * PI;
} 
// console.log("El area del circulo es: " + areaCirculo + "cm^2");

function calcularPerimetroCirculo(){
    const input = document.getElementById("inputRadioCirculo");
    const value = input.value;
    const perimetro = perimetroCirculo(value)

    return console.log(perimetro);
}
function calcularAreaCirculo(){
    const input = document.getElementById("inputRadioCirculo");
    const value = input.value;
    const area = areaCuadrado(value);
    
    return console.log(area);
}

console.groupEnd();



