<?php

require_once("connection.php");

// Check if 'id' parameter is provided
if (!isset($_GET['id'])) {
  echo json_encode(['error' => 'Product ID not provided']);
  exit;
}

$productId = $_GET['id'];

// Use prepared statement to prevent SQL injection
$query = "SELECT * FROM clothing WHERE id = ?";
$stmt = mysqli_prepare($conn, $query);

if (!$stmt) {
  echo json_encode(['error' => 'Failed to prepare statement']);
  exit;
}

// Bind the parameter to the prepared statement
mysqli_stmt_bind_param($stmt, "i", $productId);

// Execute the statement
$result = mysqli_stmt_execute($stmt);

if (!$result) {
  echo json_encode(['error' => 'Failed to execute statement']);
  exit;
}

// Get the result set
$resultSet = mysqli_stmt_get_result($stmt);

// Fetch the row as an associative array
$product = mysqli_fetch_assoc($resultSet);

if (!$product) {
  echo json_encode(['error' => 'Product not found']);
  exit;
}

// Return the product details as JSON
echo json_encode($product);

// Close the statement
mysqli_stmt_close($stmt);

// Close the connection
mysqli_close($conn);

?>
