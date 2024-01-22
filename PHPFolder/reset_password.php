<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

// Load Composer's autoloader
require 'C:\WebsiteProject\Website-project\vendor\autoload.php';

function send_password_reset($get_name, $get_email, $token) {
    $mail = new PHPMailer(true);

    $mail->isSMTP();
    $mail->SMTPAuth = true;
    $mail->Host = 'smtp.gmail.com';
    $mail->Username = 'stupid@gmail.com';
    $mail->Password = '***';  // Replace with your actual SMTP password

    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS; // oler::ENCRYPTION_SMTPS
    $mail->Port = 587; // or 465

    $mail->setFrom('stupid@gmail.com', $get_name);
    $mail->addAddress($get_email);
    $mail->isHTML(true);

    $mail->Subject = 'Password Reset Notification';
    $mail_template = "<h2>HELLO</h2>
                    <h3>You are receiving this email because we received a password reset request for your account.</h3>
                    <br/><br/>
                    $token";
    $mail->Body = $mail_template;

    try {
        $mail->send();
        echo 'sent';
        exit(1);
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
        exit(0);
    }
}

session_start();
include_once('connection.php');

if (isset($_POST['password-reset_link'])) {
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $token = md5(uniqid(rand(), true));
    $check = "SELECT firstName, Email FROM user_info WHERE Email='$email' LIMIT 1";
$check_email = mysqli_query($conn, $check);

if ($check_email === false) {
    // Handle query error
    echo "Query error: " . mysqli_error($conn);
    exit(0);
}

if (mysqli_num_rows($check_email) > 0) {
    $row = mysqli_fetch_array($check_email);
    $get_f_name = $row["firstName"];
    $get_email = $row['Email'];
    send_password_reset($get_f_name, $get_email, $token);
    $_SESSION['status'] = 'We emailed the link';
    echo 'sent';
    exit(1);

} else {
    $_SESSION['status'] = "No email found";
    echo 'not found';
    exit(0);
}

} else {
    $_SESSION['status'] = "Invalid request";
    echo 'invalid request';
    exit(0);
}

?>
