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
  
    const parentContainer = document.createElement("div");
    parentContainer.style.flexDirection = "row";
    parentContainer.style.display = "flex";
    parentContainer.className = "horizontal-pic-container";
    for (let i = 0; i < 3; i++) {
      const childDiv = document.createElement("div");
      childDiv.className = "photos";
      childDiv.textContent = (i + 1);
      parentContainer.appendChild(childDiv);
    }
  
    const table = document.createElement("table");
    table.className = "table";
    const headerRow = document.createElement("tr");
    const header1 = document.createElement("th");
    const header2 = document.createElement("th");
    const header3 = document.createElement("th");
  
    headerRow.appendChild(header1);
    headerRow.appendChild(header2);
    headerRow.appendChild(header3);
  
    table.appendChild(headerRow);
  
    for (let i = 1; i <= 3; i++) {
      const dataRow = document.createElement("tr");
      const cell1 = document.createElement("td");
      cell1.textContent = "Row " + i + ", Column 1";
      cell1.style.fontSize = "17px"; // Set font size for the cell
      const cell2 = document.createElement("td");
      cell2.textContent = "Row " + i + ", Column 2";
      cell2.style.fontSize = "17px"; // Set font size for the cell
      const cell3 = document.createElement("td");
      cell3.textContent = "Row " + i + ", Column 3";
      cell3.style.fontSize = "17px"; // Set font size for the cell
  
      dataRow.appendChild(cell1);
      dataRow.appendChild(cell2);
      dataRow.appendChild(cell3);
  
      table.appendChild(dataRow);
    }
  
    const tableContainer = document.createElement("div");
    tableContainer.style.flexDirection = "column";
    tableContainer.style.display = "flex";
    tableContainer.appendChild(table);
  
    cardContainer.appendChild(parentContainer);
    cardContainer.appendChild(tableContainer);
  
    const newButton = document.createElement("button");
    newButton.textContent = "Back";
    newButton.className = "BackButton";
    cardContainer.appendChild(newButton);
    newButton.addEventListener("click", function () {
      showAllCards();
      cardContainer.removeChild(newButton);
      cardContainer.removeChild(parentContainer);
      cardContainer.removeChild(tableContainer);
    });
  
    
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
