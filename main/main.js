// Função para mostrar o calendário
function toggleCalendar(inputField) {
    const calendarPopup = document.querySelector('.calendar-popup');
    calendarPopup.style.display = calendarPopup.style.display === 'block' ? 'none' : 'block';

    // Quando o calendário é aberto, preenche o campo com a data selecionada
    const calendar = $(calendarPopup).datepicker({
        format: 'dd/mm/yyyy', // Formato da data
        todayHighlight: true,
        autoclose: true,
        startDate: '+0d', // Impede a seleção de datas passadas
        endDate: '+1y', // Impede a seleção de datas além de um ano
    }).on('changeDate', function (e) {
        inputField.value = e.format(); // Atualiza o campo com a data selecionada
        calendarPopup.style.display = 'none'; // Fecha o calendário após a seleção

        // Redireciona para a página de reservas com as datas
        redirectToReservationPage();
    });
}

// Adiciona o evento de clique nos campos de data
document.querySelectorAll('.check-date input').forEach(function(inputField) {
    inputField.addEventListener('click', function() {
        toggleCalendar(inputField); // Chama a função para abrir o calendário
    });
});

// Função para fechar o calendário se o usuário clicar fora dele
document.addEventListener('click', function(e) {
    const calendarPopup = document.querySelector('.calendar-popup');
    const checkDateInputs = document.querySelectorAll('.check-date input');
    if (!calendarPopup.contains(e.target) && !Array.from(checkDateInputs).some(input => input.contains(e.target))) {
        calendarPopup.style.display = 'none'; // Fecha o calendário
    }
});

// Função para redirecionar para a página de reservas com as datas selecionadas
function redirectToReservationPage() {
    const checkinInput = document.querySelector('.check-date input[name="check-in"]');
    const checkoutInput = document.querySelector('.check-date input[name="check-out"]');

    // Verifica se ambas as datas estão selecionadas
    if (checkinInput.value && checkoutInput.value) {
        // Formata as datas para passar como parâmetros na URL
        const checkinDate = encodeURIComponent(checkinInput.value);
        const checkoutDate = encodeURIComponent(checkoutInput.value);

        // Redireciona para a página de reservas com as datas como parâmetros
        window.location.href = `/pagina-de-reservas?check-in=${checkinDate}&check-out=${checkoutDate}`;
    }
}

// Função para definir o valor de data padrão
window.onload = function() {
    const checkinInput = document.querySelector('.check-date input[name="check-in"]');
    const checkoutInput = document.querySelector('.check-date input[name="check-out"]');

    // Definir a data padrão para hoje (Check-in)
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();
    const formattedDate = `${day}/${month}/${year}`;

    checkinInput.value = formattedDate; // Define a data de check-in com a data de hoje
    checkoutInput.value = formattedDate; // Define a data de check-out com a data de hoje
};
