document.addEventListener("DOMContentLoaded", function () {
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

                // Create table rows for each size and price
                const sizePriceTable = document.getElementById('sizePriceTable');
                sizePriceTable.innerHTML = ''; // Clear previous content

                // Check each size and corresponding price
                if (data.clothing_size_xs > 0) {
                    addRowToTable('XS', parseFloat(data.price_size_xs), data.clothing_size_xs);                
                }
                if (data.clothing_size_s > 0) {
                    addRowToTable('S', parseFloat(data.price_size_s), data.clothing_size_s);
                }
                if (data.clothing_size_m > 0) {
                    addRowToTable('M', parseFloat(data.price_size_m), data.clothing_size_m);
                }
                if (data.clothing_size_l > 0) {
                    addRowToTable('L', parseFloat(data.price_size_l), data.clothing_size_l);
                }
                if (data.clothing_size_xl > 0) {
                    addRowToTable('XL', parseFloat(data.price_size_xl), data.clothing_size_xl);
                }
                if (data.clothing_size_xxl > 0) {
                    addRowToTable('XXL', parseFloat(data.price_size_xxl), data.clothing_size_xxl);
                }

                // Call updateSelectOptions after populating the table
                updateSelectOptions();
            })
            .catch(error => console.error('Error fetching product details:', error));
    }

    // Function to add a row to the sizePriceTable
    function addRowToTable(size, price, numberOfProducts) {
        const sizePriceTable = document.getElementById('sizePriceTable');
        const newRow = sizePriceTable.insertRow();
        newRow.innerHTML = `<td>${size}</td><td>$${price.toFixed(2)}</td><td>${numberOfProducts}</td>`;
    }

    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    // Call fetchProductDetails function with the extracted ID
    if (productId) {
        fetchProductDetails(productId);
    }

    document.getElementById('addToCartBtn').addEventListener('click', function () {
        // Get selected size and quantity
        const selectedSize = document.querySelector('.form-select').value;
        const quantity = parseInt(document.getElementById('quantity').value);
    
        // Find the row corresponding to the selected size
        const tableRows = document.querySelectorAll('#sizePriceTable tr');
        let selectedProduct = null;
        for (const row of tableRows) {
            const size = row.querySelector('td:first-of-type').textContent;
            if (size === selectedSize) {
                const productName = document.querySelector('.product-info h3').textContent;
                const pricePerItem = parseFloat(row.querySelector('td:nth-of-type(2)').textContent.substring(1));
    
                // Check if the product already exists in the cart
                let existingData = localStorage.getItem("myData");
                let products = existingData ? JSON.parse(existingData) : [];
                if (!Array.isArray(products)) {
                    products = [];
                }
                const existingProductIndex = products.findIndex(product => product.name === productName && product.size === selectedSize);
                if (existingProductIndex !== -1) {
                    // Product already exists, update quantity and total price
                    products[existingProductIndex].quantity += quantity;
                    products[existingProductIndex].price = pricePerItem ;
                } else {
                    // Product doesn't exist, add new entry
                    selectedProduct = {
                        name: productName,
                        size: selectedSize,
                        price: pricePerItem * quantity,
                        quantity: quantity
                    };
                    products.push(selectedProduct);
                }
    
                // Set the updated array of products back to localStorage
                localStorage.setItem("myData", JSON.stringify(products));
    
                // Log the updated data in localStorage
                console.log("Updated data in localStorage:", JSON.parse(localStorage.getItem('myData')));
    
                // Break the loop as we found the size
                break;
            } 
        }
        updateBadge();
    });
});

function updateSelectOptions() {
    const tableRows = document.querySelectorAll('#sizePriceTable tr');
    const selectElement = document.querySelector('.form-select');

    // Clear existing options
    selectElement.innerHTML = '';

    // Create an array to store unique sizes
    const availableSizes = [];

    // Add options based on table content
    tableRows.forEach(row => {
        const size = row.querySelector('td:first-of-type').textContent;
        if (!availableSizes.includes(size)) {
            availableSizes.push(size);
            const option = document.createElement('option');
            option.value = size;
            option.textContent = size;
            selectElement.appendChild(option);
        }
    });
}
