App.prototype.processingButton2 = function(event){
    const btn = event.currentTarget;
    const carruselList = event.currentTarget.parentNode;
    const track2 = event.currentTarget.parentNode.querySelector('#track2');
    const carrusel2 = track2.querySelectorAll('.carrusel2');

    const carruselWidth2 = carrusel2[0].offsetWidth;
    const trackWidth2 = track2.offsetWidth;
    const listWidth2 = carruselList.offsetWidth;

    track2.style.left === "" ? leftPosition2 = track2.style.left = 0 : leftPosition2 = parseFloat(track2.style.left.slice(0,-2) * -1);
    btn.dataset.button === "button-prev" ? prevAction(leftPosition2, carruselWidth2, track2) : nextAction(leftPosition2, trackWidth2, listWidth2, carruselWidth2, track2);
}


let prevAction2 = (leftPosition2, carruselWidth2, track2) =>  {
    if (leftPosition2 > 0){
        track2.style.left = `${-1 * (leftPosition2 - carruselWidth2)}px`;
    }
}

let nextAction2 = (leftPosition2, trackWidth2, listWidth2, carruselWidth2, track2) =>{
    if (leftPosition2 < (trackWidth2 - listWidth2)) {
        track2.style.left = `${-1 * (leftPosition2 + carruselWidth2)}px`;
    }
}


