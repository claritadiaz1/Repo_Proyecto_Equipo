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
// NUEVO: aparición Shoan
window.addEventListener("scroll", () => {

let shoan = document.querySelector(".personaje img");

if(window.scrollY > 200){
  shoan.classList.add("show");
}

});

// NUEVO: globos aparecen por scroll
window.addEventListener("scroll", () => {

let scroll = window.scrollY;

let globos = document.querySelectorAll(".globo");

if(scroll > 100){
  globos[0]?.classList.add("show");
}

if(scroll > 500){
  globos[1]?.classList.add("show");
}

if(scroll > 900){
  globos[2]?.classList.add("show");
}

});

// NUEVO: cambio de glaciar
window.addEventListener("scroll", () => {

let fondo = document.getElementById("fondo");

if(window.scrollY > 400){
  fondo.src = "img/glaciar2.png";
}

});
