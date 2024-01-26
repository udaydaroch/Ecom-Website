<?php
require_once('connection.php');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $productId = $_POST["productId"];
    $clothingName = $_POST["clothingName"];
    $clothingDescription = $_POST["clothingDescription"];
    $clothingType = $_POST["clothingType"];
    $sizeXS = $_POST["sizeXS"];
    $priceXS = $_POST["priceXS"];
    $sizeS = $_POST["sizeS"];
    $priceS = $_POST["priceS"];
    $sizeM = $_POST["sizeM"];
    $priceM = $_POST["priceM"];
    $sizeL = $_POST["sizeL"];
    $priceL = $_POST["priceL"];
    $sizeXL = $_POST["sizeXL"];
    $priceXL = $_POST["priceXL"];
    $sizeXXL = $_POST["sizeXXL"];
    $priceXXL = $_POST["priceXXL"];

    // Update clothing details in the database
    $sql = "UPDATE clothing SET 
                clothing_name = ?,
                clothing_description = ?,
                clothing_type = ?,
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
        $stmt->bind_param("sssssssssssssssi",
            $clothingName,
            $clothingDescription,
            $clothingType,
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
