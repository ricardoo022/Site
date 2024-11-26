const CLIENT_ID = '433147724454-5hq93kc92h0g3e4ihl38jfk7eqq6ldea.apps.googleusercontent.com';
const API_KEY = 'AIzaSyD_eJSZ343j2wfohfCLST3C1j_YL-iM_k8';
const CALENDAR_ID = 'pixel.webdesign.company@gmail.com';
const currentYear = new Date().getFullYear();
const endYear = 2027;

let rooms = [{ guests: 2 }];
let checkInDate = null;
let checkOutDate = null;

function loadCalendarAPI() {
  gapi.client.setApiKey(API_KEY);
  gapi.client.load('calendar', 'v3', listYearEvents);
}

function listYearEvents() {
  gapi.client.calendar.events.list({
    calendarId: CALENDAR_ID,
    timeMin: new Date(currentYear, 0, 1).toISOString(),
    timeMax: new Date(endYear, 11, 31).toISOString(),
    singleEvents: true,
    orderBy: 'startTime'
  }).then(response => {
    const events = response.result.items;
    const unavailableDates = events
      .filter(event =>
        ["reserva", "Booking.com", "Airbnb"].some(keyword =>
          (event.summary && event.summary.toLowerCase().includes(keyword.toLowerCase())) ||
          (event.description && event.description.toLowerCase().includes(keyword.toLowerCase()))
        )
      )
      .map(event => event.start.dateTime || event.start.date);

    initializeCalendar(unavailableDates);
  });
}

function initializeCalendar(unavailableDates) {
  const formattedDates = unavailableDates.map(date => new Date(date).toISOString().split('T')[0]);

  flatpickr("#calendarInput", {
    inline: false,
    minDate: "today", // Definir o calendário para começar a partir de hoje
    maxDate: new Date(endYear, 11, 31),
    disable: formattedDates,
    locale: "pt",
    dateFormat: "Y-m-d",
    mode: "range",
    showMonths: 2,
    onChange: function(selectedDates) {
      if (selectedDates.length === 1) {
        document.getElementById("calendarInput").placeholder = "Check-in / Check-out";
        checkInDate = selectedDates[0];
        checkOutDate = null;
      } else if (selectedDates.length === 2) {
        checkInDate = selectedDates[0];
        checkOutDate = selectedDates[1];
        document.getElementById("calendarInput").value = `${checkInDate.toISOString().split('T')[0]} to ${checkOutDate.toISOString().split('T')[0]}`;
      }
      validateBooking();
    }
  });
}

function init() {
  gapi.load('client', loadCalendarAPI);
}

function updateRoomGuestText() {
  const totalRooms = rooms.length;
  const totalGuests = rooms.reduce((sum, room) => sum + room.guests, 0);
  document.getElementById("roomGuestText").innerText = `${totalRooms} room${totalRooms > 1 ? 's' : ''}, ${totalGuests} guest${totalGuests > 1 ? 's' : ''}`;
  validateBooking();
}

function addRoom() {
  rooms.push({ guests: 1 });
  renderRooms();
  updateRoomGuestText();
}

function removeRoom(index) {
  if (rooms.length > 1) {
    rooms.splice(index, 1);
    renderRooms();
    updateRoomGuestText();
  }
}

function updateGuests(index, change) {
  rooms[index].guests = Math.max(1, rooms[index].guests + change);
  renderRooms();
  updateRoomGuestText();
}

function renderRooms() {
  const roomContainer = document.getElementById("roomContainer");
  roomContainer.innerHTML = ''; // Clear previous room items

  rooms.forEach((room, index) => {
    const roomItem = document.createElement('div');
    roomItem.classList.add('room-item');
    roomItem.innerHTML = `
      <div class="room-title">
        Room ${index + 1}
        <button onclick="removeRoom(${index})" style="color: #7a5c3f; border: none; background: none; cursor: pointer;">Remove</button>
      </div>
      <div class="guest-counter">
        Guests:
        <button class="counter-button" onclick="updateGuests(${index}, -1)">-</button>
        <span>${room.guests}</span>
        <button class="counter-button" onclick="updateGuests(${index}, 1)">+</button>
      </div>
    `;
    roomContainer.appendChild(roomItem);
  });
}

function validateBooking() {
  const bookNowBtn = document.getElementById('bookNowBtn');
  if (checkInDate && checkOutDate && rooms.length > 0) {
      const dayDifference = Math.ceil((checkOutDate - checkInDate) / (1000 * 60 * 60 * 24));
      localStorage.setItem('totalDays', dayDifference);  // Store the number of days
      bookNowBtn.disabled = false;
  } else {
      bookNowBtn.disabled = true;
  }
}

document.getElementById('guest-room-picker').addEventListener('click', (event) => {
  event.stopPropagation();
  const dropdown = document.getElementById("guestRoomDropdown");
  dropdown.classList.toggle("show");
});
href = ""
document.getElementById('bookNowBtn').addEventListener('click', () => {
  if (!document.getElementById('bookNowBtn').disabled) {
    window.location.href = "../Escolher-quartos/escolha.html";    
  }
});

window.onclick = function(event) {
  const dropdown = document.getElementById("guestRoomDropdown");
  if (!event.target.closest('#guest-room-picker') && dropdown.classList.contains("show")) {
    dropdown.classList.remove("show");
  }
};

window.onload = function() {
  init();
  renderRooms();
  updateRoomGuestText();
};

document.getElementById('bookNowBtn').addEventListener('click', () => {
      if (!document.getElementById('bookNowBtn').disabled) {
          // Armazena o número de quartos e hóspedes no localStorage
          const totalRooms = rooms.length;
          const totalGuests = rooms.reduce((sum, room) => sum + room.guests, 0);
          
          localStorage.setItem('totalRooms', totalRooms);
          localStorage.setItem('totalGuests', totalGuests);
          
          window.location.href = "../Escolher-quartos/escolha.html";
      }
  });

  function validateBooking() {
      const bookNowBtn = document.getElementById('bookNowBtn');
      if (checkInDate && checkOutDate && rooms.length > 0) {
          const dayDifference = Math.ceil((checkOutDate - checkInDate) / (1000 * 60 * 60 * 24));

          // Armazena as datas de check-in e check-out no localStorage
          localStorage.setItem('checkinDate', checkInDate.toISOString().split('T')[0]);
          localStorage.setItem('checkoutDate', checkOutDate.toISOString().split('T')[0]);
          
          localStorage.setItem('totalDays', dayDifference);
          bookNowBtn.disabled = false;
      } else {
          bookNowBtn.disabled = true;
      }
  }