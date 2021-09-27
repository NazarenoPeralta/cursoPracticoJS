function calcularModa(lista){
    const objetctList = {};
    
    lista.map(

        function(elemento){
            if (objetctList[elemento]){ //Si ya existe el elemento ->
                objetctList[elemento] += 1;
            }else{                      //Sino inicializa valor 1 ->
                objetctList[elemento] = 1;
            }
        }
    );
    

    const arrayList = Object.entries(objetctList).sort(
        function(elementoA, elementoB){
            return elementoA[1] - elementoB[1];
        }
    );
    
    const moda = arrayList[arrayList.length -1];
    
    return moda;
}

