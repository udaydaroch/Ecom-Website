var ClothingCard = 0;
document.addEventListener("DOMContentLoaded", function () {
  
  const cardContainer = document.getElementById("cardContainer");
  cardContainer.style.display = "flex";
  cardContainer.style.flexDirection = "column";
  const numberOfCards = 6;

  for (let i = 0; i < numberOfCards; i++) {
    const card = document.createElement("div");
    card.className = "card";

    const button = document.createElement("button");
    button.textContent = "View More";
    button.className = "viewButton";
    button.addEventListener("click", function () {
      hideCards();
    });

    const button_2 = document.createElement("button");
    button_2.textContent = "Purchase";
    button_2.className = "viewButton";

    card.appendChild(button);
    card.appendChild(button_2);
    cardContainer.appendChild(card);
  }

  function hideCards() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
      card.style.display = "none"; // Set display to none
    });
    if (ClothingCard < 1) { 

        const card = document.createElement("div");
        card.className = "productcard";
        cardContainer.appendChild(card);
        ClothingCard = 1;

  }

    const newButton = document.createElement("button");
    const parentContainer =  document.createElement("div");
    parentContainer.style.flexDirection = "row";
    parentContainer.style.display = "flex";
    parentContainer.className = "horizontal-pic-container"; 
    for (let i = 0; i < 3; i++) {
      const childDiv = document.createElement("div");
      childDiv.className = "photos";
      childDiv.textContent = (i + 1);

      parentContainer.appendChild(childDiv);
    }
    cardContainer.appendChild(parentContainer);
    newButton.textContent = "Show All";
    newButton.className = "BackButton";
    newButton.addEventListener("click", function () {
      showAllCards();
      cardContainer.removeChild(newButton); 
      cardContainer.removeChild(parentContainer);
    });

    cardContainer.appendChild(newButton);
  }

  function showAllCards() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.style.display = ""; 
    });

    const additionalCard = document.querySelector('.productcard');
    if (additionalCard) {
      cardContainer.removeChild(additionalCard);
      ClothingCard = 0;
    }
  }
});
