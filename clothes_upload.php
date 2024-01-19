<?php
include 'connection.php';

function sanitizeInput($data) {
  return htmlspecialchars(strip_tags($data));
}


$clothTitle = sanitizeInput($_POST['clothTitle']);
$clothName = sanitizeInput($_POST['clothName']);
$description = sanitizeInput($_POST['description']);
$price = sanitizeInput($_POST['price']);
$sizeAvailable = sanitizeInput(implode(', ', $_POST['sizeAvailable'])); // Assuming you want to store sizes as a comma-separated string



// Use prepared statement to prevent SQL injection
$sql = "INSERT INTO clothing (clothImage, clothTitle, clothName, description, price, sizeAvailable, totalAvailable, quantityExtraSmall, quantitySmall, quantityMedium, quantityLarge, quantityExtraLarge, quantityExtraExtraLarge) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

  $stmt = $conn->prepare($sql);

  $totalAvailable = sanitizeInput($_POST['totalAvailable']);
  $quantityExtraSmall = sanitizeInput($_POST['quantityExtraSmall']);
  $quantitySmall = sanitizeInput($_POST['quantitySmall']);
  $quantityMedium = sanitizeInput($_POST['quantityMedium']);
  $quantityLarge = sanitizeInput($_POST['quantityLarge']);
  $quantityExtraLarge = sanitizeInput($_POST['quantityExtraLarge']);
  $quantityExtraExtraLarge = sanitizeInput($_POST['quantityExtraExtraLarge']);

  $stmt->bind_param("ssssdsssssss", $clothImage, $clothTitle, $clothName, $description, $price, $sizeAvailable, $totalAvailable, $quantityExtraSmall, $quantitySmall, $quantityMedium, $quantityLarge, $quantityExtraLarge, $quantityExtraExtraLarge);

  if ($stmt->execute()) {
      echo "New record created successfully";
  } else {
      echo "Error: " . $sql . "<br>" . $conn->error;
  }

  $stmt->close();


$conn->close();

?>
