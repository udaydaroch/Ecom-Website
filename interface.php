<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nebular Clothing</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }

        /* Login Card Styles */
        .LoginCard {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 60%;
            min-height: 400px;
            margin: 20px auto;
            background: linear-gradient(135deg, #3498db, #9b59b6);
            color: #ecf0f1;
            border-radius: 12px;
            box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
        }

        .LoginCardInside {
            width: 80%;
            max-height: 400px;
            overflow-y: auto;
            overflow-x: auto;
            padding: 40px;
            background: linear-gradient(135deg, #2c3e50, #34495e);
            border-radius: 12px;
            box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.3);
        }

        /* Product Interface Styles */
        .product-interface {
            margin: 20px auto;
            padding: 20px;
            background-color: #ffffff;
            box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
            border-radius: 8px;
        }

        .product-details {
            display: flex;
            justify-content: space-between;
        }

        .product-photo img {
            width: 30%;
            border-radius: 8px;
        }

        .product-info {
            width: 65%;
        }

        /* MySQL Links Styles */
        .mysql-links {
            text-align: center;
            margin: 20px 0;
        }

        .mysql-links a {
            text-decoration: none;
            color: #3498db;
            font-weight: bold;
            font-size: 18px;
            margin: 0 10px;
        }

        /* Dashboard Styles */
        .dashboard {
            margin: 20px auto;
            padding: 20px;
            background-color: #ffffff;
            box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
            border-radius: 8px;
        }

        .dashboard h2 {
            margin-bottom: 20px;
        }

        .booked-items,
        .purchased-items,
        .cancel-booking {
            margin-bottom: 20px;
        }

        .booked-items ul,
        .purchased-items ul {
            list-style: none;
            padding: 0;
        }

        .booked-items li,
        .purchased-items li {
            margin-bottom: 10px;
        }

        .purchased-items a {
            text-decoration: none;
            color: #3498db;
            font-weight: bold;
        }

        .cancel-booking button {
            padding: 10px 20px;
            background-color: #e74c3c;
            color: #fff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
        }

        .cancel-booking button:hover {
            background-color: #c0392b;
        }
    </style>
</head>

<body>

    <!-- Login Card Section -->
    <div class="LoginCard">
        <div class="LoginCardInside">
            <!-- Existing content for login card -->
            <h2>Login</h2>
            <!-- Add your login form and other content here -->
        </div>
    </div>

    <!-- Product Interface Section -->
    <div class="product-interface">
        <h2>Product Interface</h2>
        <div class="product-details">
            <div class="product-photo">
                <!-- Show 3 photos of the product -->
                <img src="product_photo1.jpg" alt="Product Photo 1">
                <img src="product_photo2.jpg" alt="Product Photo 2">
                <img src="product_photo3.jpg" alt="Product Photo 3">
            </div>
            <div class="product-info">
                <!-- Name, size, cost, total number, and total number at a specific size -->
                <h3>Product Name</h3>
                <!-- Button to prompt the customer for their size -->
                <button onclick="askForSize()">Select Your Size</button>
                
                <!-- Placeholder for displaying selected size -->
                <p id="selectedSize">Selected Size: Not chosen</p>
            <p>Size: Small</p>
            <p>Cost: $50.00</p>
            <p>Total Available: 100</p>
            <p>Total Available (Small): 10</p> <!-- Section for small size -->
            
            <p>Size: Medium</p>
            <p>Cost: $50.00</p>
            <p>Total Available: 100</p>
            <p>Total Available (Medium): 30</p> <!-- Section for medium size -->
            
            <p>Size: Large</p>
            <p>Cost: $50.00</p>
            <p>Total Available: 100</p>
            <p>Total Available (Large): 15</p> <!-- Section for large size -->
            </div>
        </div>
    </div>

    <!-- MySQL Login and Signup Links -->
    <div class="mysql-links">
        <a href="#mysql-login">Login to MySQL</a>
        <span> | </span>
        <a href="#mysql-signup">Signup to MySQL</a>
    </div>

    <!-- Dashboard Section -->
    <div class="dashboard">
        <h2>User Dashboard</h2>
        <div class="booked-items">
            <h3>Booked Items</h3>
            <!-- Display booked items here -->
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
            </ul>
        </div>
        <div class="purchased-items">
            <h3>Purchased Items</h3>
            <!-- Display purchased items here with a link to the online receipt -->
            <ul>
                <li><a href="#receipt1">Item 1</a></li>
                <li><a href="#receipt2">Item 2</a></li>
            </ul>
        </div>
        <div class="cancel-booking">
            <!-- Button to cancel the current booking -->
            <button onclick="cancelBooking()">Cancel Current Booking</button>
        </div>
    </div>

    <!-- Placeholder for product content -->

    <script>
        // Example function to simulate canceling a booking
        function cancelBooking() {
            alert("Booking canceled!");
        }

        // Function to prompt the customer for their size
        function askForSize() {
            // You can implement a modal, form, or other UI to gather the size from the customer
            // For simplicity, this example uses a prompt dialog
            var size = prompt("Please enter your size (Small, Medium, Large):");
            
            // Display the selected size
            var selectedSizeElement = document.getElementById("selectedSize");
            selectedSizeElement.textContent = "Selected Size: " + size;
        }
    </script>
</body>

</html>
