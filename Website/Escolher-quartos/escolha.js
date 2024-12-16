const roomData = [
  {
      name: "Quarto Serra da Estrela",
      capacity: "2 Pessoas",
      description: "O Quarto Serra da Estrela é um espaço elegante, com mobiliário de madeira requintado e roupa de cama suave em tons neutros. Com duas janelas amplas, oferece vistas privilegiadas para a Serra da Estrela e o vale do Zêzere, iluminando o ambiente com luz natural e criando uma atmosfera tranquila e acolhedora.",
      price: 251,
      images: [
          "../Fotos/serra-da-estrela.jpg",
      ],
      icons: [
        "../Fotos/televisao-icon.png",
        "../Fotos/ar-condicionado.png",
        "../Fotos/wifi.png",
        "../Fotos/armário.png",
        "../Fotos/lampada.png",
        "../Fotos/janela.png",
        "../Fotos/sol.png",
        "../Fotos/serra.png",
    ]
  },
  {
      name: "Quarto Castelo",
      capacity: "2 pessoas",
      description: "O Quarto Castelo é um espaço encantador, com uma varanda que oferece vistas deslumbrantes sobre a vila de Belmonte e a Serra da Estrela. Decorado com uma cama de ferro de estilo rústico e romântico, roupa de cama suave e tons naturais, o quarto combina charme e conforto. A varanda dispõe de uma pequena mesa e cadeiras, perfeitas para relaxar enquanto se aprecia a paisagem e o ambiente tranquilo.",
      price: 300,
      images: [
          "../Fotos/castelo.jpg",
      ],
      icons: [
        "../Fotos/televisao-icon.png",
        "../Fotos/ar-condicionado.png",
        "../Fotos/wifi.png",
        "../Fotos/armário.png",
        "../Fotos/lampada.png",
        "../Fotos/janela.png",
        "../Fotos/sol.png",
        "../Fotos/varanda.png",
    ]
  },
  {
      name: "Quarto Vale do Zêzere",
      capacity: "2 pessoas",
      description: "O Quarto Vale do Zêzere é encantador, com mobília moderna em madeira de cerejeira e detalhes decorativos em tons neutros. A janela ampla oferece uma vista deslumbrante para a Serra da Estrela e o vale do Zêzere, permitindo uma experiência de paz e conexão com a natureza.",
      price: 400,
      images: [
          "../Fotos/vale-do-zezere.jpg",
      ],
      icons: [
        "../Fotos/televisao-icon.png",
        "../Fotos/ar-condicionado.png",
        "../Fotos/wifi.png",
        "../Fotos/armário.png",
        "../Fotos/lampada.png",
        "../Fotos/cadeirao.png",
        "../Fotos/janela.png",
        "../Fotos/sol.png",
        "../Fotos/serra.png",
        "../Fotos/vale.png",

        
    ]
  },
  {
      name: "Quarto Cabrais",
      capacity: "2 pessoas",
      description: "O Quarto Cabrais é um espaço requintado, decorado com mobiliário clássico em madeira trabalhada, que evoca elegância e história. A varanda espaçosa oferece uma vista impressionante da vila e da estátua de Pedro Álvares Cabral. Com tons neutros e acabamentos sofisticados, este é o lugar ideal para desfrutar de um ambiente acolhedor e opulente.",
      price: 300,
      images: [
          "../Fotos/cabrais.jpg",
      ],
      icons: [
        "../Fotos/televisao-icon.png",
        "../Fotos/ar-condicionado.png",
        "../Fotos/wifi.png",
        "../Fotos/armário.png",
        "../Fotos/lampada.png",
        "../Fotos/janela.png",
        "../Fotos/sol.png",
        "../Fotos/varanda.png",
        "../Fotos/estatua.png",
    ]
  },
  {
      name: "Quarto Centrum Cellas",
      capacity: "2 pessoas",
      description: "O Quarto Centum Cellas é um espaço acolhedor e elegante, decorado com tons neutros e detalhes em madeira, que refletem o charme tradicional de Belmonte. Com duas janelas amplas, oferece uma abundante luz natural e vistas pitorescas para o centro histórico da vila. A cama confortável é acompanhada por mesas de cabeceira, candeeiros suaves e um pequeno armário, garantindo uma estadia prática e tranquila.",
      price: 400,
      images: [
          "../Fotos/centrum-cellas.jpg",
      ],
      icons: [
          "../Fotos/televisao-icon.png",
        "../Fotos/ar-condicionado.png",
        "../Fotos/wifi.png",
        "../Fotos/armário.png",
        "../Fotos/lampada.png",
        "../Fotos/janela.png",
        "../Fotos/sol.png",
      ]
  },
  // Add more rooms as needed
];

const roomTemplate = document.getElementById("room-template").content;
const roomsContainer = document.getElementById("rooms");

const totalRooms = parseInt(localStorage.getItem('totalRooms') || 0, 10);
const totalDays = parseInt(localStorage.getItem('totalDays') || 1, 10);

roomData.forEach((data, index) => {
  const roomClone = document.importNode(roomTemplate, true);
  roomClone.querySelector(".room-name").textContent = data.name;
  roomClone.querySelector(".room-capacity").textContent = data.capacity;
  roomClone.querySelector(".room-description").textContent = data.description;
  roomClone.querySelector(".price").textContent = data.price;

  const totalPriceForRoom = data.price * totalDays;
  roomClone.querySelector(".total-price").textContent = totalPriceForRoom;

  roomClone.querySelector(".room-price").innerHTML = `€${data.price} por noite`;

  // Add unique images to the carousel
  const carousel = roomClone.querySelector(".carousel");
  carousel.innerHTML = ""; // Clear the existing placeholder images
  data.images.forEach(imageUrl => {
      const img = document.createElement("img");
      img.src = imageUrl;
      img.alt = data.name;
      carousel.appendChild(img);
  });
  carousel.firstChild.classList.add("active"); // Make the first image active

  // Add unique icons
  const iconsContainer = roomClone.querySelector(".icons");
  iconsContainer.innerHTML = ""; // Clear existing placeholder icons
  data.icons.forEach(iconUrl => {
      const iconImg = document.createElement("img");
      iconImg.src = iconUrl;
      iconsContainer.appendChild(iconImg);
  });

  roomClone.querySelector(".continue-button").setAttribute("data-room-id", index);
  roomsContainer.appendChild(roomClone);
});

// Rest of the JavaScript remains the same
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