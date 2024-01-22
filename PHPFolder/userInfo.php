<?php
// Include your database connection file
include_once('connection.php');

// Assuming you have a table named 'users'
$query = "SELECT * FROM user_info";
$result = mysqli_query($conn, $query);

if (!$result) {
    die("Query failed: " . mysqli_error($conn));
}

$data = array();

while ($row = mysqli_fetch_assoc($result)) {
    $data[] = $row;
}

// Encode the data as JSON to be used in JavaScript
echo json_encode($data);

// Close the database connection
mysqli_close($conn);
?>
