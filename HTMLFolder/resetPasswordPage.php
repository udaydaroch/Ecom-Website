<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nebular Clothing</title>
    <link rel="stylesheet" href="/Website-project/CSSFolder/bootstrap.css">
</head>

<body>
    <script>
        fetch('navbar.html')
            .then(response => response.text())
            .then(data => {
                document.body.insertAdjacentHTML('afterbegin', data);
            });
    </script>
    <br>
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <div class="card shadow p-3 mb-5 bg-white rounded">
                    <div class="card-body">
                        <h2 class="card-title">Password Reset</h2>
                        <form id="resetForm" action="/Website-project/PHPFolder/reset_password.php" method="POST">
                        <input type="text" name="password_token" value="<?php if(isset($_GET['token'])) {echo $_GET['token'];}?>">
                          <div class="mb-3">
                                <label for="email" class="form-label">Email address</label>
                                <input type="email" value="<?php if(isset($_GET['email'])) {echo$_GET['email'];}?>" class="form-control" id="email" name="email" required>
                            </div>
                            <div class="mb-3">
                                <label for="newPassword" class="form-label">New Password</label>
                                <input type="password" class="form-control" id="newPassword" name="newPassword" required>
                            </div>
                            <div class="mb-3">
                                <label for="confirmNewPassword" class="form-label">Re-enter Password</label>
                                <input type="password" class="form-control" id="confirmNewPassword" name="confirmNewPassword" required>
                            </div>
                            <button name="confirm_press" type="submit" class="btn btn-primary">Reset Password</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
        crossorigin="anonymous"></script>

</body>

</html>
