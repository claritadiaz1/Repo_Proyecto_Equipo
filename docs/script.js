/* =========================================
   VOCES DEL HIELO — script.js
   ========================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* ── 1. NAVBAR scroll ── */
  const navbar = document.getElementById('navbar');
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  });
  navToggle?.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
  navLinks?.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => navLinks.classList.remove('open'));
  });

  /* ── 2. NIEVE ── */
  const canvas = document.getElementById('snow-canvas');
  const ctx = canvas.getContext('2d');
  let snowflakes = [];

  function resizeCanvas() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  function createSnowflake() {
    return {
      x: Math.random() * canvas.width,
      y: Math.random() * -50,
      r: Math.random() * 3 + 1,
      speed: Math.random() * 1.2 + 0.4,
      drift: (Math.random() - 0.5) * 0.5,
      opacity: Math.random() * 0.6 + 0.2,
    };
  }

  for (let i = 0; i < 120; i++) {
    const sf = createSnowflake();
    sf.y = Math.random() * canvas.height; // start spread
    snowflakes.push(sf);
  }

  function animateSnow() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    snowflakes.forEach((sf, i) => {
      ctx.beginPath();
      ctx.arc(sf.x, sf.y, sf.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(232,244,253,${sf.opacity})`;
      ctx.fill();

      sf.y += sf.speed;
      sf.x += sf.drift;

      if (sf.y > canvas.height + 10) {
        snowflakes[i] = createSnowflake();
      }
    });
    requestAnimationFrame(animateSnow);
  }
  animateSnow();

  /* ── 3. FADE-IN SECTIONS con IntersectionObserver ── */
  const fadeSections = document.querySelectorAll('.fade-in-section');
  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        fadeObserver.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });
  fadeSections.forEach(s => fadeObserver.observe(s));

  /* ── 4. CONTADORES ANIMADOS ── */
  const statCards = document.querySelectorAll('.stat-card');
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const card = e.target;
        const delay = parseInt(card.dataset.delay) || 0;
        setTimeout(() => {
          card.classList.add('visible');
          const el = card.querySelector('.stat-number');
          const target = parseInt(el.dataset.target);
          animateCounter(el, target);
        }, delay);
        counterObserver.unobserve(card);
      }
    });
  }, { threshold: 0.2 });
  statCards.forEach(c => counterObserver.observe(c));

  function animateCounter(el, target) {
    const duration = 1800;
    const start = performance.now();
    function tick(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      el.textContent = Math.round(eased * target);
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  /* ── 5. GRÁFICO DE GLACIARES (Canvas puro) ── */
  // Datos reales aproximados de retroceso (km²) de los glaciares más importantes de Chile
  // Fuente: DGA Chile, CECS, Inventario de Glaciares 2022
  const chartData = {
    labels: [1975, 1985, 1995, 2005, 2015, 2023],
    datasets: [
      {
        label: 'Glaciar Grey',
        color: '#1a6ea8',        // azul oscuro
        values: [100, 97, 93, 88, 82, 76],
      },
      {
        label: 'Glaciar Tyndall',
        color: '#00c9b1',        // calipso fuerte
        values: [100, 96, 90, 83, 74, 66],
      },
      {
        label: 'Glaciar San Rafael',
        color: '#f0f8ff',        // blanco hielo
        values: [100, 98, 95, 91, 87, 83],
      },
      {
        label: "Glaciar O'Higgins",
        color: '#7ec8e3',        // celeste claro
        values: [100, 97, 92, 86, 79, 72],
      },
    ],
  };

  const glChart = document.getElementById('glacier-chart');
  if (glChart) {
    drawGlacierChart(glChart, chartData);
  }

  function drawGlacierChart(canvas, data) {
    const ctx = canvas.getContext('2d');
    const W = canvas.width;
    const H = canvas.height;
    const PAD = { top: 30, right: 30, bottom: 50, left: 55 };
    const chartW = W - PAD.left - PAD.right;
    const chartH = H - PAD.top - PAD.bottom;

    const years = data.labels;
    const minY = 60, maxY = 105;

    // Helpers
    const xScale = i => PAD.left + (i / (years.length - 1)) * chartW;
    const yScale = v => PAD.top + chartH - ((v - minY) / (maxY - minY)) * chartH;

    // Draw
    function render() {
      ctx.clearRect(0, 0, W, H);

      // Background grid
      ctx.strokeStyle = 'rgba(79,195,215,0.08)';
      ctx.lineWidth = 1;
      for (let v = minY; v <= maxY; v += 10) {
        const y = yScale(v);
        ctx.beginPath();
        ctx.moveTo(PAD.left, y);
        ctx.lineTo(W - PAD.right, y);
        ctx.stroke();

        // Y labels
        ctx.fillStyle = 'rgba(140,165,184,0.8)';
        ctx.font = '11px Inter, sans-serif';
        ctx.textAlign = 'right';
        ctx.fillText(v + '%', PAD.left - 8, y + 4);
      }

      // X labels
      ctx.fillStyle = 'rgba(140,165,184,0.8)';
      ctx.font = '11px Inter, sans-serif';
      ctx.textAlign = 'center';
      years.forEach((yr, i) => {
        ctx.fillText(yr, xScale(i), H - PAD.bottom + 20);
      });

      // Axes
      ctx.strokeStyle = 'rgba(79,195,215,0.25)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(PAD.left, PAD.top);
      ctx.lineTo(PAD.left, PAD.top + chartH);
      ctx.lineTo(W - PAD.right, PAD.top + chartH);
      ctx.stroke();

      // Area + lines
      data.datasets.forEach((ds) => {
        const pts = ds.values.map((v, i) => ({ x: xScale(i), y: yScale(v) }));

        // Area fill
        ctx.beginPath();
        ctx.moveTo(pts[0].x, yScale(minY));
        pts.forEach(p => ctx.lineTo(p.x, p.y));
        ctx.lineTo(pts[pts.length - 1].x, yScale(minY));
        ctx.closePath();
        const grad = ctx.createLinearGradient(0, PAD.top, 0, PAD.top + chartH);
        grad.addColorStop(0, ds.color + '33');
        grad.addColorStop(1, ds.color + '05');
        ctx.fillStyle = grad;
        ctx.fill();

        // Line
        ctx.beginPath();
        pts.forEach((p, i) => i === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y));
        ctx.strokeStyle = ds.color;
        ctx.lineWidth = 2.5;
        ctx.lineJoin = 'round';
        ctx.stroke();

        // Dots
        pts.forEach(p => {
          ctx.beginPath();
          ctx.arc(p.x, p.y, 4, 0, Math.PI * 2);
          ctx.fillStyle = ds.color;
          ctx.fill();
          ctx.strokeStyle = '#0a1628';
          ctx.lineWidth = 1.5;
          ctx.stroke();
        });
      });

      // Y-axis label
      ctx.save();
      ctx.translate(14, PAD.top + chartH / 2);
      ctx.rotate(-Math.PI / 2);
      ctx.fillStyle = 'rgba(140,165,184,0.6)';
      ctx.font = '11px Inter, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('Superficie relativa (%)', 0, 0);
      ctx.restore();
    }

    // Animate lines appearing
    let progress = 0;
    const totalFrames = 80;

    function renderAnimated() {
      ctx.clearRect(0, 0, W, H);

      // Grid y ejes (igual que antes)
      ctx.strokeStyle = 'rgba(79,195,215,0.08)';
      ctx.lineWidth = 1;
      for (let v = minY; v <= maxY; v += 10) {
        const y = yScale(v);
        ctx.beginPath();
        ctx.moveTo(PAD.left, y);
        ctx.lineTo(W - PAD.right, y);
        ctx.stroke();
        ctx.fillStyle = 'rgba(140,165,184,0.8)';
        ctx.font = '11px Inter, sans-serif';
        ctx.textAlign = 'right';
        ctx.fillText(v + '%', PAD.left - 8, y + 4);
      }
      ctx.fillStyle = 'rgba(140,165,184,0.8)';
      ctx.font = '11px Inter, sans-serif';
      ctx.textAlign = 'center';
      years.forEach((yr, i) => ctx.fillText(yr, xScale(i), H - PAD.bottom + 20));

      ctx.strokeStyle = 'rgba(79,195,215,0.25)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(PAD.left, PAD.top);
      ctx.lineTo(PAD.left, PAD.top + chartH);
      ctx.lineTo(W - PAD.right, PAD.top + chartH);
      ctx.stroke();

      ctx.save();
      ctx.translate(14, PAD.top + chartH / 2);
      ctx.rotate(-Math.PI / 2);
      ctx.fillStyle = 'rgba(140,165,184,0.6)';
      ctx.font = '11px Inter, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('Superficie relativa (%)', 0, 0);
      ctx.restore();

      // Lines animadas
      const pct = Math.min(progress / totalFrames, 1);
      const eased = 1 - Math.pow(1 - pct, 2);
      const maxIndex = eased * (years.length - 1);

      data.datasets.forEach((ds) => {
        const pts = ds.values.map((v, i) => ({ x: xScale(i), y: yScale(v) }));
        const visiblePts = [];
        for (let i = 0; i <= maxIndex && i < pts.length; i++) {
          if (i < Math.floor(maxIndex)) {
            visiblePts.push(pts[i]);
          } else {
            // Interpolate last point
            const prev = pts[Math.floor(maxIndex - 1)] || pts[0];
            const next = pts[Math.min(Math.ceil(maxIndex), pts.length - 1)];
            const t = maxIndex - Math.floor(maxIndex);
            visiblePts.push({
              x: prev.x + (next.x - prev.x) * t,
              y: prev.y + (next.y - prev.y) * t,
            });
          }
        }
        if (visiblePts.length < 2) return;

        // Area
        ctx.beginPath();
        ctx.moveTo(visiblePts[0].x, yScale(minY));
        visiblePts.forEach(p => ctx.lineTo(p.x, p.y));
        ctx.lineTo(visiblePts[visiblePts.length - 1].x, yScale(minY));
        ctx.closePath();
        const grad = ctx.createLinearGradient(0, PAD.top, 0, PAD.top + chartH);
        grad.addColorStop(0, ds.color + '33');
        grad.addColorStop(1, ds.color + '05');
        ctx.fillStyle = grad;
        ctx.fill();

        // Line
        ctx.beginPath();
        visiblePts.forEach((p, i) => i === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y));
        ctx.strokeStyle = ds.color;
        ctx.lineWidth = 2.5;
        ctx.lineJoin = 'round';
        ctx.stroke();

        // Dots (solo los completados)
        pts.slice(0, Math.floor(maxIndex) + 1).forEach(p => {
          ctx.beginPath();
          ctx.arc(p.x, p.y, 4, 0, Math.PI * 2);
          ctx.fillStyle = ds.color;
          ctx.fill();
          ctx.strokeStyle = '#0a1628';
          ctx.lineWidth = 1.5;
          ctx.stroke();
        });
      });

      if (progress < totalFrames) {
        progress++;
        requestAnimationFrame(renderAnimated);
      } else {
        render(); // final clean render
      }
    }

    // Solo animar cuando sea visible
    const chartObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        renderAnimated();
        chartObserver.disconnect();
      }
    }, { threshold: 0.3 });
    chartObserver.observe(canvas);
  }

  /* ── 6. MAPA INTERACTIVO DE GLACIARES ── */
  const glacierData = {
    grey: {
      name: 'Glaciar Grey',
      location: 'Torres del Paine, Magallanes',
      area: '270 km²',
      retreat: '~4,5 km (1975–2023)',
      period: '1975 – 2023',
      desc: 'Uno de los glaciares más visitados de la Patagonia chilena. Ha retrocedido significativamente desde los años 70, perdiendo varias lenguas glaciares secundarias. Alimenta el Lago Grey y es parte del Campo de Hielo Sur.',
      emoji: '🧊',
    },
    tyndall: {
      name: 'Glaciar Tyndall',
      location: 'Torres del Paine, Magallanes',
      area: '331 km²',
      retreat: '~6,4 km (1945–2023)',
      period: '1945 – 2023',
      desc: 'El Tyndall es uno de los que más retroceso ha registrado en el Campo de Hielo Sur. Su frente ha retrocedido más de 6 km y ha generado un nuevo lago proglacial. Es uno de los casos más documentados de deshielo acelerado en Chile.',
      emoji: '🌊',
    },
    ohiggins: {
      name: "Glaciar O'Higgins",
      location: 'Aysén, Campo de Hielo Sur',
      area: '815 km²',
      retreat: '~15 km (1896–2023)',
      period: '1896 – 2023',
      desc: "El O'Higgins es el mayor glaciar de América del Sur después de la Patagonia argentina. Ha registrado un retroceso de más de 15 km desde finales del siglo XIX. Hoy el acceso al frente del glaciar es posible por lago.",
      emoji: '⛰️',
    },
    sanrafael: {
      name: 'Glaciar San Rafael',
      location: 'Aysén, Campo de Hielo Norte',
      area: '760 km²',
      retreat: '~10 km (1870–2023)',
      period: '1870 – 2023',
      desc: 'El glaciar San Rafael es el único glaciar tropical/subtropical que llega al mar en el hemisferio sur. Ha retrocedido drásticamente desde el siglo XIX. Su frente produce grandes cantidades de témpanos que flotan en la Laguna San Rafael.',
      emoji: '🌊',
    },
    exploradores: {
      name: 'Glaciar Exploradores',
      location: 'Aysén, Campo de Hielo Norte',
      area: '~83 km²',
      retreat: '~2 km (1979–2023)',
      period: '1979 – 2023',
      desc: 'Ubicado en la Carretera Austral, el Exploradores ha retrocedido de forma constante. Es uno de los glaciares más accesibles del Campo de Hielo Norte y muy visitado por turistas. Su retroceso expone suelo virgen que es colonizado por nueva vegetación.',
      emoji: '🌿',
    },
    tapado: {
      name: 'Glaciar El Tapado',
      location: 'Coquimbo, Andes semiáridos',
      area: '~1,8 km²',
      retreat: '~30% de superficie (1955–2020)',
      period: '1955 – 2020',
      desc: 'Glaciar ubicado en la Región de Coquimbo, en los Andes semiáridos. Es uno de los glaciares de roca más estudiados de Chile. Fundamental para el abastecimiento hídrico de la zona norte del país, donde la sequía es crónica.',
      emoji: '☀️',
    },
    olivares: {
      name: 'Glaciar Olivares',
      location: 'Región Metropolitana, Andes',
      area: '~4 km²',
      retreat: '~40% de masa (1955–2022)',
      period: '1955 – 2022',
      desc: 'El complejo Olivares, ubicado en la cordillera de Santiago, incluye glaciares descubiertos y de roca. Es fuente importante del río Olivares y afluente del Maipo. Ha perdido cerca del 40% de su masa en las últimas décadas por el calentamiento global y la megasequía.',
      emoji: '🏔️',
    },
  };

  const dots = document.querySelectorAll('.glacier-dot');
  const panel = document.getElementById('glacier-panel');
  const panelEmpty = document.getElementById('glacier-panel-empty');
  const panelClose = document.getElementById('panel-close');

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const key = dot.dataset.glacier;
      const info = glacierData[key];
      if (!info) return;

      document.getElementById('panel-name').textContent     = info.name;
      document.getElementById('panel-location').textContent = info.location;
      document.getElementById('panel-area').textContent     = info.area;
      document.getElementById('panel-retreat').textContent  = info.retreat;
      document.getElementById('panel-period').textContent   = info.period;
      document.getElementById('panel-desc').textContent     = info.desc;
      document.getElementById('panel-img').textContent      = info.emoji;

      dots.forEach(d => d.classList.remove('active'));
      dot.classList.add('active');

      // Ocultar estado vacío, mostrar panel con datos
      if (panelEmpty) panelEmpty.style.display = 'none';
      panel.classList.remove('open');
      requestAnimationFrame(() => panel.classList.add('open'));
    });
  });

  panelClose?.addEventListener('click', () => {
    panel.classList.remove('open');
    if (panelEmpty) panelEmpty.style.display = '';
    dots.forEach(d => d.classList.remove('active'));
  });

  /* ── 7. PARALLAX suave en hero ── */
  const heroBg = document.getElementById('glacier-bg');
  const heroContent = document.getElementById('hero-content');
  const shoanS1 = document.getElementById('shoan-s1');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const viewH = window.innerHeight;

    // Solo en la primera pantalla
    if (scrollY < viewH * 1.5) {
      if (heroBg) heroBg.style.transform = `translateY(${scrollY * 0.3}px)`;
      if (heroContent) heroContent.style.transform = `translateY(${scrollY * 0.15}px)`;
      if (shoanS1) shoanS1.style.transform = `translateY(${-scrollY * 0.1}px)`;
    }
  }, { passive: true });

  /* ── 8. Nav links active section highlight ── */
  const sections = document.querySelectorAll('section[id], footer[id]');
  const navItems = document.querySelectorAll('.nav-links a');

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        navItems.forEach(a => a.style.color = '');
        const activeA = document.querySelector(`.nav-links a[href="#${e.target.id}"]`);
        if (activeA) activeA.style.color = 'var(--c-teal)';
      }
    });
  }, { rootMargin: '-40% 0px -40% 0px' });

  sections.forEach(s => sectionObserver.observe(s));

});
