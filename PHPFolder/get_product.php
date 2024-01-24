<?php

require_once('connection.php');
$sql = "SELECT id, img, clothing_name, clothing_description, clothing_type FROM clothing";
$result = $conn->query($sql);

if (!$result) {
    die("Error: " . $conn->error);
}

$data = [];

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
}

$conn->close();

header('Content-Type: application/json');
echo json_encode($data);
?>
