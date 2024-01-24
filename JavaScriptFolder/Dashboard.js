var userRole = "NUll";
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
                console.log('Generating dashboard for user role:', response.userRole);
                userRole = response.userRole;
                generateDashboard();
            }
        } else {
            console.error('Error fetching user data. Redirecting to login page.');
            window.location.href = '/Website-project/HTMLFolder/login.html';
        }
    }
};

xhr.open("GET", "/Website-project/PHPFolder/getuser.php", true);
xhr.send();



function undodashboard() {
  var dashboardContainer = document.getElementById('AdminControl');
  dashboardContainer.innerHTML = '';
}
function generateDashboard() {
  var dashboardContainer = document.getElementById('AdminControl');
  if (userRole == 'admin') {
    // Generate admin dashboard
    var adminData = [
      {
        imgSrc: "/Website-project/Prefabs/shirtLOGO.jpg",
        title: 'Product',
        description: 'Click below to upload a new product to the store.',
        buttonLabel: 'Manage Product',
        buttonClass: 'btn btn-outline-success',
        targetPage: '/Website-project/HTMLFolder/UploadProduct.html'
      },
      {
        imgSrc: "/Website-project/Prefabs/peopleLOGO.png",
        title: 'View Users',
        description: 'Explore and manage the list of registered users.',
        buttonLabel: 'View Users',
        buttonClass: 'btn btn-outline-primary',
        targetPage: '/Website-project/HTMLFolder/viewuser.html'
      },
      {
        imgSrc: "/Website-project/Prefabs/shoppingLOGO.png",
        title: 'View Current Orders',
        description: 'Check and manage the current orders placed by users.',
        buttonLabel: 'View Orders',
        buttonClass: 'btn btn-outline-info',
        targetPage: '/Website-project/HTMLFolder/currentOrder.html'
      },
      {
        imgSrc: "/Website-project/Prefabs/accounticon.png",
        title: 'Account Setting',
        description: 'Update account details.',
        buttonLabel: 'Account Setting',
        buttonClass: 'btn btn-outline-secondary',
        targetPage: '/Website-project/HTMLFolder/accountsetting.html'
      }
    ];
    generateCards(adminData, dashboardContainer);
  } else {
    // Generate user dashboard
    var userData = [
      {
        imgSrc: "/Website-project/Prefabs/shoppingLOGO.png",
        title: 'View Orders',
        description: 'Check and manage the orders.',
        buttonLabel: 'View Orders',
        buttonClass: 'btn btn-outline-info',
        targetPage: '/Website-project/HTMLFolder/currentOrder.html'
      },

      {
        imgSrc: "/Website-project/Prefabs/accounticon.png",
        title: 'Account Setting',
        description: 'Update account details.',
        buttonLabel: 'Account Setting',
        buttonClass: 'btn btn-outline-secondary',
        targetPage: '/Website-project/HTMLFolder/accountsetting.html'
      }
    ];
    generateCards(userData, dashboardContainer);
  }
}

function generateCards(data, container) {
  container.innerHTML = '';

  for (let i = 0; i < data.length; i++) {
    var colDiv = document.createElement('div');
    colDiv.className = 'col-lg-3 col-md-4 col-sm-6 offset-sm-0';

    var cardDiv = document.createElement('div');
    cardDiv.className = 'card mb-4 shadow-lg';

    var imgElement = document.createElement('img');
    imgElement.src = data[i].imgSrc;
    imgElement.className = 'img-fluid';

    var cardBodyDiv = document.createElement('div');
    cardBodyDiv.className = 'card-body';

    var cardTitleDiv = document.createElement('div');
    cardTitleDiv.className = 'card-title';

    var h2Element = document.createElement('h2');
    h2Element.textContent = data[i].title;

    var cardTextDiv = document.createElement('div');
    cardTextDiv.className = 'card-text';

    var pElement = document.createElement('p');
    pElement.textContent = data[i].description;

    var buttonDiv = document.createElement('div');
    buttonDiv.className = 'd-grid gap-3 col-3 mx-auto';

    var actionButton = document.createElement('button');
    actionButton.className = data[i].buttonClass;
    actionButton.type = 'button';
    actionButton.textContent = data[i].buttonLabel;

    // Add event listener to the button
    if (data[i].targetPage) {
      actionButton.addEventListener('click', function() {
        window.location.href = data[i].targetPage;
      });
    }

    cardTitleDiv.appendChild(h2Element);
    cardTextDiv.appendChild(pElement);
    buttonDiv.appendChild(actionButton);
    cardBodyDiv.appendChild(cardTitleDiv);
    cardBodyDiv.appendChild(cardTextDiv);
    cardBodyDiv.appendChild(buttonDiv);
    cardDiv.appendChild(imgElement);
    cardDiv.appendChild(cardBodyDiv);
    colDiv.appendChild(cardDiv);
    container.appendChild(colDiv);
  }
}
