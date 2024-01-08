<?php

$host = "localhost:3306"; //MySQL server address
$username = "root"; //MySQL username
$password = "HOWTOma12"; //MySQL password
$database = "nebula_clothing"; //MySQL database name

$conn = new mysqli($host, $username, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$firstName = $_POST['firstName'];
$lastName = $_POST['lastName'];
$Email = $_POST['Email'];
$phone = $_POST['phone'];
$username = $_POST['userName'];
$rawPassword = $_POST['password'];
$gender = $_POST['gender'];

// Validate input (we can add more validation if needed)
if (empty($firstName) || empty($lastName) || empty($Email) || empty($phone) || empty($username) || empty($rawPassword) || empty($gender)) {
    die("Please fill in all the fields.");
}

// Prepared statements to prevent SQL injection
$sql = $conn->prepare("INSERT INTO user_info (firstName, lastName, Email, phone, userName, password, gender) 
                      VALUES (?, ?, ?, ?, ?, ?, ?)");

// Hash the password
$hashedPassword = password_hash($rawPassword, PASSWORD_DEFAULT);

$sql->bind_param("sssssss", $firstName, $lastName, $Email, $phone, $username, $hashedPassword, $gender);

if ($sql->execute()) {
    echo "New record created successfully";
} else {
    echo "Error: Unable to create a new record.";
    error_log("Error: " . $sql . "\n" . $conn->error); // Log the error for debugging
}

// Close connection
$sql->close();
$conn->close();
?>
