document.addEventListener("DOMContentLoaded", function () {
  // Function to get the selected products from local storage
  function getSelectedProducts() {
    return JSON.parse(localStorage.getItem("myData")) || [];
  }

  // Function to make the AJAX call for a product
  function submitProductToServer(product) {
    var formData = new FormData();
    console.log(product);
    var pickupDeliveryValue = document.getElementById("pickupDelivery").value;
    formData.append("orderTYPE", pickupDeliveryValue);
    formData.append("userId", product.id);
    formData.append("clothing_id", product.id); // Assuming clothingId is equivalent to productId
    formData.append("clothingSize", product.size);
    formData.append("clothingPrice", product.price);
    formData.append("orderTYPE", pickupDeliveryValue); // Corrected property name

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/Website-project/PHPFolder/Checkout.php", true);
    xhr.onload = function () {
      if (xhr.status == 200) {
        // Handle the response if needed
        console.log(xhr.responseText);
      } else {
        // Handle errors
        console.error("Error: " + xhr.status);
      }
    };
    xhr.send(formData);
  }

  // Add an event listener to the form submit button
  document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission
    console.log("clicked");
    // Iterate over selected products and make AJAX call for each
    var selectedProducts = getSelectedProducts();
    selectedProducts.forEach(function (product) {
      submitProductToServer(product);
    });
  });
});
