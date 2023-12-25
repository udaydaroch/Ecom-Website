<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Nebula Clothing</title>
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <!-- Include Bootstrap or other styling frameworks if needed -->
    <style>
        /* Global Styles */
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f8f9fa;
        }

        /* ... Your existing styles ... */

        /* Media Query for Responsive Design */
        @media (max-width: 768px) {
            /* Add your responsive styles here */
        }
    </style>
</head>
<body>

    <!-- Navigation Bar -->
    <nav class="navbar navbar-expand-lg navbar-dark">
        <!-- ... Your existing navigation bar code ... -->
    </nav>

    <h2>Nebula Clothing - Login or Sign Up</h2>
    <div class="form-container">
        <div class="form">
            <!-- Login Form -->
            <form action="login_process.php" method="post">
                <h3>Login</h3>
                <label for="login-username">Username:</label>
                <input type="text" name="login-username" required>
                <label for="login-password">Password:</label>
                <input type="password" name="login-password" required>
                <input type="submit" value="Login" class="btn btn-primary custom-login-button">
            </form>

            <!-- Registration Form -->
            <form action="register_process.php" method="post">
                <h3>Sign Up</h3>
                <label for="register-username">Username:</label>
                <input type="text" name="register-username" required>
                <label for="register-password">Password:</label>
                <input type="password" name="register-password" required>
                <input type="submit" value="Sign Up" class="btn btn-primary custom-login-button">
            </form>
        </div>
    </div>

    <!-- Include your custom JavaScript files for additional functionality -->
    <script src="js/script.js"></script>
    <!-- Include Bootstrap or other JavaScript libraries if needed -->
</body>
</html>
