const coupons = [
    {
        name: "1",
        descuento: 10
    },
    {
        name: "ya no tienes que venir por mi",
        descuento: 15
    },
    {
        name: "si me cambias por esa loba",
        descuento: 20
    }
];


const couponValidation = cupon => {
    return cupon.name === inputCoupon.value;
}

function buttonCalcular(precio, cupon){
    let total = precio;
    const userCoupon = coupons.find(couponValidation);

    if(!userCoupon){
        alert("El cupon no corresponde")
    }else {

        const userDiscount = userCoupon.descuento;
        total = ((100 - userDiscount ) * precio) / 100;
        
    }
    return total;
}

function buttonClick(){
    const price = document.getElementById("inputPrice").value;
    const inputCoupon = document.getElementById("inputCoupon").value;
    
    
    result.innerText = "El monto total a abonar es: $" + buttonCalcular(price, inputCoupon);
}

const result = document.getElementById("result");



