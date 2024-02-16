let priceProductHarina1 = document.getElementById("cart_priceProduct");
let priceProductHarina2 = document.getElementById("car_priceProduct2");
let buttonComparar = document.getElementById("button_comparar");
let mensajeResultado = document.getElementById("mensaje_comparar");

let nameProduct1 = document.getElementById("cart_nameProduct").textContent;
let nameProduct2 = document.getElementById("cart_nameProduct2").textContent;

let nameMarket1 = document.getElementById("cart_nameProveedor").textContent;
let nameMarket2 = document.getElementById("cart_nameProveedor2").textContent;

let imageFigure = document.getElementById("cart_figure");
let imageFigure2 = document.getElementById("cart_figure2");

let buttonReiniciar = document.getElementById("reiniciar_comparados");

// console.log(nameProduct1);
// console.log(nameProduct2);
// console.log(nameMarket1);
// console.log(nameMarket2);

//Farmatodo:
let priceHarina1 = 1.09;

//El plazas
let priceHarina2 = 1.11;

buttonComparar.addEventListener("click", (e) => {
    e.preventDefault();
});
buttonComparar.addEventListener("click", comparar);
buttonReiniciar.addEventListener("click", reiniciar);

function comparar(){
    if(priceHarina1 === priceHarina2){
        mensajeResultado.innerHTML = "El producto  tiene el mismo precio en ambos establecimientos";
    }
    else if(priceHarina1 < priceHarina2){
        mensajeResultado.innerHTML = "La " + nameProduct1 + " es mas barata en " + nameMarket1;
        imageFigure.style.backgroundColor = "#05668d";
    }
    else if (priceHarina1 > priceHarina2){
        mensajeResultado.innerHTML = "La " + nameProduct2 + " es mas barata en " + nameMarket2;
        imageFigure.style.backgroundColor = "#05668d"; 
    }
    else{
        alert("No se pudo comparar los productos, vuelva a intentarlo");
    }
}
function reiniciar(){
    location.reload();
}

