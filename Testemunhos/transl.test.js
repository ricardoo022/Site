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

        title:"TESTEMUNHOS",
        text1:"Gostamos muito do apartamento, localização, limpeza e sobretudo da atenção que a Isabel e Cristina tiveram connosco. Também de ressalvar que o responsável foi bastante atencioso, pois a nosso pedido forneceram o pequeno almoço mais cedo e permitiram check-out tardio.",
        text2:"Que lugar maravilhoso! A cama era super confortável e todo o lugar é muito elegante. A localização é muito conveniente, a alguns quarteirões da praia, perto de restaurantes, e o autocarro e metro estão ao virar da esquina. Quando retornar a Casa Rietsch será a minha primeira escolha.",
        text3:" O quarto estava particularmente bem decorado, impecável, camas deliciosas e um chuveiro unidimensional. O bairro é super divertido, perto da praia. Saímos na manhã seguinte cedo para o aeroporto, por isso infelizmente ficamos apenas 1 noite, mas certamente gostamos de voltar!",

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

        title:"TESTIMONIES",
        text1:"We really liked the apartment, its location, cleanliness and above all the attention that Isabel and Cristina gave us. It is also worth mentioning that the person in charge was very attentive, as at our request they provided breakfast earlier and allowed us to check out late.",
        text2:"What a wonderful place! The bed was super comfortable and the whole place is very stylish. The location is very convenient, a few blocks from the beach, close to restaurants, and the bus and metro are just around the corner. When I return Casa Rietsch will be my first choice.",
        text3:"The room was particularly well decorated, spotless, delicious beds and a one-dimensional shower. The neighborhood is super fun, close to the beach. We left early the next morning for the airport, so unfortunately we only stayed 1 night, but we would certainly come back!",
       
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

        title:"TESTIMONIOS",
        text1:"Nos gustó mucho el apartamento, la ubicación, la limpieza y sobre todo la atención que nos brindaron Isabel y Cristina. Cabe destacar también que la persona encargada fue muy atenta, ya que a petición nuestra nos facilitaron el desayuno más temprano y permitieron el check-out más tarde.",
        text2:"¡Qué lugar tan maravilloso! La cama era súper cómoda y todo el lugar es muy elegante. La ubicación es muy conveniente, a pocas cuadras de la playa, cerca de restaurantes y el autobús y el metro están a la vuelta de la esquina. Cuando regrese, Casa Rietsch será mi primera opción.",
        text3:" La habitación estaba particularmente bien decorada, impecable, camas deliciosas y una ducha unidimensional. El barrio es súper divertido, cerca de la playa. Salimos temprano a la mañana siguiente hacia el aeropuerto, así que desafortunadamente solo nos quedamos una noche, ¡pero ciertamente disfrutamos regresar!",

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
        contact_us: "Contactez-nous",

        title:"TÉMOIGNAGES",
        text1:"Nous avons beaucoup aimé l'appartement, l'emplacement, la propreté et surtout l'attention qu'Isabel et Cristina nous ont apportée. Il convient également de noter que le responsable a été très attentif car, à notre demande, il a fourni le petit-déjeuner plus tôt et a autorisé un départ tardif.",
        text2:"Quel endroit merveilleux ! Le lit était super confortable et tout l'endroit est très élégant. L'emplacement est très pratique, à quelques pâtés de maisons de la plage, à proximité des restaurants, et le bus et le métro sont juste au coin de la rue. À mon retour, la Casa Rietsch sera mon premier choix.",
        text3:"La chambre était particulièrement bien décorée, impeccable, des lits délicieux et une douche unidimensionnelle. Le quartier est super sympa, proche de la plage. Nous sommes partis tôt le lendemain matin pour l'aéroport, donc malheureusement nous ne sommes restés qu'une nuit, mais nous avons certainement apprécié de revenir !",
    
        follow_us: "Suivez-nous",
        book: "Livre des Réclamations",
        polites1:"Concept by SalesUp © Copyright - Active Up. Tous droits réservés.",
        polites2:"Politique de Confidentialité"
    }
};


function setLanguage(lang) {
    document.getElementById('home').textContent = translations[lang].home;
    document.querySelector('a[href="../Belmonte/index.belmonte.html"]').textContent = translations[lang].belmonte;
    document.querySelector('a[href="../Quartos1/index.quartos1.html"]').textContent = translations[lang].room1 + " 1";
    document.querySelector('a[href="../Quartos2/index.quartos2.html"]').textContent = translations[lang].room2 + " 2";
    document.querySelector('a[href="../Quartos3/index.quartos3.html"]').textContent = translations[lang].room3 + " 3";
    document.querySelector('a[href="../Quartos4/index.quartos4.html"]').textContent = translations[lang].room4 + " 4";
    document.querySelector('a[href="../Quartos5/index.quartos5.html"]').textContent = translations[lang].room5 + " 5";
    document.querySelector('a[href="../Cozinha/index.cozinha.html"]').textContent = translations[lang].kitchen;
    document.querySelector('a[href="../Galeria/index.galeria.html"]').textContent = translations[lang].gallery;
    document.querySelector('a[href="./index.testemunhos.html"]').textContent = translations[lang].testimonials;
    document.querySelector('a[href="../Contactos/index.contactos.html"]').textContent = translations[lang].contacts;
    document.querySelector('a[href="../Como chegar/index.chegar.html"]').textContent = translations[lang].location;
    document.querySelector('a[href="../Reservar/index.reservar.html"]').textContent = translations[lang].reserve;

    // Atualizar o texto da seção principal
    document.getElementById('rooms').textContent = translations[lang].rooms;
    document.getElementById('text1').textContent = translations[lang].text1;
    document.getElementById('text2').textContent = translations[lang].text2;
    document.getElementById('text3').textContent = translations[lang].text3;
    document.getElementById('title').textContent = translations[lang].title;



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