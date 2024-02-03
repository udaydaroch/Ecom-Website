<?php

session_start();
require("connection.php");
if (isset($_SESSION['user_authenticated']) && $_SESSION['user_authenticated'] === true) {
$username = $_SESSION["username"];
$query = "SELECT id FROM user_info WHERE username = ?";
$stmt = $conn->prepare($query);

if (!$stmt) {
    die("Error preparing statement: " . $conn->error);
}
$stmt->bind_param('s', $username);
$stmt->execute();
$stmt->bind_result($userId);
$stmt->fetch();
$stmt->close();
}
else {
    $userId = null;
} 



$clothingId = $_POST["clothing_id"];
$purchaseDate = date('Y-m-d H:i:s');
$clothingSize = $_POST["clothingSize"];
$clothingPrice = $_POST["clothingPrice"];
$deliveryType = $_POST["orderTYPE"]; // Assuming "pickupDelivery" corresponds to "orderTYPE"

$query = "INSERT INTO user_purchases (user_id, clothing_id, purchase_date, clothing_Size, clothing_price, orderTYPE)
          VALUES (?, ?, ?, ?, ?, ?)";

$stmt = $conn->prepare($query);

if (!$stmt) {
    die("Error preparing statement: " . $conn->error);
}

$stmt->bind_param('iissis', $userId, $clothingId, $purchaseDate, $clothingSize, $clothingPrice, $deliveryType);

$result = $stmt->execute();

if (!$result) {
    die("Error executing statement: " . $stmt->error);
}

$stmt->close();

echo "Data inserted successfully.";

?>
