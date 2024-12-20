// Dados simulados de reserva
const reservationData = {
  checkinDate: localStorage.getItem('checkinDate') || "01/01/2024",
  checkoutDate: localStorage.getItem('checkoutDate') || "05/01/2024",
  totalNights: parseInt(localStorage.getItem('totalDays') || 4),
  rooms: JSON.parse(localStorage.getItem('selectedRooms') || "[]"),
  totalAmount: parseFloat(localStorage.getItem('totalAmount') || "0")
};

// Função para atualizar o resumo da reserva
function updateReservationSummary() {
  document.getElementById("checkinDate").textContent = reservationData.checkinDate;
  document.getElementById("checkoutDate").textContent = reservationData.checkoutDate;
  document.getElementById("totalNights").textContent = reservationData.totalNights;

  // Atualizar lista de quartos e total
  const roomsSummary = document.getElementById("roomsSummary");
  roomsSummary.innerHTML = ''; // Limpar a lista antes de atualizar
  reservationData.rooms.forEach(room => {
      const roomElement = document.createElement("div");
      roomElement.classList.add("summary-item");
      roomElement.innerHTML = `
          <span>${room.name}</span>
          <span>Total: €${room.totalPrice}</span>
      `;
      roomsSummary.appendChild(roomElement);
  });

  document.getElementById("totalAmount").textContent = reservationData.totalAmount.toFixed(2);
}

updateReservationSummary();

// Manipulador de envio do formulário de checkout
document.getElementById("checkoutForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Previne o comportamento padrão do formulário

  // Coletar dados do formulário
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  const taxNumber = document.getElementById("taxNumber").value;
  const country = document.getElementById("country").value;
  const extraInfo = document.getElementById("extraInfo").value;

  // Adicionar dados do formulário aos dados da reserva
  const fullReservationData = {
    ...reservationData,
    name,
    phone,
    email,
    taxNumber,
    country,
    extraInfo
  };

  // Enviar email com os dados da reserva
  fetch('http://localhost:3001/send-email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(fullReservationData)
  })
  .then(response => response.text())
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.error('Error:', error);
  });

  // Exibe a mensagem de reserva confirmada
  const bookedMessage = document.getElementById('bookedMessage');
  bookedMessage.classList.add('active');

  // Cria e adiciona o overlay de opacidade
  const overlay = document.createElement('div');
  overlay.classList.add('overlay');
  document.body.appendChild(overlay);

  // Remove a mensagem e o overlay após 1 segundo e redireciona após 3 segundos
  setTimeout(() => {
      bookedMessage.classList.remove('active');
      overlay.remove(); // Remove o overlay
  }, 2000);

  // Redireciona após 3 segundos
  setTimeout(() => {
      window.location.href = '../main/index.main.html'; // Redireciona para a página principal
  }, 2000);
});