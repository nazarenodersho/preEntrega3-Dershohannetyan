console.log("Starting");

let generatedCard;

document.getElementById("cardForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Valores del formulario:
    let name = document.getElementById("name").value;
    let title = document.getElementById("title").value;
    let contact = document.getElementById("contact").value;

    // JSON:
    let cardData = {
        name: name,
        title: title,
        contact: contact
    }

    let cardDataJson = JSON.stringify(cardData);

    // LocalStorage:
    localStorage.setItem("cardData", cardDataJson);

    generatedCard = generateCard();
    displayCard(generatedCard);
});

// Generar tarjeta:
function generateCard() {
    let cardDataJson = localStorage.getItem("cardData");

    if (cardDataJson) {
        let cardData = JSON.parse(cardDataJson);

        // Tarjeta de presentacion:
        let card = document.createElement("div");
        card.classList.add("card");

        let nameHeader = document.createElement("h2");
        nameHeader.textContent = cardData.name;

        let titleText = document.createElement("p");
        titleText.textContent = cardData.title;

        let contactText = document.createElement("p");
        contactText.textContent = cardData.contact;

        card.appendChild(nameHeader);
        card.appendChild(titleText);
        card.appendChild(contactText);

        return card;
    }
    return null;
}

// Mostrar tarjeta en el contenedor:
function displayCard(card) {
    if (card) {
        let cardContainer = document.getElementById("cardContainer");
        cardContainer.innerHTML = "";
        cardContainer.appendChild(card);
    }
}

// Obtener todas las tarjetas almacenadas en localStorage:
function getAllCards() {
    let cards = [];
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        let cardDataJson = localStorage.getItem(key);
        let cardData = JSON.parse(cardDataJson);
        cards.push(cardData);
    }
    return cards;
}

// Sort:

function sortCardsByNameAsc() {
    let cards = getAllCards();
    cards.sort((a, b) => a.name.localeCompare(b.name));
    return cards;
}

// Filter:

function filterCardsByTitle(filterText) {
    let cards = getAllCards();
    return cards.filter(card => card.title.toLowerCase().includes(filterText.toLowerCase()));
}

// Find:

function findCardByName(name) {
    let cards = getAllCards();
    return cards.find(card => card.name === name);
}

generateCard();