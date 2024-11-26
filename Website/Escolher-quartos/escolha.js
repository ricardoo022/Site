const roomData = [
    { name: "Classic Room", capacity: "2 persons", description: "Cozy rooms with modern design.", price: 251 },
    { name: "Deluxe Room", capacity: "2 persons", description: "Spacious room with a luxurious feel.", price: 300 },
    { name: "Suite Room", capacity: "3 persons", description: "Includes a separate seating area.", price: 400 },
    { name: "Family Room", capacity: "4 persons", description: "Perfect for families with extra beds.", price: 350 },
    { name: "Single Room", capacity: "1 person", description: "Ideal for solo travelers.", price: 150 },
  ];
  
  const roomTemplate = document.getElementById("room-template").content;
  const roomsContainer = document.getElementById("rooms");
  
  const totalRooms = parseInt(localStorage.getItem('totalRooms') || 0, 10);
  const totalDays = parseInt(localStorage.getItem('totalDays') || 1, 10);  // Default to 1 day if not set
  
  roomData.forEach((data, index) => {
    const roomClone = document.importNode(roomTemplate, true);
    roomClone.querySelector(".room-name").textContent = data.name;
    roomClone.querySelector(".room-capacity").textContent = data.capacity;
    roomClone.querySelector(".room-description").textContent = data.description;
    roomClone.querySelector(".price").textContent = data.price;
  
    const totalPriceForRoom = data.price * totalDays;
    roomClone.querySelector(".total-price").textContent = totalPriceForRoom;
  
    roomClone.querySelector(".room-price").innerHTML = `€${data.price} per night`;
  
    roomClone.querySelector(".continue-button").setAttribute("data-room-id", index);
    roomsContainer.appendChild(roomClone);
  });
  
  let totalAmount = 0;
  let selectedRooms = [];
  
  function addToAccount(button) {
    if (selectedRooms.length >= totalRooms) {
        alert(`Você já selecionou o número máximo de quartos (${totalRooms})`);
        return;
    }
  
    const roomId = parseInt(button.getAttribute("data-room-id"));
    const roomName = roomData[roomId].name;
    const pricePerNight = roomData[roomId].price;
  
    const totalPriceForRoom = pricePerNight * totalDays;
  
    if (selectedRooms.includes(roomId)) {
        alert("Você já selecionou esse quarto!");
        return;
    }
  
    selectedRooms.push(roomId);
  
    button.classList.add("disabled");
    button.disabled = true;
  
    const selectedRoomsDiv = document.getElementById("selectedRooms");
    selectedRoomsDiv.innerHTML += `<div class="room-summary" id="room-${roomId}">
        ${roomName} (Total: €${totalPriceForRoom}) 
        <button onclick="removeFromAccount(${roomId})" class="remove-button">Remove</button>
    </div>`;
  
    totalAmount += totalPriceForRoom;
    document.getElementById("totalAmount").textContent = totalAmount;
    document.getElementById("selectedRoomsCount").textContent = selectedRooms.length;
  
    // Atualizar dados no localStorage
    updateLocalStorage();
  
    // Update the continue button state
    updateContinueButtonState();
  }
  
  function removeFromAccount(roomId) {
    const roomIndex = selectedRooms.indexOf(roomId);
    if (roomIndex > -1) {
        selectedRooms.splice(roomIndex, 1);
    }
  
    const roomPrice = roomData[roomId].price * totalDays;
    totalAmount -= roomPrice;
    document.getElementById("totalAmount").textContent = totalAmount;
  
    const button = document.querySelector(`[data-room-id="${roomId}"]`);
    button.classList.remove("disabled");
    button.disabled = false;
  
    const roomSummary = document.getElementById(`room-${roomId}`);
    roomSummary.remove();
  
    document.getElementById("selectedRoomsCount").textContent = selectedRooms.length;
  
    // Atualizar dados no localStorage
    updateLocalStorage();
  
    // Update the continue button state
    updateContinueButtonState();
  }
  
  function updateContinueButtonState() {
    const continueButton = document.getElementById("continueButton");
    if (selectedRooms.length === totalRooms) {
      continueButton.classList.remove("disabled");
      continueButton.disabled = false;
    } else {
      continueButton.classList.add("disabled");
      continueButton.disabled = true;
    }
  }
  
  function continueToCheckout() {
    if (selectedRooms.length === totalRooms) {
      window.location.href = "../Check-out/check-out.html";
    } else {
      alert("Por favor, selecione o número total de quartos antes de continuar.");
    }
  }
  
  // Função para atualizar o localStorage com os quartos e o valor total
  function updateLocalStorage() {
    const selectedRoomDetails = selectedRooms.map(roomId => {
      const room = roomData[roomId];
      return {
        name: room.name,
        totalPrice: room.price * totalDays
      };
    });
  
    localStorage.setItem('selectedRooms', JSON.stringify(selectedRoomDetails));
    localStorage.setItem('totalAmount', totalAmount);
  }