function loadDeliveryOrders() {
  clearSections();

  // Load filter content for delivery orders
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
                          <option value="current">Current Orders (within a month)</option>
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

  // Add event listener to the apply filters button
  const applyFiltersButton = document.querySelector('#applyFiltersButton');
  applyFiltersButton.addEventListener('click', () => {
      // Get the selected option from the dropdown
      const selectedOption = document.querySelector('#orderDate').value;
      
      // Fetch data based on user's role and selected option
      fetch('/Website-project/PHPFolder/getUser.php')
          .then(response => response.json())
          .then(data => {
              if (data.user_authenticated) {
                  if (data.userRole === 'admin') {
                      // For admin users, call currentOrderAdmin.php
                      fetch(`/Website-project/PHPFolder/currentOrderAdmin.php?option=${selectedOption}&orderTYPE=D`)
                          .then(response => response.text())
                          .then(data => {
                              // Populate the table with the data returned from the server
                              const tableBody = document.querySelector('#tableSection tbody');
                              tableBody.innerHTML = data;
                          })
                          .catch(error => {
                              console.error('Error fetching current orders:', error);
                          });
                  } else {
                      // For non-admin users, call currentOrder.php
                      fetch(`/Website-project/PHPFolder/currentOrder.php?option=${selectedOption}`)
                          .then(response => response.text())
                          .then(data => {
                              // Populate the table with the data returned from the server
                              const tableBody = document.querySelector('#tableSection tbody');
                              tableBody.innerHTML = data;
                          })
                          .catch(error => {
                              console.error('Error fetching current orders:', error);
                          });
                  }
              } else {
                  console.log('User is not authenticated.');
              }
          })
          .catch(error => {
              console.error('Error fetching user data:', error);
          });
  });

  // Load table content for delivery orders
  const tableSection = document.getElementById("tableSection");
  tableSection.innerHTML = `
      <h2>Delivery Orders Table</h2>
      <table id="deliveryTable" class="table">
          <thead>
              <!-- Add table headers based on user_info and clothing columns -->
          </thead>
          <tbody>
              <!-- Dynamically load table content using JavaScript and fetch data from the server -->
          </tbody>
      </table>
  `;
}


function clearSections() {
  // Clear filter and table sections
  const filterSection = document.getElementById("filterSection");
  const tableSection = document.getElementById("tableSection");
  filterSection.innerHTML = "";
  tableSection.innerHTML = "";
}

