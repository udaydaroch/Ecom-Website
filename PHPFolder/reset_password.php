<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

// Load Composer's autoloader
require 'C:\xampp\htdocs\WebsiteProject\Website-project\vendor\autoload.php';

function send_password_reset($get_name, $get_email, $token) {
    $mail = new PHPMailer(true);

    $mail->isSMTP();
    $mail->SMTPAuth = true;
    $mail->Host = 'smtp.gmail.com';
    $mail->Username = 'UdayDaroch@gmail.com';
    $mail->Password = 'mlpgquhwcdjlhkpx';  // Replace with your actual SMTP password

    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS; // or PHPMailer::ENCRYPTION_SMTPS
    $mail->Port = 587; // or 465

    $mail->setFrom('UdayDaroch@gmail.com', $get_name);
    $mail->addAddress($get_email);
    $mail->isHTML(true);

    $mail->Subject = 'Password Reset Notification';
    $mail_template = "<h2>Hello, </h2>
                    <h3>You are receiving this email because we received a password reset request for your account.</h3>
                    <br/><br/>
                    <a href='http://localhost:3000/Website-project/HTMLFolder/resetPasswordPage.php?token=$token&email=$get_email'> Click me</a>
                    ";
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

if (isset($_POST['password_reset_link'])) {
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

    $update_token="UPDATE user_info SET passwordToken='$token' where email='$get_email'";
    $update_token_run = mysqli_query($conn, $update_token);
    if ($update_token_run) {
        send_password_reset($get_f_name, $get_email, $token);
        $_SESSION['status'] = 'We emailed the link';
        echo 'sent';
        exit(1);
    }
    else {
        $_SESSION['status'] = "No email found";
        echo 'not found';
        exit(0);
    }
} else {
    $_SESSION['status'] = "Invalid request";
    echo 'invalid request';
    exit(0);
}

} 


if(isset($_POST['confirm_press'])) {
    $email=mysqli_real_escape_string($conn,$_POST['email']);
    $new_password=mysqli_real_escape_string($conn,$_POST['newPassword']);
    $confirm_new_password=mysqli_real_escape_string($conn,$_POST['confirmNewPassword']);
    $token = mysqli_real_escape_string($conn, $_POST['password_token']);

    if (!empty($token)) {
        if(!empty($email) && !empty($new_password) && !empty($confirm_new_password)  ) {
                $check_token="SELECT passwordToken FROM user_info WHERE passwordToken='$token' LIMIT 1";
                $check_token_run = mysqli_query($conn, $check_token);
                if (mysqli_num_rows($check_token_run) > 0) {
                    if($new_password == $confirm_new_password) {
                        $hashedNewPassword = password_hash($new_password, PASSWORD_DEFAULT);
                        $update_password = "UPDATE user_info SET password='$hashedNewPassword' WHERE passwordToken='$token' LIMIT 1";
                        $update_password_run = mysqli_query($conn,$update_password);
                        if($update_password_run) {
                            $_SESSION['status'] = "password has successfully being changed";
                            header("Location: http://localhost:3000/Website-project/HTMLFolder/Login.html");
                            exit(0);
                        }
                    } else {
                        $_SESSION['status'] = "password and confirm Password does not match";
                        echo "passwords not matching";
                    }
            } else {
                $_SESSION['status'] = "All fields are Mandetory";
                echo 'token + email';
                exit(0);
            }
        }
    } else {
        $_SESSION['status'] = "No Token Available";
        echo 'invalid request';
        exit(0);
    }

}

?>
