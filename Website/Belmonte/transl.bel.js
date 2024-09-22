const translations = {
    pt: {
        home: "CASA",
        belmonte: "BELMONTE",
        rooms: "QUARTOS",
        room1:"QUARTO",
        room2:"QUARTO",
        room3:"QUARTO",
        room4:"QUARTO",
        room5:"QUARTO",
        kitchen: "COZINHA",
        gallery: "GALERIA",
        testimonials: "TESTEMUNHOS",
        contacts: "CONTACTOS",
        location: "LOCALIZAÇÃO",
        reserve: "RESERVAS",
        welcome_text: "BEM VINDO A BELMONTE",
        paragraph_text: "Belmonte é uma vila histórica, situada nas encostas da Serra da Estrela, conhecida pelo seu rico património e beleza natural. Aqui nasceu Pedro Álvares Cabral, o navegador que descobriu o Brasil, e o Castelo de Belmonte oferece uma vista deslumbrante sobre o vale do Rio Zêzere. A vila destaca-se também pela sua comunidade judaica, uma das mais antigas e preservadas da Península Ibérica, que pode ser explorada no Museu Judaico. Rodeada pela natureza, Belmonte é perfeita para quem busca tranquilidade e proximidade ao Parque Natural da Serra da Estrela, além de ser um destino gastronómico de excelência, com produtos locais autênticos. Belmonte é um lugar que combina história, cultura e paisagens únicas, proporcionando uma experiência memorável a todos os seus visitantes.",
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
        room1:"ROOM",
        room2:"ROOM",
        room3:"ROOM",
        room4:"ROOM",
        room5:"ROOM",
        kitchen: "KITCHEN",
        gallery: "GALLERY",
        testimonials: "TESTIMONIALS",
        contacts: "CONTACTS",
        location: "LOCATION",
        reserve: "RESERVATIONS",
        welcome_text: "WELCOME TO BELMONTE",
        paragraph_text: "Belmonte is a historic town located on the slopes of the Serra da Estrela, known for its rich heritage and natural beauty. Pedro Álvares Cabral, the explorer who discovered Brazil, was born here, and Belmonte Castle offers stunning views over the Zêzere River valley. The town is also notable for its Jewish community, one of the oldest and best preserved in the Iberian Peninsula, which can be explored at the Jewish Museum. Surrounded by nature, Belmonte is perfect for those seeking tranquility and proximity to the Serra da Estrela Natural Park, as well as being an excellent gastronomic destination, with authentic local products. Belmonte is a place that combines history, culture and unique landscapes, providing a memorable experience for all its visitors.",
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
        room1:"HABITACIONE",
        room2:"HABITACIONE",
        room3:"HABITACIONE",
        room4:"HABITACIONE",
        room5:"HABITACIONE",
        kitchen: "COCINA",
        gallery: "GALERÍA",
        testimonials: "TESTIMONIOS",
        contacts: "CONTACTOS",
        location: "UBICACIÓN",
        reserve: "RESERVAS",
        welcome_text: "BIENVENIDO A BELMONTE",
        paragraph_text: "Belmonte es un pueblo histórico, situado en las laderas de la Serra da Estrela, conocido por su rico patrimonio y belleza natural. Aquí nació Pedro Álvares Cabral, el navegante que descubrió Brasil, y el Castillo de Belmonte ofrece una vista impresionante sobre el valle del río Zêzere. La localidad también destaca por su comunidad judía, una de las más antiguas y conservadas de la Península Ibérica, que se puede conocer en el Museo Judío. Rodeado de naturaleza, Belmonte es perfecto para quienes buscan tranquilidad y proximidad al Parque Natural de la Serra da Estrela, además de ser un excelente destino gastronómico, con auténticos productos locales. Belmonte es un lugar que combina historia, cultura y paisajes únicos, brindando una experiencia memorable para todos sus visitantes.",
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
        room1:"CHAMBRE",
        room2:"CHAMBRE",
        room3:"CHAMBRE",
        room4:"CHAMBRE",
        room5:"CHAMBRE",
        kitchen: "CUISINE",
        gallery: "GALERIE",
        testimonials: "TÉMOIGNAGES",
        contacts: "CONTACTS",
        location: "EMPLACEMENT",
        reserve: "RÉSERVATIONS",
        welcome_text: "BIENVENUE À BELMONTE",
        paragraph_text: "Belmonte est un village historique, situé sur les pentes de la Serra da Estrela, connu pour son riche patrimoine et sa beauté naturelle. Pedro Álvares Cabral, le navigateur qui a découvert le Brésil, est né ici et le château de Belmonte offre une vue imprenable sur la vallée du fleuve Zêzere. La ville se distingue également par sa communauté juive, l'une des plus anciennes et des mieux préservées de la péninsule ibérique, que l'on peut découvrir au Musée juif. Entourée par la nature, Belmonte est parfaite pour ceux qui recherchent la tranquillité et la proximité du parc naturel de la Serra da Estrela, en plus d'être une excellente destination gastronomique, avec des produits locaux authentiques. Belmonte est un lieu qui allie histoire, culture et paysages uniques, offrant une expérience mémorable à tous ses visiteurs.",
        contact_us: "Contactez-nous",
        follow_us: "Suivez-nous",
        book: "Livre des Réclamations",
        polites1:"Concept by SalesUp © Copyright - Active Up. Tous droits réservés.",
        polites2:"Politique de Confidentialité"
    }
};


function setLanguage(lang) {
    document.getElementById('home').textContent = translations[lang].home;
    document.querySelector('a[href="./index.belmonte.html"]').textContent = translations[lang].belmonte;
    document.querySelector('a[href="../Quartos1/index.quartos1.html"]').textContent = translations[lang].room1 + " 1";
    document.querySelector('a[href="../Quartos2/index.quartos2.html"]').textContent = translations[lang].room2 + " 2";
    document.querySelector('a[href="../Quartos3/index.quartos3.html"]').textContent = translations[lang].room3 + " 3";
    document.querySelector('a[href="../Quartos4/index.quartos4.html"]').textContent = translations[lang].room4 + " 4";
    document.querySelector('a[href="../Quartos5/index.quartos5.html"]').textContent = translations[lang].room5 + " 5";
    document.querySelector('a[href="../Cozinha/index.cozinha.html"]').textContent = translations[lang].kitchen;
    document.querySelector('a[href="../Galeria/index.galeria.html"]').textContent = translations[lang].gallery;
    document.querySelector('a[href="../Testemunhos/index.testemunhos.html"]').textContent = translations[lang].testimonials;
    document.querySelector('a[href="../Contactos/index.contactos.html"]').textContent = translations[lang].contacts;
    document.querySelector('a[href="../Como chegar/index.chegar.html"]').textContent = translations[lang].location;
    document.querySelector('a[href="../Reservar/index.reservar.html"]').textContent = translations[lang].reserve;

    // Atualizar o texto da seção principal
    document.getElementById('welcome_text').textContent = translations[lang].welcome_text;
    document.getElementById('paragraph_text').textContent = translations[lang].paragraph_text;
    document.getElementById('rooms').textContent = translations[lang].rooms;

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