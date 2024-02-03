<?php
require_once("connection.php");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];

   
    $username = htmlspecialchars(strip_tags($username));

    
    $stmt = $conn->prepare("SELECT * FROM user_info WHERE userName = ?");
    $stmt->bind_param("s", $username);

    $stmt->execute();

    $result = $stmt->get_result();

    if ($result->num_rows === 1) {
        
        $userDetails = $result->fetch_assoc();

        // Verify password
        if (password_verify($password, $userDetails['password'])) {
            // Password is correct, set session variables for user authentication and role
            session_start();
            $_SESSION['user_authenticated'] = true;
            $_SESSION['username'] = $userDetails['userName'];

            // Redirect to the dashboard
            header("Location: /Website-project/HTMLFolder/Dashboard.html");
            exit(); // Make sure to exit after sending the header to prevent further execution
        } else {
            // Invalid password
            echo "Invalid username or password";
        }
    } else {
        // User not found
        echo "Invalid username or password";
    }

    $stmt->close();
}

$conn->close();
?>