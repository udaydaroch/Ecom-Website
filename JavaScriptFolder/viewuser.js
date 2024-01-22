function fetchData() {
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
          var userData = JSON.parse(xhr.responseText);
          populateTable(userData);
      }
  };

  xhr.open("GET", "/website-project/PHPFolder/userinfo.php", true);
  xhr.send();
}

// Function to populate the table with dynamic data
function populateTable(userData) {
  var tableBody = document.getElementById("userTable").getElementsByTagName('tbody')[0];

  for (var i = 0; i < userData.length; i++) {
      var row = tableBody.insertRow(i);
      row.innerHTML = "<td>" + userData[i].id + "</td>" +
                      "<td>" + userData[i].firstName + "</td>" +
                      "<td>" + userData[i].lastName + "</td>" +
                      "<td>" + userData[i].Email + "</td>" +
                      "<td>" + userData[i].phone + "</td>" +
                      "<td>" + userData[i].userName + "</td>" +
                      "<td>" + userData[i].password + "</td>" +
                      "<td>" + userData[i].gender + "</td>";
  }
}

window.onload = fetchData;