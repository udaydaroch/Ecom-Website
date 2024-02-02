

function loadDeliveryOrders() {
  clearSections();
  
  const filterSection = document.getElementById("filterSection");
  
  filterSection.innerHTML = `
  <div class="row justify-content-center">
  <div class="card" style="max-width: 1000px;">
    <div class="card-body">
      <h3 class="card-title">Delivery Orders Filters</h3>
      
      <div>
        <label for="orderDate">Order Date:</label>
        <select id="orderDate" class="form-select">
          <option value="12months">Orders within 12 Months</option>
          <option value="current">Current Orders</option>
        </select>
      </div>
      
      <div class="mt-3">
      <div class="row justify-content-center"> 
        <button id="applyFiltersButton" style="max-width: 200px;" class="btn btn-primary">Apply Filters</button>
        </div>
      </div>
    </div>
  </div>
  </div>
`;
const applyFiltersButton = document.querySelector('#applyFiltersButton');
applyFiltersButton.addEventListener('click', () => {
    // Call the currentOrder.php endpoint
    fetch('/Website-project/PHPFolder/currentOrder.php')
        .then(response => response.text())
        .then(data => {
            // Populate the table with the data returned from the server
            const tableBody = document.querySelector('#tableSection tbody');
            tableBody.innerHTML = data;
        })
        .catch(error => {
            console.error('Error fetching current orders:', error);
        });
});
  // Load table content for delivery orders
  const tableSection = document.getElementById("tableSection");
  tableSection.innerHTML = `
      <h2>Delivery Orders Table</h2>
      <table id="deliveryTable" class="table">
          <thead>
              <tr>
                  <!-- Add table headers based on user_info and clothing columns -->
              </tr>
          </thead>
          <tbody>
              <!-- Dynamically load table content using JavaScript and fetch data from the server -->
          </tbody>
      </table>
  `;

}

function loadPickupOrders() {
  clearSections();

  // Load filter content for pickup orders
  const filterSection = document.getElementById("filterSection");
  filterSection.innerHTML = `
      <h3>Pickup Orders Filters</h3>
      <!-- Add your filter options here -->
  `;

  // Load table content for pickup orders
  const tableSection = document.getElementById("tableSection");
  tableSection.innerHTML = `
      <h2>Pickup Orders Table</h2>
      <table id="pickupTable" class="table">
          <thead>
              <tr>
                  <!-- Add table headers based on user_info and clothing columns -->
              </tr>
          </thead>
          <tbody>
              <!-- Dynamically load table content using JavaScript and fetch data from the server -->
          </tbody>
      </table>
  `;
  // Add code to fetch and populate data for the table from the server
}

function loadQueries() {
  clearSections();

  // Load filter content for queries
  const filterSection = document.getElementById("filterSection");
  filterSection.innerHTML = `
      <h3>Queries Filters</h3>
      <!-- Add your filter options here -->
  `;

  // Load table content for queries
  const tableSection = document.getElementById("tableSection");
  tableSection.innerHTML = `
      <h2>Queries Table</h2>
      <table id="queriesTable" class="table">
          <thead>
              <tr>
                  <!-- Add table headers based on user_info and clothing columns -->
              </tr>
          </thead>
          <tbody>
              <!-- Dynamically load table content using JavaScript and fetch data from the server -->
          </tbody>
      </table>
  `;
  // Add code to fetch and populate data for the table from the server
}

function clearSections() {
  // Clear filter and table sections
  const filterSection = document.getElementById("filterSection");
  const tableSection = document.getElementById("tableSection");
  filterSection.innerHTML = "";
  tableSection.innerHTML = "";
}

