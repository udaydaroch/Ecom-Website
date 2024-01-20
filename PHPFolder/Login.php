<?php
require_once("connection.php");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // sSanitize user inputs
    $username = htmlspecialchars(strip_tags($username));
    $password = htmlspecialchars(strip_tags($password));

    // Use prepared statement to prevent SQL injection
    $stmt = $conn->prepare("SELECT * FROM user_info WHERE userName = ? AND password = ?");
    $stmt->bind_param("ss", $username, $password);

    $stmt->execute();

    $result = $stmt->get_result();

    if ($result->num_rows === 1) {
        // Valid username and password, fetch user details
        $userDetails = $result->fetch_assoc();

        // Set session variables for user authentication and role
        session_start();
        $_SESSION['user_authenticated'] = true;
        $_SESSION['username'] = $userDetails['userName']; // Correct key here

        // Redirect to the dashboard
        header("Location: /Website-project/HTMLFolder/dashboard.html");
        exit(); // Make sure to exit after sending the header to prevent further execution
    } else {
        // Invalid username or password
        echo "Invalid username or password";
    }

    $stmt->close();
}

$conn->close();
?>