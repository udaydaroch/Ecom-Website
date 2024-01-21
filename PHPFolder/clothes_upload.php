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

    $targetDir = "C:/WebsiteProject/Website-project/Prefabs/";
    $targetFile = $targetDir . basename($_FILES["clothingImage"]["name"]);
    $uploadOk = 1;
    $imageFileType = strtolower(pathinfo($targetFile, PATHINFO_EXTENSION));

    if (isset($_POST["submit"])) {
        $check = getimagesize($_FILES["clothingImage"]["tmp_name"]);
        if ($check === false) {
            echo "File is not an image.";
            $uploadOk = 0;
        }
    }

    // Check file size
    if ($_FILES["clothingImage"]["size"] > 10000000) {
        echo "Sorry, your file is too large.";
        $uploadOk = 0;
    }

    // Allow certain file formats
    $allowedFormats = array("jpg", "jpeg", "png", "gif");
    if (!in_array($imageFileType, $allowedFormats)) {
        echo "Sorry, only JPG, JPEG, PNG, GIF files are allowed.";
        $uploadOk = 0;
    }

    // Check if $uploadOk is set to 0 by an error
    if ($uploadOk == 0) {
        echo "Sorry, your file was not uploaded.";
    } else {
        if (move_uploaded_file($_FILES["clothingImage"]["tmp_name"], $targetFile)) {
            // File uploaded successfully, now insert data into the database
            $imagePath = $targetFile;

            $sql = "INSERT INTO clothing (image, clothing_name, clothing_description, clothing_type, 
                                            clothing_size_xs, price_size_xs, 
                                            clothing_size_s, price_size_s, 
                                            clothing_size_m, price_size_m, 
                                            clothing_size_l, price_size_l, 
                                            clothing_size_xl, price_size_xl, 
                                            clothing_size_xxl, price_size_xxl)
                    VALUES ('$imagePath', '$clothingName', '$clothingDescription', '$clothingType', 
                            $sizeXS, $priceXS, 
                            $sizeS, $priceS, 
                            $sizeM, $priceM, 
                            $sizeL, $priceL, 
                            $sizeXL, $priceXL, 
                            $sizeXXL, $priceXXL)";

            if ($conn->query($sql) === TRUE) {
                echo "New record created successfully";
            } else {
                echo "Error: " . $sql . "<br>" . $conn->error;
            }
        } else {
            echo "Sorry, there was an error uploading your file.";
        }
    }

    $conn->close();
}
?>
