document.addEventListener("DOMContentLoaded", function () {
  const paginationContainer = document.getElementById("pagination");
  const wishlistContainer = document.getElementById("listOfItemSelected");
  const counterContainer = document.getElementById("totalamount");

  const numRows = 2;
  const cardsPerRow = 10;

  function addToCartHandler() {
    const card = this.closest('.card');
    const itemName = card.dataset.itemName;

    // Check if the item is already in the wishlist
    const existingItem = Array.from(wishlistContainer.children).find(
      (item) => item.dataset.itemName === itemName
    );

    if (existingItem) {
      // If the item already exists, just increment its count
      const count = parseInt(existingItem.dataset.count, 10) + 1;
      updateWishlistItem(existingItem, itemName, count);
    } else {
      // If the item doesn't exist, create a new list item
      const wishlistItem = createWishlistItem(itemName, 1);
      wishlistContainer.appendChild(wishlistItem);
    }
    updateCounter();
  }

  function createWishlistItem(itemName, count, existingItem) {
    const wishlistItem = existingItem || document.createElement("ul");
    wishlistItem.dataset.itemName = itemName;
    wishlistItem.dataset.count = count;

    const incrementButton = document.createElement("button");
    incrementButton.className = "incrementbutton";
    incrementButton.textContent = "+";
    incrementButton.addEventListener("click", function () {
      const newCount = parseInt(wishlistItem.dataset.count, 10) + 1;
      wishlistItem.dataset.count = newCount;
      updateWishlistItem(wishlistItem, itemName, newCount);
      updateCounter();
    });

    const decrementButton = document.createElement("button");
    decrementButton.className = "decrementbutton";
    decrementButton.textContent = "-";
    decrementButton.addEventListener("click", function () {
      const newCount = parseInt(wishlistItem.dataset.count, 10) - 1;
      if (newCount >= 0) {
        wishlistItem.dataset.count = newCount;
        updateWishlistItem(wishlistItem, itemName, newCount);
        updateCounter();
      }
    });

  
    wishlistItem.innerHTML = '';

    wishlistItem.appendChild(decrementButton);
    wishlistItem.appendChild(document.createTextNode(`(${(count)})`));
    wishlistItem.appendChild(incrementButton);
    wishlistItem.appendChild(document.createTextNode(`${itemName}`));
    

    return wishlistItem;
  }

  function updateWishlistItem(wishlistItem, itemName, count) {
    if(count == 0) {
      wishlistItem.parentElement.removeChild(wishlistItem);
    } else {
      createWishlistItem(itemName, count, wishlistItem);
    }
  }

  function updateCounter() {
    const totalItems = Array.from(wishlistContainer.children).reduce(
      (total, item) => total + parseInt(item.dataset.count, 10),
      0
    );

    // Update the counter display
    counterContainer.textContent = `Total Items: ${totalItems}`;
  }

  for (let i = 0; i < numRows; i++) {
    const rowDiv = document.createElement("div");
    rowDiv.className = "card-row";

    for (let j = 0; j < cardsPerRow; j++) {
      const cardDiv = document.createElement("div");
      cardDiv.className = "card";
      cardDiv.dataset.itemName = `Item ${i * cardsPerRow + j + 1}`;

      const viewButton = document.createElement("button");
      viewButton.className = "button";
      viewButton.textContent = "View";

      const addButton = document.createElement("button");
      addButton.className = "button";
      addButton.textContent = "Add to Cart";
      addButton.addEventListener("click", addToCartHandler);

      cardDiv.appendChild(viewButton);
      cardDiv.appendChild(addButton);
      rowDiv.appendChild(cardDiv);
    }

    paginationContainer.appendChild(rowDiv);
  }
});
