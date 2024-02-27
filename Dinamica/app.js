let botonElemento=document.getElementById("boton-cambiar-cita");
let citaElemento=document.getElementById("cita");
let autorElemento=document.getElementById("autor");

function generarEnteroAleatorio(min,max) {
    // Sin incluir max en los valore posibles.
    return Math.floor(Math.random()*(max-min)+min);
}
function cambiarCita() {
    let indiceAleatorio=generarEnteroAleatorio(0,citas.length);
    citaElemento.textContent=`"${citas[indiceAleatorio].texto}"`;
    autorElemento.textContent=citas[indiceAleatorio].autor;
}

cambiarCita();

botonElemento.addEventListener("click",cambiarCita);