const translations = {
    pt: {
        home: "CASA",
        belmonte: "BELMONTE",
        kitchen: "COZINHA",
        gallery: "GALERIA",
        testimonials: "TESTEMUNHOS",
        contacts: "CONTACTOS",
        location: "LOCALIZAÇÃO",
        reserve: "RESERVAS",

        rooms:"QUARTOS",
        titleRoom:"Quarto Vale do Zêzere",
        title:"QUARTO | AR CONDICIONADO | INSONORIZAÇÃO | WI-FI GRATUITO | ÁREA 46m²",
        textRoom:"Quarto “Vale do Zêzere” é um espaço encantador, decorado com mobília de cerejeira que combina elegância e modernidade. A decoração é leve, com detalhes em tons neutros que harmonizam com a madeira e deixam o espaço iluminado e sereno.",
        textRoom2:"O destaque do quarto é uma janela ampla, que emoldura uma vista deslumbrante para a Serra da Estrela e o vale do Zêzere. A paisagem natural entra no quarto, criando uma sensação de paz e conexão com o exterior.",
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
        kitchen: "KITCHEN",
        gallery: "GALLERY",
        testimonials: "TESTIMONIALS",
        contacts: "CONTACTS",
        location: "LOCATION",
        reserve: "RESERVATIONS",

        rooms:"ROOMS",
        titleRoom:"Room Vale do Zêzere",
        title:"ROOM | AIR CONDITIONING | SOUNDPROOFING | FREE WI-FI | AREA 46m²",
        textRoom:"Room “Vale do Zêzere” is a charming space, decorated with cherry wood furniture that combines elegance and modernity. The decor is light, with neutral-toned details that harmonize with the wood and make the space bright and serene.",
        textRoom2:"The highlight of the room is a large window that frames a stunning view of Serra da Estrela and the Zêzere valley. The natural landscape enters the room, creating a feeling of peace and connection with the outdoors.",
        textBottom1:"WC | Shower | Free toiletries | Towels | Hairdryer",
        textBold1:"BATHROOM:",
        textBottom2:" Fully equipped shared kitchen | 2 Shared lounges with fireplace | Shared TV room | Terrace | Backyard",
        textBold2:"USAGE POSSIBILITIES:",

        contact_us: "Contact us",
        follow_us: "Visit us",
        book: "Complaints Book",
        polites1:"Concept by SalesUp © Copyright - Active Up. All rights reserved.",
        polites2:"Privacy Policy"
    },
    es: {
        home: "CASA",
        belmonte: "BELMONTE",
        kitchen: "COCINA",
        gallery: "GALERÍA",
        testimonials: "TESTIMONIOS",
        contacts: "CONTACTOS",
        location: "UBICACIÓN",
        reserve: "RESERVAS",

        rooms:"HABITACIONES",
        titleRoom:"Habitación Vale del Zêzere",
        title:"HABITACIÓN | AIRE ACONDICIONADO | INSONORIZACIÓN | WI-FI GRATUITO | ÁREA 46m²",
        textRoom:"La habitación “Vale do Zêzere” es un espacio encantador, decorado con muebles de cerezo que combinan elegancia y modernidad. La decoración es ligera, con detalles en tonos neutros que armonizan con la madera y hacen que el espacio sea luminoso y sereno.",
        textRoom2:"El punto culminante de la habitación es una gran ventana que enmarca una vista impresionante de la Serra da Estrela y el valle del Zêzere. El paisaje natural entra en la habitación, creando una sensación de paz y conexión con el exterior.",
        textBottom1:"WC | Ducha | Artículos de tocador gratuitos | Toallas | Secador de pelo",
        textBold1:"BAÑO:",
        textBottom2:" Cocina compartida totalmente equipada | 2 Salas comunes con chimenea | Sala común de TV | Terraza | Patio trasero",
        textBold2:"POSIBILIDAD DE USO:",

        contact_us: "Contáctenos",
        follow_us: "Visítenos",
        book: "Libro de Reclamaciones",
        polites1:"Concept by SalesUp © Copyright - Active Up. Reservados todos los derechos.",
        polites2:"Política de Privacidad"
    },
    fr: {
        home: "MAISON",
        belmonte: "BELMONTE",
        kitchen: "CUISINE",
        gallery: "GALERIE",
        testimonials: "TÉMOIGNAGES",
        contacts: "CONTACTS",
        location: "EMPLACEMENT",
        reserve: "RÉSERVATIONS",
        contact_us: "Contactez-nous",

        rooms:"CHAMBRES",
        titleRoom:"Chambre Vallée du Zêzere",
        title:"CHAMBRE | CLIMATISATION | INSONORISATION | WI-FI GRATUIT | SUPERFICIE 46m²",
        textRoom:"La chambre “Vallée du Zêzere” est un espace charmant, décoré avec des meubles en bois de cerisier qui allient élégance et modernité. La décoration est légère, avec des détails dans des tons neutres qui s’harmonisent avec le bois et rendent l’espace lumineux et serein.",
        textRoom2:"Le point fort de la chambre est une grande fenêtre qui encadre une vue imprenable sur la Serra da Estrela et la vallée du Zêzere. Le paysage naturel pénètre dans la chambre, créant une sensation de paix et de connexion avec l’extérieur.",
        textBottom1:"WC | Douche | Articles de toilette gratuits | Serviettes | Sèche-cheveux",
        textBold1:"SALLE DE BAIN:",
        textBottom2:" Cuisine commune entièrement équipée | 2 Salles communes avec cheminée | Salle commune de TV | Terrasse | Cour",
        textBold2:"POSSIBILITÉS D'UTILISATION:",

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
    document.getElementById('title').textContent = translations[lang].title;
    document.getElementById('textRoom').textContent = translations[lang].textRoom;
    document.getElementById('textRoom2').textContent = translations[lang].textRoom2;
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