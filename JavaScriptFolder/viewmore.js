document.addEventListener("DOMContentLoaded", function () {
  // Function to fetch product details based on ID
  function fetchProductDetails(productId) {
      fetch(`/Website-project/PHPFolder/get_product_details.php?id=${productId}`)
          .then(response => {
              if (!response.ok) {
                  throw new Error('Network response was not ok');
              }
              return response.json();
          })
          .then(data => {
              // Update HTML elements with product details
              document.getElementById('bigProductImage').src = `/Website-project/PHPFolder/${data.img}`;
              document.querySelector('.product-info h3').textContent = data.clothing_name;
              document.querySelector('.product-info p:nth-of-type(1)').textContent = `Description: ${data.clothing_description}`;
              
          })
          .catch(error => console.error('Error fetching product details:', error));
  }

  // Extract the product ID from the URL
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id');

  // Call fetchProductDetails function with the extracted ID
  if (productId) {
      fetchProductDetails(productId);
  }
});
