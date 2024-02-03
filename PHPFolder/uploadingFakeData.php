<?php

require("connection.php"); 

$userId = 9;
$clothingId = 54;
$purchaseDate = date('Y-m-d H:i:s'); 
$clothingSize = 'M'; 
$clothingPrice = 75; 
$deliveryType = 'D';

$query = "INSERT INTO user_purchases (user_id, clothing_id, purchase_date, clothing_Size, clothing_price, deliveryTYPE)
          VALUES (?, ?, ?, ?, ?, ?)";

$stmt = $conn->prepare($query);

if (!$stmt) {
    die("Error preparing statement: " . $mysqli->error);
}

$stmt->bind_param('iissis', $userId, $clothingId, $purchaseDate, $clothingSize, $clothingPrice, $deliveryType);

$result = $stmt->execute();

if (!$result) {
    die("Error executing statement: " . $stmt->error);
}

$stmt->close();

echo "Sample data inserted successfully.";

?>
