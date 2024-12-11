const translations = {
    pt: {
        home: "CASA",
        belmonte: "BELMONTE",
        rooms: "QUARTOS",
        kitchen: "COZINHA",
        gallery: "GALERIA",
        testimonials: "TESTEMUNHOS",
        contacts: "CONTACTOS",
        location: "LOCALIZAÇÃO",
        reserve: "RESERVAS",

        rooms:"QUARTOS",
        titleRoom:"Quarto Serra da Estrela",
        title:"QUARTO | AR CONDICIONADO | INSONORIZAÇÃO | WI-FI GRATUITO | ÁREA 46m²",
        textRoom:"Quarto “Serra da Estrela” é um espaço sofisticado e elegante, decorado com uma mobília de madeira de requinte que exala conforto e classe. Uma roupa de cama, em tons neutros e suaves, complementa perfeitamente o estilo requintado da mobília. O quarto conta com duas janelas amplas que oferecem uma vista privilegiada para a majestosa Serra da Estrela e o vale do Zêzere. Durante o dia, a luz natural ilumina o espaço, destacando a beleza dos móveis em madeira e criando uma atmosfera acolhedora.",
        textBottom1:"WC | Duche | Produtos de higiene pessoal gratuitos | Toalhas | Secador de cabelo",
        textBold1:"CASA DE BANHO:",
        textBottom2:" Cozinha comum totalmente equipada | 2 Salas comum com lareira | Sala comum de TV | Terraço | Quintal",
        textBold2:"POSSIBILIDADE DE UTILIZAR:",

        contact_us: "Contacte-nos",
        follow_us: "Visite-nos",
        book: "Livro de Reclamações",
        polites1:"Concept by SalesUp © Copyright - Active Up. Todos os direitos reservados.",
        polites2:"Política de Privacidade"
    },
    en: {
        home: "HOME",
        belmonte: "BELMONTE",
        rooms: "ROOMS",
        kitchen: "KITCHEN",
        gallery: "GALLERY",
        testimonials: "TESTIMONIALS",
        contacts: "CONTACTS",
        location: "LOCATION",
        reserve: "RESERVATIONS",

        rooms:"BEDROOMS",
        titleRoom:"Serra da Estrela Bedroom ",
        title:"ROOM | AIR CONDITIONING | SOUNDPROOFING | FREE WI-FI | AREA 46m²",
        textRoom: "The “Serra da Estrela” room is a sophisticated and elegant space, decorated with exquisite wooden furniture that exudes comfort and class. The bed linen, in neutral and soft tones, perfectly complements the refined style of the furniture. The room features two large windows that offer a privileged view of the majestic Serra da Estrela and the Zêzere valley. During the day, natural light illuminates the space, highlighting the beauty of the wooden furniture and creating a cozy atmosphere.",
        textBottom1: "WC | Shower | Complimentary personal hygiene products | Towels | Hair dryer",
        textBold1: "BATHROOM:",
        textBottom2: "Fully equipped shared kitchen | 2 Common rooms with fireplace | TV lounge | Terrace | Garden",
        textBold2: "POSSIBILITY OF USING:",

        contact_us: "Contact us",
        follow_us: "Visit us",
        book: "Complaints Book",
        polites1:"Concept by SalesUp © Copyright - Active Up. All rights reserved.",
        polites2:"Privacy Policy"
    },
    es: {
        home: "CASA",
        belmonte: "BELMONTE",
        rooms: "HABITACIONES",
        kitchen: "COCINA",
        gallery: "GALERÍA",
        testimonials: "TESTIMONIOS",
        contacts: "CONTACTOS",
        location: "UBICACIÓN",
        reserve: "RESERVAS",

        rooms:"HABITACIÓNES",
        titleRoom:"Habitación Serra da Estrela",
        title:"HABITACIÓN | AIRE ACONDICIONADO | INSONORIZACIÓN | WI-FI GRATIS | ÁREA 46m²",
        textRoom: "La habitación « Serra da Estrela » es un espacio sofisticado y elegante, decorado con muebles de madera refinados que exudan confort y clase. La ropa de cama, en tonos neutros y suaves, complementa perfectamente el estilo refinado de los muebles. La habitación cuenta con dos ventanas grandes que ofrecen una vista privilegiada de la majestuosa Serra da Estrela y el valle del Zêzere. Durante el día, la luz natural ilumina el espacio, resaltando la belleza de los muebles de madera y creando una atmósfera acogedora.",
        textBottom1: "WC | Ducha | Productos de higiene personal gratuitos | Toallas | Secador de pelo",
        textBold1: "BAÑO:",
        textBottom2: "Cocina común totalmente equipada | 2 Salones comunes con chimenea | Sala de TV | Terraza | Jardín",
        textBold2: "POSIBILIDAD DE UTILIZAR:",

       
        contact_us: "Contáctenos",
        follow_us: "Visítenos",
        book: "Libro de Reclamaciones",
        polites1:"Concept by SalesUp © Copyright - Active Up. Reservados todos los derechos.",
        polites2:"Política de Privacidad"
    },
    fr: {
        home: "MAISON",
        belmonte: "BELMONTE",
        rooms: "CHAMBRE",
        kitchen: "CUISINE",
        gallery: "GALERIE",
        testimonials: "TÉMOIGNAGES",
        contacts: "CONTACTS",
        location: "EMPLACEMENT",
        reserve: "RÉSERVATIONS",
        contact_us: "Contactez-nous",

        rooms:"CHAMBRE",
        titleRoom:"Chambre Serra da Estrela",
        title:"CHAMBRE | CLIMATISATION | INSONORISATION | CONNEXION WI-FI GRATUITE | SUPERFICIE 46m²",
        textRoom: "La chambre « Serra da Estrela » est un espace sophistiqué et élégant, décoré avec un mobilier en bois raffiné qui dégage confort et classe. Le linge de lit, dans des tons neutres et doux, complète parfaitement le style raffiné du mobilier. La chambre dispose de deux grandes fenêtres offrant une vue privilégiée sur la majestueuse Serra da Estrela et la vallée du Zêzere. Pendant la journée, la lumière naturelle illumine l'espace, mettant en valeur la beauté du mobilier en bois et créant une atmosphère accueillante.",
        textBottom1:"WC | Douche | Produits d'hygiène personnels gratuits | Serviettes | Sèche-cheveux",
        textBold1:"SALLE DE BAIN :",
        textBottom2: "Cuisine commune entièrement équipée | 2 Salons communs avec cheminée | Salon TV | Terrasse | Jardin",
        textBold2:"POSSIBILITÉ D'UTILISER :",

        follow_us: "Suivez-nous",
        book: "Livre des Réclamations",
        polites1:"Concept by SalesUp © Copyright - Active Up. Tous droits réservés.",
        polites2:"Politique de Confidentialité"
    }
};


function setLanguage(lang) {
    document.getElementById('home').textContent = translations[lang].home;
    document.querySelector('a[href="../Belmonte/index.belmonte.html"]').textContent = translations[lang].belmonte;
    document.querySelector('a[href="../Cozinha/index.cozinha.html"]').textContent = translations[lang].kitchen;
    document.querySelector('a[href="../Galeria/index.galeria.html"]').textContent = translations[lang].gallery;
    document.querySelector('a[href="../Testemunhos/index.testemunhos.html"]').textContent = translations[lang].testimonials;
    document.querySelector('a[href="../Contactos/index.contactos.html"]').textContent = translations[lang].contacts;
    document.querySelector('a[href="../Como chegar/index.chegar.html"]').textContent = translations[lang].location;
    document.querySelector('a[href="../Reservar/index.reservar.html"]').textContent = translations[lang].reserve;

    // Atualizar o texto da seção principal
    document.getElementById('rooms').textContent = translations[lang].rooms;
    document.getElementById('titleRoom').textContent = translations[lang].titleRoom;
    document.getElementById('title').textContent = translations[lang].title ;
    document.getElementById('textRoom').textContent = translations[lang].textRoom;
    document.getElementById('textBottom1').innerHTML = '<strong>' + translations[lang].textBold1 + '</strong> ' + translations[lang].textBottom1;
    document.getElementById('textBottom2').innerHTML = '<strong>' + translations[lang].textBold2 + '</strong> ' + translations[lang].textBottom2;



    
    // Atualizar o footer
    document.getElementById('contact_us').textContent = translations[lang].contact_us;
    document.getElementById('follow_us').textContent = translations[lang].follow_us;
    document.getElementById('book').textContent = translations[lang].book;
    document.getElementById('polites1').textContent = translations[lang].polites1;
    document.getElementById('polites2').textContent = translations[lang].polites2;
}

window.onload = function() {
    // Get the selected language from localStorage
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'pt';  // Default to 'pt' if not set
    setLanguage(savedLanguage);
};

function changeLanguage(language) {
    if (!translations[language]) {
        console.error(`Language ${language} not found!`);
        return; // Exit the function if the language is not valid
    }
    // Save the language selection in localStorage
    localStorage.setItem('selectedLanguage', language);

    // Update the page language immediately
    setLanguage(language);
}