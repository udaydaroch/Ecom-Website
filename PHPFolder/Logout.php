<?php
// Start the session
session_start();

// Unset all of the session variables
$_SESSION = array();

// Destroy the session
session_destroy();

echo json_encode(['user_logged_out' => true]);
// Redirect to the login page after logout
header("Location: /Website-project/HTMLFolder/index.html");
exit();
?>
