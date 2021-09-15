// CUADRADO
console.group("Cuadrados");

const ladoCuadrado = 5;

const perimetroCuadrado = ladoCuadrado * 4;

console.log("El perimetro es: " + perimetroCuadrado);

const areaCuadrado = ladoCuadrado * ladoCuadrado;

console.log("El area es: " + areaCuadrado + "cm^2");

console.groupEnd()

// TRIANGULO
console.group("Triangulo");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perimetro del triangulo es: " + perimetroTriangulo);

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2 ;
console.log("El area del triangulo es: " + areaTriangulo + "cm^2");

console.groupEnd();

// CIRCULO
console.group("Circulo");

const radioCirculo = 4;
const diametroCirculo = radioCirculo * 2;

const PI = Math.PI
console.log("PI es: " + PI);

const perimetroCirculo = diametroCirculo * PI;
console.log("El perimetro del circulo es: " + perimetroCirculo);

const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("El area del circulo es: " + areaCirculo + "cm^2");

console.groupEnd();