<?php
require_once('connection.php');

$sql = null;
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $productId = $_POST['productIdToRemove'];

    if (isset($_POST['deletePermanently'])) {
        // If the "Remove Permanently" button is clicked
        $sql = "DELETE FROM clothing WHERE id = ?";
        $message = "Product removed permanently.";
    } elseif (isset($_POST['makeUnavailable'])) {
        // If the "Make the product unavailable" button is clicked
        $sql = "UPDATE clothing SET isAvailable = 'no' WHERE id = ?";
        $message = "Product is now unavailable.";
    }

    $stmt = $conn->prepare($sql);

    if ($stmt) {
        $stmt->bind_param("i", $productId);
        if ($stmt->execute()) {
            echo $message;
        } else {
            echo "Error: " . $stmt->error;
        }
        $stmt->close();
    } else {
        echo "Error preparing statement: " . $conn->error;
    }

    $conn->close();
}
?>
