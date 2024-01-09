<?php

$host = "localhost:3306"; // MySQL server address
$db_username = "root"; // MySQL username
$db_password = "HOWTOma12"; // MySQL password
$database = "nebula_clothing"; // MySQL database name

$conn = new mysqli($host, $db_username, $db_password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$firstName = $_POST['firstName'];
$lastName = $_POST['lastName'];
$Email = $_POST['Email'];
$phone = $_POST['phone'];
$userFromForm = $_POST['userName'];
$rawPassword = $_POST['password'];
$gender = $_POST['gender'];

// Validate input (you can add more validation if needed)
if (empty($firstName) || empty($lastName) || empty($Email) || empty($phone) || empty($userFromForm) || empty($rawPassword) || empty($gender)) {
    die("Please fill in all the fields.");
}

// Prepared statements to prevent SQL injection
$sql = $conn->prepare("INSERT INTO user_info (firstName, lastName, Email, phone, userName, password, gender) 
                      VALUES (?, ?, ?, ?, ?, ?, ?)");

// Hash the password
$hashedPassword = password_hash($rawPassword, PASSWORD_DEFAULT);

$sql->bind_param("sssssss", $firstName, $lastName, $Email, $phone, $userFromForm, $hashedPassword, $gender);

if ($sql->execute()) {
    echo "New record created successfully";
} else {
    echo "Error: Unable to create a new record. " . $sql->error;
    error_log("Error: " . $sql->error); // Log the error for debugging
}

// Close connection
$sql->close();
$conn->close();
?>
<!-- Replace the placeholder values in $host, $db_username, $db_password, and $database with the actual MySQL server details.--> 
