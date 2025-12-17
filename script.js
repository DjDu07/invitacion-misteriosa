const screen = document.getElementById('screen');

const screens = [
  () => `
    <div class="heart">✨</div>
    <h1>Piensa un número</h1>
    <p>Elige un número del <strong>1 al 10</strong>.<br>No lo digas en voz alta… guárdalo solo para ti.</p>
    <div class="numbers">
      ${Array.from({ length: 10 }, (_, i) => `<button onclick="next()">${i + 1}</button>`).join('')}
    </div>
    <div class="hint">Confía en el proceso</div>
  `,
  () => `
    <div class="heart">💫</div>
    <h1>Paso 2</h1>
    <p>Ahora <strong>multiplícalo por 9</strong>.</p>
    <button class="next-btn" onclick="next()">Listo</button>
  `,
  () => `
    <div class="heart">🔢</div>
    <h1>Paso 3</h1>
    <p><strong>Suma los dígitos</strong> del resultado que obtuviste.</p>
    <button class="next-btn" onclick="next()">Continuar</button>
  `,
  () => `
    <div class="heart">✨</div>
    <h1>Paso 4</h1>
    <p>Ahora <strong>eleva ese número al cuadrado</strong>.</p>
    <button class="next-btn" onclick="next()">Hecho</button>
  `,
  () => `
    <div class="heart">➖</div>
    <h1>Paso 5</h1>
    <p><strong>Réstale 9</strong> a ese número.</p>
    <button class="next-btn" onclick="next()">Siguiente</button>
  `,
  () => `
    <div class="heart">➗</div>
    <h1>Paso final</h1>
    <p>Finalmente, <strong>divídelo entre 9</strong>.</p>
    <button class="next-btn" onclick="next()">Ver resultado</button>
  `,
  () => `
    <div class="heart">❓</div>
        <h1>Resultado revelado</h1>
        <p><em>Algunos resultados no se calculan… se viven.</em></p>
        <p>
          Para revelarte el resultado que te salió…<br><br>
          <strong>ve al Real Plaza Salaverry</strong><br>
          <strong>este sábado a las 3:00 pm</strong>.
        </p>
        <div class="hint">A veces, vale la pena seguir la curiosidad</div>
  `
];

let index = 0;

function render() {
  screen.innerHTML = screens[index]();
}

function next() {
  if (index < screens.length - 1) {
    index++;
    render();
  }
}

render();