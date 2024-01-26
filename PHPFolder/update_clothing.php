<?php
require_once('connection.php');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $productId = $_POST['productId'];
    $clothingName = $_POST["updateclothingName"];
    $clothingDescription = $_POST["updateclothingDescription"];
    $clothingType = $_POST["updateclothingType"];
    $isAvailable = $_POST["updateisAvailable"]; // Retrieve the product availability
    $sizeXS = $_POST["updatesizeXS"];
    $priceXS = $_POST["updatepriceXS"];
    $sizeS = $_POST["updatesizeS"];
    $priceS = $_POST["updatepriceS"];
    $sizeM = $_POST["updatesizeM"];
    $priceM = $_POST["updatepriceM"];
    $sizeL = $_POST["updatesizeL"];
    $priceL = $_POST["updatepriceL"];
    $sizeXL = $_POST["updatesizeXL"];
    $priceXL = $_POST["updatepriceXL"];
    $sizeXXL = $_POST["updatesizeXXL"];
    $priceXXL = $_POST["updatepriceXXL"];

    // Update clothing details in the database
    $sql = "UPDATE clothing SET 
                clothing_name = ?,
                clothing_description = ?,
                clothing_type = ?,
                isAvailable = ?,  -- Add the new column for product availability
                clothing_size_xs = ?,
                price_size_xs = ?,
                clothing_size_s = ?,
                price_size_s = ?,
                clothing_size_m = ?,
                price_size_m = ?,
                clothing_size_l = ?,
                price_size_l = ?,
                clothing_size_xl = ?,
                price_size_xl = ?,
                clothing_size_xxl = ?,
                price_size_xxl = ?
            WHERE id = ?";

    $stmt = $conn->prepare($sql);

    if ($stmt) {
        // Bind parameters
        $stmt->bind_param("ssssssssssssssssi",
            $clothingName,
            $clothingDescription,
            $clothingType,
            $isAvailable,
            $sizeXS,
            $priceXS,
            $sizeS,
            $priceS,
            $sizeM,
            $priceM,
            $sizeL,
            $priceL,
            $sizeXL,
            $priceXL,
            $sizeXXL,
            $priceXXL,
            $productId);

        // Execute the statement
        if ($stmt->execute()) {
            echo "Clothing details updated successfully";
        } else {
            echo "Error: " . $stmt->error;
        }

        // Close the statement
        $stmt->close();
    } else {
        echo "Error preparing statement: " . $conn->error;
    }

    $conn->close();
}
?>
