<?php

require_once("connection.php");

session_start();

if (isset($_SESSION['user_authenticated']) && $_SESSION['user_authenticated'] === true) {
    $option = $_GET['option'];
    $TYPE = $_GET['orderTYPE'];
    $currentDate = date('Y-m-d H:i');

    if ($option === '12months') {
        $startDate = date('Y-m-d H:i', strtotime('-12 months', strtotime($currentDate)));
        $endDate = $currentDate;
    } elseif ($option === 'current') {
        $startDate = date('Y-m-d H:i', strtotime('-1 month', strtotime($currentDate)));
        $endDate = $currentDate;
    }

    $query = "SELECT * FROM user_purchases WHERE purchase_date BETWEEN ? AND ? AND orderTYPE = ? " ;
    
    $stmt = mysqli_prepare($conn, $query);
    $stmt->bind_param('sss', $startDate, $endDate,$TYPE);
    $stmt->execute();
    $result = $stmt->get_result();

    while ($row = $result->fetch_assoc()) {
        echo "Purchase ID: " . $row['id'] . ", User ID: " . $row['user_id'] . ", Purchase Date: " . $row['purchase_date'] . ", Clothing Size: " . $row['clothing_Size'] . "<br>";
    }

    $stmt->close();
}
?>
