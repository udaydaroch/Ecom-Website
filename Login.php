<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Nebula Clothing</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <style>
        /*Global Styles*/ 
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f8f9fa;
        }

        /* Navigation Bar Styles */
        nav {
            background-color: #343a40;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            padding: 10px 0;
        }

        .navbar-brand img {
            max-height: 40px;
        }

        .navbar-toggler {
            border: none;
            outline: none;
            color: #fff;
        }

        .navbar-toggler-icon {
            background-color: #fff;
        }

        .navbar-nav .nav-link {
            color: #fff;
            font-weight: bold;
            margin: 0 15px;
            transition: color 0.3s;
        }

        .navbar-nav .nav-link:hover {
            color: #ff3366;
        }

        /* Form Styles */
        h2 {
            color: #343a40;
            text-align: center;
            padding: 20px 0;
        }

        .form-container {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 75vh;
        }

        .form {
            background-color: #fff;
            border-radius: 10px;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
            padding: 40px;
            width: 400px;
            max-width: 100%;
        }

        label {
            display: block;
            margin-bottom: 10px;
            color: #343a40;
        }

        input[type="text"],
        input[type="password"] {
            width: 100%;
            padding: 12px;
            margin-bottom: 20px;
            border: 1px solid #ced4da;
            border-radius: 5px;
            background-color: #f8f9fa;
            color: #495057;
        }

        input[type="submit"] {
            background-color: #ff3366;
            color: white;
            padding: 15px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s;
        }

        input[type="submit"]:hover {
            background-color: #e02958;
        }
    </style>
</head>
<body>

    <!-- Navigation Bar -->
    <nav class="navbar navbar-expand-lg navbar-dark">
        <a class="navbar-brand" href="index.php">
            <img src="img/nebula_logo.png" width="120" height="40" alt="Nebula Clothing Logo">
        </a>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="index.php">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="products.php">Products</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="about.php">About Us</a>
                </li>
                <!-- Add more navigation items as needed -->

                <!-- Search Form -->
                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
                </form>
            </ul>

            <!-- Login and Register Buttons -->
            <a href="login.php" class="btn btn-light ml-2 custom-login-button">Login</a>
        </div>
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

            <!--Registration Form-->
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

    
    <script src="js/script.js"></script>
    
</body>
</html>
