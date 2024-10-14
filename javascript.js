document.addEventListener('DOMContentLoaded', () => {
    const horasInput = document.getElementById('input-horas');
    const minutosInput = document.getElementById('input-minutos');
    const segundosInput = document.getElementById('input-segundos');
    const startButton = document.getElementById('start-button');
    const horasDisplay = document.getElementById('horas');
    const minutosDisplay = document.getElementById('minutos');
    const segundosDisplay = document.getElementById('segundos');
    const message = document.getElementById('message');
    const body = document.body;

    let horas = 0;
    let minutos = 0;
    let segundos = 0;

    startButton.addEventListener('click', () => {
        horas = parseInt(horasInput.value, 10) || 0;
        minutos = parseInt(minutosInput.value, 10) || 0;
        segundos = parseInt(segundosInput.value, 10) || 0;

        horasDisplay.textContent = horas.toString().padStart(2, "0");
        minutosDisplay.textContent = minutos.toString().padStart(2, "0");
        segundosDisplay.textContent = segundos.toString().padStart(2, "0");

        const contador = setInterval(() => {
            segundos--;

            if (segundos < 0) {
                minutos--;
                segundos = 59;
            }

            if (minutos < 0) {
                horas--;
                minutos = 59;
            }

            horasDisplay.textContent = horas.toString().padStart(2, "0");
            minutosDisplay.textContent = minutos.toString().padStart(2, "0");
            segundosDisplay.textContent = segundos.toString().padStart(2, "0");

            if (horas === 0 && minutos === 0 && segundos === 0) {
                clearInterval(contador);

                body.classList.add('flash-red-black');
                message.classList.remove('hidden');

                setTimeout(() => {
                    body.classList.remove('flash-red-black');
                    message.classList.add('hidden');
                }, 4000);
            }
        }, 1000);
    });
});
