<?php 
require_once('connection.php');

$firstName = $_POST['firstName'];
$lastName = $_POST['lastName'];
$Email = $_POST['Email'];
$phone = $_POST['phone'];
$username = $_POST['userName'];
$password = $_POST['password'];
$gender = $_POST['gender'];

$sql = "INSERT INTO user_info (firstName, lastName, Email, phone, userName, password, gender) 
        VALUES ('$firstName', '$lastName', '$Email', '$phone', '$username', '$password', '$gender')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();

?>