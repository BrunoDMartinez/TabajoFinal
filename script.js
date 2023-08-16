let video = document.querySelector(".video")
const reproducir=()=>{
    video.play()
}
const parar=()=>{
    video.pause()
}
let deposito = document.querySelector("#a");
let imgArrastrada = document.querySelector("#d");

let deposito1 = document.querySelector("#a1");
let imgArrastrada1 = document.querySelector("#d1");

let deposito2 = document.querySelector("#a2");
let imgArrastrada2 = document.querySelector("#d2");

imgArrastrada.addEventListener("dragstart", (event) => {
    event.dataTransfer.setData("Text", "./imagenes/Rompe1.png");
});

deposito.addEventListener("dragover", (event) => {
    event.preventDefault();
});

deposito.addEventListener("drop", (event) => {
    event.preventDefault();
    let imgGuardada = event.dataTransfer.getData("Text");
    deposito.innerHTML = `<img src="${imgGuardada}" alt="Imagen soltada">`;
});

imgArrastrada.addEventListener("dragend", () => {
    imgArrastrada.classList.add("desaparece");
});

imgArrastrada1.addEventListener("dragstart", (event) => {
    event.dataTransfer.setData("Text", "./imagenes/Rompe3.png");
});

deposito1.addEventListener("dragover", (event) => {
    event.preventDefault();
});

deposito1.addEventListener("drop", (event) => {
    event.preventDefault();
    let imgGuardada1 = event.dataTransfer.getData("Text");
    deposito1.innerHTML = `<img src="${imgGuardada1}" alt="Imagen soltada">`;
});

imgArrastrada1.addEventListener("dragend", () => {
    imgArrastrada1.classList.add("desaparece"); 
});

imgArrastrada2.addEventListener("dragstart", (event) => {
    event.dataTransfer.setData("Text", "./imagenes/rompe2.png");
});

deposito2.addEventListener("dragover", (event) => {
    event.preventDefault();
});


deposito2.addEventListener("drop", (event) => {
    event.preventDefault();
    let imgGuardada2 = event.dataTransfer.getData("Text");
    deposito2.innerHTML = `<img src="${imgGuardada2}" alt="Imagen soltada">`;
});

imgArrastrada2.addEventListener("dragend", () => {
    imgArrastrada2.classList.add("desaparece");
});

let botonReiniciar = document.getElementById("botonReiniciar");

botonReiniciar.addEventListener("click", () => {
    window.location.reload(); 
});