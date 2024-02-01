


document.addEventListener("DOMContentLoaded", function () {
const continuePurchaseBtn = document.getElementById('continuePurchaseBtn');
    continuePurchaseBtn.addEventListener('click', function () {
        const totalAmount = parseFloat(document.querySelector('.Total-Amount').textContent.slice(15));
        if (totalAmount > 0) {
            window.location.href = '/Website-project/HTMLFolder/PurchaseOptions.html';
        }
    });
});

function updateTotalAmount() {
  let totalAmount = 0;
  const rows = document.querySelectorAll('#shoppingCartBody .row');
  rows.forEach(row => {
      const totalPriceCell = row.querySelector('.col:last-of-type');
      const totalPrice = parseFloat(totalPriceCell.textContent.slice(1));
      totalAmount += totalPrice;
  });

  const totalAmountElement = document.querySelector('.Total-Amount');
  totalAmountElement.textContent = `Total Amount: $${totalAmount.toFixed(2)}`;
  updateBadge();
}

function addProductToCart() {
  let existingData = localStorage.getItem("myData");
  let products = existingData ? JSON.parse(existingData) : [];

  let shoppingCartBody = document.getElementById('shoppingCartBody');

  // Check if shoppingCartBody exists, if not, create it
  if (!shoppingCartBody) {
      shoppingCartBody = document.createElement('div');
      shoppingCartBody.id = 'shoppingCartBody';
      document.body.appendChild(shoppingCartBody);
  }

  products.forEach(product => {
      // Create a new row for each product
      const newRow = document.createElement('div');
      newRow.classList.add('row', 'mb-3');
      newRow.innerHTML = `
          <div class="col">${product.name}</div>
          <div class="col">${product.size}</div>
          <div class="col">$${product.price}</div>
          <div class="col">
              <button class="btn btn-sm btn-primary decrement-btn">-</button>
              <input type="text" class="form-control quantity-input" value="${product.quantity}" min="0" readonly>
              <button class="btn btn-sm btn-primary increment-btn">+</button>
          </div>
          <div class="col">$${(product.price * product.quantity).toFixed(2)}</div>
      `;

      // Append the new row to the shopping cart
      shoppingCartBody.appendChild(newRow);

      // Attach event listeners to the increment and decrement buttons
      const incrementBtn = newRow.querySelector('.increment-btn');
      const decrementBtn = newRow.querySelector('.decrement-btn');
      incrementBtn.addEventListener('click', () => incrementQuantity(newRow));
      decrementBtn.addEventListener('click', () => decrementQuantity(newRow));
      
    });
    updateTotalAmount();
    updateBadge();
}

function incrementQuantity(row) {
    const quantityInput = row.querySelector('.quantity-input');
    let quantity = parseInt(quantityInput.value);
    quantity++;
    quantityInput.value = quantity;

    // Update the total price
    updateTotalPrice(row);

    // Update the quantity in localStorage
    const productName = row.querySelector('.col:first-of-type').textContent;
    const productSize = row.querySelector('.col:nth-of-type(2)').textContent;
    let existingData = localStorage.getItem("myData");
    let products = existingData ? JSON.parse(existingData) : [];
    const existingProductIndex = products.findIndex(product => product.name === productName && product.size === productSize);
    if (existingProductIndex !== -1) {
        products[existingProductIndex].quantity = quantity;
        localStorage.setItem("myData", JSON.stringify(products)); // Use localStorage here
    }
    updateBadge();

}

function decrementQuantity(row) {
    const quantityInput = row.querySelector('.quantity-input');
    let quantity = parseInt(quantityInput.value);
    if (quantity > 1) {
        quantity--;
        quantityInput.value = quantity;

        updateTotalPrice(row);

        const productName = row.querySelector('.col:first-of-type').textContent;
        const productSize = row.querySelector('.col:nth-of-type(2)').textContent;
        let existingData = localStorage.getItem("myData");
        let products = existingData ? JSON.parse(existingData) : [];
        const existingProductIndex = products.findIndex(product => product.name === productName && product.size === productSize);
        if (existingProductIndex !== -1) {
            products[existingProductIndex].quantity = quantity;
            localStorage.setItem("myData", JSON.stringify(products)); // Use localStorage here
        }
    } else {
        // If quantity becomes 0, remove the product row
        const rowIndex = Array.from(row.parentNode.children).indexOf(row);
        row.remove();
        // Remove the corresponding product from local storage
        removeProductFromCart(rowIndex);
    }
    updateTotalAmount();
    updateBadge();
}


function removeProductFromCart(index) {
  let existingData = localStorage.getItem("myData");
  let products = existingData ? JSON.parse(existingData) : [];
  products.splice(index, 1);
  localStorage.setItem("myData", JSON.stringify(products));
  updateTotalAmount();
  updateBadge();
}



function updateTotalPrice(row) {
    const quantityInput = row.querySelector('.quantity-input');
    const priceCell = row.querySelector('.col:nth-of-type(3)');
    const pricePerItem = parseFloat(priceCell.textContent.slice(1));
    const quantity = parseInt(quantityInput.value);
    const totalPrice = pricePerItem * quantity;
    row.querySelector('.col:last-of-type').textContent = "$"+totalPrice.toFixed(2);
    updateTotalAmount();
    updateBadge();
}

