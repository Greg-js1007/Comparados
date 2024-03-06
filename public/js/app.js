let priceProductHarina1 = document.getElementById("cart_priceProduct").textContent;
let priceProductHarina2 = document.getElementById("cart_priceProduct2").textContent;

let priceHarinaFarmatodo = parseFloat(priceProductHarina1);
let priceHarinaPlaza = parseFloat(priceProductHarina2);

console.log(priceHarinaFarmatodo)

let buttonComparar = document.getElementById("button_comparar");
let mensajeResultado = document.getElementById("mensaje_comparar");

let nameProduct1 = document.getElementById("cart_nameProduct").textContent;
let nameProduct2 = document.getElementById("cart_nameProduct2").textContent;
console.log(nameProduct1)
console.log(nameProduct2)

let nameMarket1 = document.getElementById("cart_nameProveedor").textContent;
let nameMarket2 = document.getElementById("cart_nameProveedor2").textContent;
console.log(nameMarket1)
console.log(nameMarket2)

let imageFigure1 = document.getElementById("image_product1");
let imageFigure2 = document.getElementById("image_product2");

let buttonReiniciar = document.getElementById("reiniciar_comparados");

//Farmatodo:
let priceHarina1 = 1.09;

//El plazas
let priceHarina2 = 1.11;

let ahorro = 0;
let ahorroPor = 0;
//Hace que el cuando le des click al boton no se recargue la pagina 
buttonComparar.addEventListener("click", (e) => {
    e.preventDefault();
});

//Esuchaadores de Eventos, hacen que cuando escuchen un click en la pagina llamen a una funcion 
buttonComparar.addEventListener("click", comparar);
buttonReiniciar.addEventListener("click", reiniciar);

function comparar(){
    if(priceHarinaFarmatodo === priceHarinaPlaza){
        mensajeResultado.innerHTML = "El producto  tiene el mismo precio en ambos establecimientos";
    }
    else if(priceHarinaFarmatodo < priceHarinaPlaza){
        mensajeResultado.innerHTML = "La " + nameProduct1 + " es más barata en " + nameMarket1;
        imageFigure1.style.backgroundColor = "#05668d";
        mensajeResultado.style.fontWeight = "700"
        ahorro = priceHarinaPlaza - priceHarinaFarmatodo;
        ahorroPor = (ahorro / priceHarinaPlaza) * 100;
        ahorroPor = Math.round(ahorroPor);
        alert("Ahorraste "+ahorroPor+"%");
    }
    else if (priceHarinaPlaza < priceHarinaFarmatodo){
        mensajeResultado.innerHTML = "La " + nameProduct2 + " es más barata en " + nameMarket2;
        imageFigure2.style.backgroundColor = "#05668d"; 
        mensajeResultado.style.fontWeight = "700"
        ahorro = priceHarinaFarmatodo - priceHarinaPlaza;
        ahorroPor = (ahorro / priceHarinaFarmatodo) * 100;
        ahorroPor = Math.round(ahorroPor);
        alert("Ahorraste "+ahorroPor+"%");
    }
    else{
        alert("No se pudo comparar los productos, vuelva a intentarlo");
    }
}
function reiniciar(){
    location.reload();
}

