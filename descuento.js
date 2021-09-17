function calcularTotal(precio, descuento){

    const total = ((100 - descuento ) * precio) / 100;

    return total;

}

function buttonCalcular(){
    const precio = document.getElementById("inputPrice").value;
    const descuento = document.getElementById("inputDiscount").value;
    const result = document.getElementById("result");
    
    result.innerText = "El monto total a abonar es: $" + calcularTotal(precio, descuento);
}