console.log("Starting");

document.getElementById("cardForm").addEventListener("submit", function(event) {
    event.preventDefault();

//  Valores del formulario:

let name = document.getElementById("name").value;
let title = document.getElementById("title").value;
let contact = document.getElementById("contact").value;

//JSON:
let cardData = {
    name: name,
    title, title,
    contact: contact
}

let cardDataJson = JSON.stringify(cardData);

// LocalStorage:

localStorage.setItem("cardData", cardDataJson);

generateCard();

});

// Generar tarjeta:

function generateCard() {
    let cardDataJson = localStorage.getItem("cardData");
    
    if(cardDataJson) {
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

        // Agregamos la tarjeta en el contenedor:
        let cardContainer = document.getElementById("cardContainer");
        cardContainer.innerHTML = "";
        cardContainer.appendChild(card);
    }
}

generateCard();