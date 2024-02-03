document.addEventListener("DOMContentLoaded", function () {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
      if (xhr.readyState == 4) {
          if (xhr.status == 200) {
              var response = JSON.parse(xhr.responseText);
              var isGuestUser = response.user_authenticated === null || response.userRole === "Guest";

              if (!response.user_authenticated || isGuestUser) {
                  console.log('User not authenticated or is a guest. Redirecting to login page.');
                  window.location.href = '/Website-project/HTMLFolder/login.html';
              } else if (response.user_logged_out) {
                  console.log('User logged out. Undoing dashboard and redirecting to login page.');

                  window.location.href = '/Website-project/HTMLFolder/login.html';
              } else {
                console.log(window.location.pathname);
                if (window.location.pathname === "/Website-project/HTMLFolder/Dashboard.html") {
                  console.log('Generating dashboard for user role:', response.userRole);
                  userRole = response.userRole;
                  generateDashboard();
                }
              }
          } else {
              console.error('Error fetching user data. Redirecting to login page.');
              window.location.href = '/Website-project/HTMLFolder/login.html';
          }
      }
  };

  xhr.open("GET", "/Website-project/PHPFolder/getuser.php", true);
  xhr.send();
});
