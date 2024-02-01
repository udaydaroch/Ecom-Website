<?php

require_once("connection.php");

session_start();

if(isset($_SESSION['user_authenticated']) && $_SESSION['user_authenticated'] === true) {
    $username = $_SESSION['username'];

    if(isset($_POST['updateEmail'])) {
        $newEmail = mysqli_escape_string($conn,$_POST['newEmail']);
        if(!empty($newEmail)) {
            
            $checkEmailStmt = $conn->prepare("SELECT Email FROM user_info WHERE userName=?");
            $checkEmailStmt->bind_param("s", $username);
            $checkEmailStmt->execute();
            $checkEmailResult = $checkEmailStmt->get_result();
            $currentEmail = $checkEmailResult->fetch_assoc()['Email'];

            if($currentEmail === $newEmail) {
                echo "The entered email is the same as the current email.";
            } else {
             
                $updateEmailStmt = $conn->prepare("UPDATE user_info SET Email=? WHERE userName=?");
                $updateEmailStmt->bind_param("ss", $newEmail, $username);
                
                if ($updateEmailStmt->execute()) {
                    echo "Email updated successfully.";
                } else {
                    echo "Error updating email: " . $conn->error;
                }
                
                $updateEmailStmt->close();
            }
            
            $checkEmailStmt->close();
        } else {
            echo "Email is empty.";
        }
    } else if(isset($_POST['updatePhoneNumber'])) {
      $newPhone = mysqli_escape_string($conn,$_POST['newPhoneNumber']);
      if(!empty($newPhone)) {
        
          $checkPhoneStmt = $conn->prepare("SELECT Phone FROM user_info WHERE userName=?");
          $checkPhoneStmt->bind_param("s", $username);
          $checkPhoneStmt->execute();
          $checkPhoneResult = $checkPhoneStmt->get_result();
          $currentPhone = $checkPhoneResult->fetch_assoc()['Phone'];

          if($currentPhone === $newPhone) {
              echo "The entered phone number is the same as the current one.";
          } else {
              
              $updatePhoneStmt = $conn->prepare("UPDATE user_info SET Phone=? WHERE userName=?");
              $updatePhoneStmt->bind_param("ss", $newPhone, $username);
              
              if ($updatePhoneStmt->execute()) {
                  echo "Phone number updated successfully.";
              } else {
                  echo "Error updating phone number: " . $conn->error;
              }
              
              $updatePhoneStmt->close();
          }
          
          $checkPhoneStmt->close();
      } else {
          echo "Phone number is empty.";
      }
  } else if(isset($_POST['updatePassword'])) {
    $newPassword = mysqli_escape_string($conn,$_POST['newPassword']);
    $confirmNewPassword = mysqli_escape_string($conn,$_POST['confirmNewPassword']);
    $username = $_SESSION['username'];

    if(!empty($newPassword) && !empty($confirmNewPassword)) {
        if($newPassword === $confirmNewPassword) {
            
            $stmt = $conn->prepare("SELECT password FROM user_info WHERE userName=?");
            $stmt->bind_param("s", $username);
            $stmt->execute();
            $result = $stmt->get_result();
            $row = $result->fetch_assoc();
            $currentPassword = $row['password'];
            $stmt->close();

            
            if (!password_verify($newPassword, $currentPassword)) {
                
                $hashedNewPassword = password_hash($newPassword, PASSWORD_DEFAULT);
                
                $updatePasswordStmt = $conn->prepare("UPDATE user_info SET password=? WHERE userName=?");
                $updatePasswordStmt->bind_param("ss", $hashedNewPassword, $username);
                
                if ($updatePasswordStmt->execute()) {
                    echo "Password updated successfully.";
                } else {
                    echo "Error updating password: " . $conn->error;
                }
                
                $updatePasswordStmt->close();
            } else {
                echo "Please choose a different password from your current password.";
            }
        } else {
            echo "New password and confirm password do not match.";
        }
    } else {
        echo "New password or confirm password is empty.";
    }

}
}else {
  echo "User is not logged in.";
}
 

?>
