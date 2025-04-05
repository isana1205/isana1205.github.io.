// Função para o contador de tempo desde uma data específica
const startDate = new Date("2023-06-12T09:32:00");
const counterElement = document.getElementById("counter");

function updateTimer() {
    const now = new Date();
    const timeDiff = now - startDate;
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    counterElement.textContent = `${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos`;
}

setInterval(updateTimer, 1000);  // Atualiza o contador a cada segundo
