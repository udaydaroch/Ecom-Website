document.addEventListener("DOMContentLoaded", function () {
  const cardContainer = document.getElementById("cardContainer");
  const numberOfCards = 6;


  for (let i = 0; i < numberOfCards; i++) {
      const card = document.createElement("div");
      card.className = "card";
      const button = document.createElement("button");
      button.textContent = "view More";
      button.className = "viewButton"
      card.appendChild(button);
      cardContainer.appendChild(card);
  }
});