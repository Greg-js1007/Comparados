
let buscarForm = document.getElementById("buscador_form");
let buttonBuscar = document.getElementById("buscador_submit");
let buscarInput = document.getElementById("buscar_input");
let resultsDiv = document.getElementById("results")

buttonBuscar.addEventListener("click", buscador)

function buscador(){
    const infoInput = buscarInput.value;
    console.log(infoInput);

    buscarForm.addEventListener("submit", (event) =>{
        event.preventDefault();
    });
    let filer = buscarInput.value.toUpprCase();
    let li = results.getElementsByTagName("li");

    //Recorriendo elementos 
    for (let i = 0; i < li.length; i++);{
    }
}