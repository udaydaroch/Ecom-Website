<?php

$host = "127.0.0.1"; // Your MySQL server address
$username = "root"; // Your MySQL username
$password = ""; // Your MySQL password
$database = "nebula_clothing"; // Your MySQL database name

$conn = new mysqli($host, $username, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
