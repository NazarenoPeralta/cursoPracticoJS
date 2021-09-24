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


function calcularMediana(lista){
    let mitadLista = parseInt(lista.length / 2)
    
    if(esPar(lista.length)){
        //FALTA COMPLETAR
    }else{
        //FALTA COMPLETAR
    }

}