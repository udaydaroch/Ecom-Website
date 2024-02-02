<?php

require_once("connection.php");

session_start();

if(isset($_SESSION['user_authenticated']) && $_SESSION['user_authenticated'] === true) {
    $username = $_SESSION['username'];
    echo $username;
  }
?>