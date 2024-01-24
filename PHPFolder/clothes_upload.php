<?php
require_once('connection.php');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
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

    // Generate a unique filename for the image
    $imageName = uniqid('img_') . '.png';
    $imageContent = file_get_contents($_FILES["clothingImage"]["tmp_name"]);
    // Specify the path where the image will be saved
$imagePath = 'Prefabs/' . $clothingType . '/' . $imageName;

// Create the directory if it doesn't exist
if (!file_exists('Prefabs/' . $clothingType)) {
    mkdir('Prefabs/' . $clothingType, 0777, true);
}

// Save the image to the specified path
file_put_contents($imagePath, $imageContent);


    // Insert data into the database, including the image name
    $sql = "INSERT INTO clothing (img, clothing_name, clothing_description, clothing_type, 
                                    clothing_size_xs, price_size_xs, 
                                    clothing_size_s, price_size_s, 
                                    clothing_size_m, price_size_m, 
                                    clothing_size_l, price_size_l, 
                                    clothing_size_xl, price_size_xl, 
                                    clothing_size_xxl, price_size_xxl)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

    $stmt = $conn->prepare($sql);

    if ($stmt) {
        // Bind parameters
        $stmt->bind_param("ssssssssssssssss", $imagePath, $clothingName, $clothingDescription, $clothingType,
        $sizeXS, $priceXS,
        $sizeS, $priceS,
        $sizeM, $priceM,
        $sizeL, $priceL,
        $sizeXL, $priceXL,
        $sizeXXL, $priceXXL);

        // Execute the statement
        if ($stmt->execute()) {
            echo "New record created successfully";
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
