const navbar=document.querySelector("#navbar");
const navToggle=document.querySelector(".nav-toggle");
const navLinks=document.querySelector(".nav-links");

window.addEventListener("scroll",()=>navbar.classList.toggle("scrolled",window.scrollY>40));
navToggle?.addEventListener("click",()=>navLinks.classList.toggle("open"));
navLinks?.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>navLinks.classList.remove("open")));

const fadeObserver=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting) entry.target.classList.add("is-visible");
  });
},{threshold:.16});
document.querySelectorAll(".fade-in-section").forEach(section=>fadeObserver.observe(section));

const statObserver=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(!entry.isIntersecting||entry.target.dataset.counted)return;
    entry.target.dataset.counted="true";
    animateNumber(entry.target);
  });
},{threshold:.4});
document.querySelectorAll(".stat-number").forEach(number=>statObserver.observe(number));

function animateNumber(element){
  const target=Number(element.dataset.target||0);
  const duration=1300;
  const start=performance.now();
  function frame(now){
    const progress=Math.min((now-start)/duration,1);
    const eased=1-Math.pow(1-progress,3);
    element.textContent=Math.round(target*eased).toLocaleString("es-CL");
    if(progress<1)requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}

const snowCanvas=document.querySelector("#snow-canvas");
const snowCtx=snowCanvas?.getContext("2d");
let flakes=[];

function resizeSnow(){
  if(!snowCanvas||!snowCtx)return;
  const rect=snowCanvas.getBoundingClientRect();
  const dpr=window.devicePixelRatio||1;
  snowCanvas.width=rect.width*dpr;
  snowCanvas.height=rect.height*dpr;
  snowCtx.setTransform(dpr,0,0,dpr,0,0);
  const count=Math.floor(rect.width/9);
  flakes=Array.from({length:count},()=>createFlake(rect.width,rect.height));
}

function createFlake(width,height){
  return {
    x:Math.random()*width,
    y:Math.random()*height,
    radius:Math.random()*2.2+.8,
    speed:Math.random()*.8+.25,
    drift:Math.random()*.6-.3,
    opacity:Math.random()*.55+.25
  };
}

function drawSnow(){
  if(!snowCanvas||!snowCtx)return;
  const rect=snowCanvas.getBoundingClientRect();
  snowCtx.clearRect(0,0,rect.width,rect.height);
  flakes.forEach(flake=>{
    snowCtx.beginPath();
    snowCtx.arc(flake.x,flake.y,flake.radius,0,Math.PI*2);
    snowCtx.fillStyle=`rgba(240,248,255,${flake.opacity})`;
    snowCtx.fill();
    flake.y+=flake.speed;
    flake.x+=flake.drift+Math.sin(flake.y*.015)*.15;
    if(flake.y>rect.height+8){flake.y=-8;flake.x=Math.random()*rect.width}
    if(flake.x<-8)flake.x=rect.width+8;
    if(flake.x>rect.width+8)flake.x=-8;
  });
  requestAnimationFrame(drawSnow);
}
resizeSnow();
drawSnow();
window.addEventListener("resize",resizeSnow);

const chartCanvas=document.querySelector("#glacier-chart");
const chartCtx=chartCanvas?.getContext("2d");

const chartData=[
  {region:"Arica",rocoso:78,efluente:0,montana:14,glaciarete:8},
  {region:"Coquimbo",rocoso:62,efluente:0,montana:28,glaciarete:10},
  {region:"RM",rocoso:34,efluente:0,montana:48,glaciarete:18},
  {region:"Aysén",rocoso:8,efluente:58,montana:24,glaciarete:10},
  {region:"Magallanes",rocoso:4,efluente:68,montana:20,glaciarete:8}
];

const chartColors={rocoso:"#5B8C5A",efluente:"#7ec8e3",montana:"#f0f8ff",glaciarete:"#E8B84B"};

function drawChart(){
  if(!chartCanvas||!chartCtx)return;
  const width=chartCanvas.width,height=chartCanvas.height;
  chartCtx.clearRect(0,0,width,height);
  chartCtx.fillStyle="#f0f8ff";
  chartCtx.fillRect(0,0,width,height);

  const padding={top:34,right:28,bottom:72,left:62};
  const chartWidth=width-padding.left-padding.right;
  const chartHeight=height-padding.top-padding.bottom;
  const barGap=28;
  const barWidth=(chartWidth-barGap*(chartData.length-1))/chartData.length;

  chartCtx.strokeStyle="rgba(23,48,69,.18)";
  chartCtx.lineWidth=1;
  chartCtx.fillStyle="#173045";
  chartCtx.font="600 12px Inter, sans-serif";
  chartCtx.textAlign="right";

  for(let tick=0;tick<=100;tick+=25){
    const y=padding.top+chartHeight-(tick/100)*chartHeight;
    chartCtx.beginPath();
    chartCtx.moveTo(padding.left,y);
    chartCtx.lineTo(width-padding.right,y);
    chartCtx.stroke();
    chartCtx.fillText(`${tick}%`,padding.left-10,y+4);
  }

  chartData.forEach((item,index)=>{
    const x=padding.left+index*(barWidth+barGap);
    let y=padding.top+chartHeight;
    ["rocoso","efluente","montana","glaciarete"].forEach(key=>{
      const valueHeight=(item[key]/100)*chartHeight;
      y-=valueHeight;
      chartCtx.fillStyle=chartColors[key];
      chartCtx.fillRect(x,y,barWidth,valueHeight);
      chartCtx.strokeStyle="rgba(23,48,69,.24)";
      chartCtx.strokeRect(x,y,barWidth,valueHeight);
    });

    chartCtx.save();
    chartCtx.translate(x+barWidth/2,height-padding.bottom+42);
    chartCtx.rotate(-Math.PI/5);
    chartCtx.fillStyle="#173045";
    chartCtx.font="700 13px Inter, sans-serif";
    chartCtx.textAlign="right";
    chartCtx.fillText(item.region,0,0);
    chartCtx.restore();
  });

  chartCtx.fillStyle="#173045";
  chartCtx.font="700 15px Inter, sans-serif";
  chartCtx.textAlign="left";
  chartCtx.fillText("Composición proporcional de tipos de glaciares por región",padding.left,22);
}
drawChart();
window.addEventListener("resize",drawChart);

const glacierData={
  tapado:{
    name:"Glaciar El Tapado",
    location:"Coquimbo",
    area:"5.550 msnm",
    retreat:"Más de un tercio de su superficie",
    period:"Desde 1955",
    image:"img/tapado.png",
    desc:"El glaciar más estudiado del norte chico y una de las principales reservas hídricas de la cuenca del Elqui."
  },
  olivares:{
    name:"Glaciar Olivares",
    location:"Región Metropolitana",
    area:"Cuenca del río Olivares",
    retreat:"Retroceso acelerado",
    period:"Desde los años 2000",
    image:"img/olivares.png",
    desc:"Complejo de glaciares afluente del Mapocho. Sus aguas son esenciales para el abastecimiento de Santiago."
  },
  exploradores:{
    name:"Glaciar Exploradores",
    location:"Aysén",
    area:"Campo de Hielo Norte",
    retreat:"Indicador clave del campo de hielo",
    period:"Registro reciente",
    image:"img/exploradores.png",
    desc:"Lengua glaciar que desciende hacia el fiordo homónimo. Es uno de los glaciares más accesibles de la Patagonia."
  },
  ohiggins:{
    name:"Glaciar O'Higgins",
    location:"Aysén",
    area:"Campos de Hielo Sur",
    retreat:"Más de 14 km",
    period:"Desde principios del siglo XX",
    image:"img/ohiggins.png",
    desc:"El mayor glaciar de los Campos de Hielo Sur en territorio chileno. Su retroceso dejó atrás un lago glaciar de aguas azul turquesa."
  },
  sanrafael:{
    name:"Glaciar San Rafael",
    location:"Aysén",
    area:"Llega al nivel del mar",
    retreat:"Produce icebergs en retroceso",
    period:"Últimas décadas",
    image:"img/sanrafael.png",
    desc:"Una lengua de hielo que llega hasta el nivel del mar y produce icebergs. Es una de las maravillas naturales de Chile."
  },
  tyndall:{
    name:"Glaciar Tyndall",
    location:"Magallanes",
    area:"Campo de Hielo Sur",
    retreat:"Creó el lago Geike",
    period:"Últimas décadas",
    image:"img/tyndall.png",
    desc:"Parte del Parque Nacional Torres del Paine. Es uno de los glaciares más visitados de la Patagonia y uno de los que más rápido retrocede."
  },
  grey:{
    name:"Glaciar Grey",
    location:"Magallanes",
    area:"Lago Grey",
    retreat:"Más de 4 km² de superficie",
    period:"Últimas décadas",
    image:"img/grey.png",
    desc:"Imponente glaciar del Campo de Hielo Sur, accesible desde Torres del Paine. Sus icebergs flotan en el lago Grey."
  }
};

const panel=document.querySelector("#glacier-panel");
const emptyPanel=document.querySelector("#glacier-panel-empty");
const panelClose=document.querySelector("#panel-close");
const panelImg=document.querySelector("#panel-img");
const panelName=document.querySelector("#panel-name");
const panelLocation=document.querySelector("#panel-location");
const panelArea=document.querySelector("#panel-area");
const panelRetreat=document.querySelector("#panel-retreat");
const panelPeriod=document.querySelector("#panel-period");
const panelDesc=document.querySelector("#panel-desc");

document.querySelectorAll(".glacier-dot").forEach(dot=>{
  dot.addEventListener("click",()=>{
    document.querySelectorAll(".glacier-dot").forEach(item=>item.classList.remove("active"));
    dot.classList.add("active");
    showGlacier(dot.dataset.glacier);
  });
});

panelClose?.addEventListener("click",()=>{
  panel.classList.remove("visible");
  emptyPanel.style.display="grid";
  document.querySelectorAll(".glacier-dot").forEach(item=>item.classList.remove("active"));
});

function showGlacier(key){
  const data=glacierData[key];
  if(!data)return;

  panelImg.innerHTML=`<img src="${data.image}" alt="${data.name}" class="panel-photo">`;

  panelName.textContent=data.name;
  panelLocation.textContent=data.location;
  panelArea.textContent=data.area;
  panelRetreat.textContent=data.retreat;
  panelPeriod.textContent=data.period;
  panelDesc.textContent=data.desc;

  emptyPanel.style.display="none";
  panel.classList.add("visible");
}
