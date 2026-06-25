window.addEventListener("scroll", () => {

let scroll = window.scrollY;

let fondo = document.getElementById("fondo");
let shoan2 = document.getElementById("shoan2");

// ❄️ cambio glaciar
if(scroll > 400){
  fondo.src = "img/glaciar2.png";
}

// 🦌 cambio de emoción automático (opcional extra)
if(shoan2){
  if(scroll < 500){
    shoan2.src = "img/shoan-preocupado.png";
  } else {
    shoan2.src = "img/shoan-triste.png";
  }
}

});
