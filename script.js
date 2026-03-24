const boton = document.getElementById('btnFugitivo');
const displayContador = document.getElementById('contador');

let intentos = 0;

function huir() {
    const maxX = window.innerWidth - boton.clientWidth - 20;
    const maxY = window.innerHeight - boton.clientHeight - 20;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    boton.style.left = `${randomX}px`;
    boton.style.top = `${randomY}px`;
    intentos++;
    displayContador.textContent = `Intentos: ${intentos}`;
}

boton.addEventListener('mouseenter', huir);

boton.addEventListener('click', () => {
    alert(`¡Lo lograste en ${intentos} intentos!`);
    intentos = 0;
    displayContador.textContent = `Intentos: ${intentos}`;
});