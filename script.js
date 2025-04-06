// Contador de tempo
const startDate = new Date('2023-06-12T09:32:00'); // Data de início (12 de junho às 09:32)
const tempoElement = document.getElementById('tempo');

function updateTime() {
  const now = new Date();
  const diff = now - startDate;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  tempoElement.textContent = `${days} dias, ${hours} horas, ${minutes} minutos, ${seconds} segundos`;
}

setInterval(updateTime, 1000); // Atualiza o contador a cada segundo