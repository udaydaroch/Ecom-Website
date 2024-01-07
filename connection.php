<?php

$host = "localhost:3306"; // Your MySQL server address
$username = "root"; // Your MySQL username
$password = "HOWTOma12"; // Your MySQL password
$database = "nebula_clothing"; // Your MySQL database name

$conn = new mysqli($host, $username, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$firstName = $_POST['firstName'];
$lastName = $_POST['lastName'];
$Email = $_POST['Email'];
$phone = $_POST['phone'];
$username = $_POST['userName'];
$password = $_POST['password'];
$gender = $_POST['gender'];

$sql = "INSERT INTO user_info (firstName, lastName, Email, phone, userName, password, gender) 
        VALUES ('$firstName', '$lastName', '$Email', '$phone', '$username', '$password', '$gender')";

// Execute query
if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Close connection
$conn->close();
?>
