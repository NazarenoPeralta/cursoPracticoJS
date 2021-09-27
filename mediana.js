function calcularPromedio (lista){

    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );
    
    const promdeioLista = sumaLista / lista.length;
    return promdeioLista;

}



function esPar(numero){
    if(numero % 2 === 0){
        return true;
    }else{
        return false
    }
}

let mediana;
let listaFinal;

function calcularMediana(lista){
    let mitadLista = parseInt(lista.length / 2)
    listaFinal = lista.sort((a, b) => a - b);

    if(esPar(listaFinal.length)){
        const elemento1 = listaFinal[mitadLista - 1];
        const elemento2 = listaFinal[mitadLista];

        mediana = calcularPromedio([elemento1, elemento2]);
        
    }else{
        mediana = listaFinal[mitadLista];
        
    }
    return mediana;
}
