/* ❄️ NIEVE INICIO */
tsParticles.load("tsparticles", {
  particles: {
    number: { value: 60 },
    color: { value: "#ffffff" },
    shape: { type: "circle" },
    opacity: { value: 0.8 },
    size: { value: 3 },
    move: {
      speed: 1,
      direction: "bottom",
      outModes: { default: "out" }
    }
  },
  background: {
    color: "transparent"
  }
});


/* 📖 HISTORIA INTERACTIVA */
window.addEventListener("scroll", () => {

let scroll = window.scrollY;

/* ❄️ GLACIAR */
let fondo = document.getElementById("fondo");
if(fondo && scroll > 400){
  fondo.src = "img/glaciar2.png";
}

/* 🦌 SHOAN */
let shoan = document.getElementById("shoan");
if(shoan && scroll > 200){
  shoan.classList.add("show");
}

/* 🧠 SHOAN 2 */
let shoan2 = document.getElementById("shoan2");
if(shoan2 && scroll > 400){
  shoan2.classList.add("show");
}

/* 💬 GLOBOS PROGRESIVOS */
let globos = document.querySelectorAll(".globo");

if(scroll > 100 && globos[0]) globos[0].classList.add("show");
if(scroll > 500 && globos[1]) globos[1].classList.add("show");
if(scroll > 900 && globos[2]) globos[2].classList.add("show");
if(scroll > 1100 && globos[3]) globos[3].classList.add("show");
if(scroll > 1300 && globos[4]) globos[4].classList.add("show");

});
const ctx = document.getElementById('grafico');

new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['1990', '2000', '2010', '2020', '2025'],

    datasets: [

      {
        label: 'Glaciar Grey',
        data: [0, 0.5, 2, 5, 7.5],
        borderColor: '#0077b6',
        tension: 0.4,
        fill: false
      },

      {
        label: 'Glaciar San Rafael',
        data: [0, 0.3, 1.2, 3.5, 5.8],
        borderColor: '#00b4d8',
        tension: 0.4,
        fill: false
      },

      {
        label: 'Glaciar San Quintín',
        data: [0, 1.5, 4, 8, 10],
        borderColor: '#90e0ef',
        tension: 0.4,
        fill: false
      }

    ]
  },

  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Retroceso de glaciares en la Patagonia chilena'
      },
      legend: {
        position: 'top'
      }
    }
  }
});
