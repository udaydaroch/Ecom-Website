<?php 
require_once('connection.php');

$firstName = $_POST['firstName'];
$lastName = $_POST['lastName'];
$Email = $_POST['Email'];
$phone = $_POST['phone'];
$username = $_POST['userName'];
$password = $_POST['password']; // Plain-text password

// Hash the password
$hashedPassword = password_hash($password, PASSWORD_DEFAULT);

$gender = $_POST['gender'];

// Check if username, email, and phone are unique
$checkQuery = "SELECT * FROM user_info WHERE userName = '$username' OR Email = '$Email' OR phone = '$phone'";
$checkResult = $conn->query($checkQuery);

if ($checkResult->num_rows > 0) {
    // Display error message and stop further execution
    echo "Error: Username, Email, or Phone number already exists.";
} else {
    // Insert the new record into the database
    $sql = "INSERT INTO user_info (firstName, lastName, Email, phone, userName, password, gender) 
            VALUES ('$firstName', '$lastName', '$Email', '$phone', '$username', '$hashedPassword', '$gender')";

    if ($conn->query($sql) === TRUE) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

$conn->close();
?>
