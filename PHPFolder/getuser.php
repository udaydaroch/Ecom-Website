<?php

session_start();

$userRole = 'Guest'; // Default role for users not logged in
$userAuthenticated = null;

if (isset($_SESSION["user_authenticated"])) {
    $userAuthenticated = $_SESSION["user_authenticated"];
    if ($userAuthenticated) {
        $userRole = ($_SESSION["username"] == "Uday") ? "admin" : "Normal User";
    }
}

$response = ["user_authenticated" => $userAuthenticated, "userRole" => $userRole];

// If the user is not logged in, set the user_logged_out flag
if (!$userAuthenticated) {
    $response["user_logged_out"] = true;
}

// Clear the flag after using it
unset($_SESSION["user_logged_out"]);

echo json_encode($response);
?>
