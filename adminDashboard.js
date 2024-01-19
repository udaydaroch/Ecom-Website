function generateAdminCards() {
  var adminContainer = document.getElementById('AdminControl');
  
  // Data for admin cards
  var adminData = [
    {
      imgSrc: "shirtLOGO.jpg",
      title: 'Upload Product',
      description: 'Click below to upload a new product to the store.',
      buttonLabel: 'Upload Product',
      buttonClass: 'btn btn-outline-success',
      targetPage: 'UploadProduct.html' // Add the target page for this button
    },
    {
      imgSrc: "peopleLOGO.png",
      title: 'View Users',
      description: 'Explore and manage the list of registered users.',
      buttonLabel: 'View Users',
      buttonClass: 'btn btn-outline-primary',
      targetPage:'viewuser.html'
    },
    {
      imgSrc: "shoppingLOGO.png",
      title: 'View Current Orders',
      description: 'Check and manage the current orders placed by users.',
      buttonLabel: 'View Orders',
      buttonClass: 'btn btn-outline-info',
      targetPage:'currentOrder.html'
    }
  ];

  // Clear existing cards
  adminContainer.innerHTML = '';

  for (let i = 0; i < adminData.length; i++) {
    var colDiv = document.createElement('div');
    colDiv.className = 'col-lg-4 col-md-6 col-sm-12';

    var cardDiv = document.createElement('div');
    cardDiv.className = 'card mb-5 shadow-lg';

    var imgElement = document.createElement('img');
    imgElement.src = adminData[i].imgSrc;
    imgElement.className = 'img-fluid';

    var cardBodyDiv = document.createElement('div');
    cardBodyDiv.className = 'card-body';

    var cardTitleDiv = document.createElement('div');
    cardTitleDiv.className = 'card-title';

    var h2Element = document.createElement('h2');
    h2Element.textContent = adminData[i].title;

    var cardTextDiv = document.createElement('div');
    cardTextDiv.className = 'card-text';

    var pElement = document.createElement('p');
    pElement.textContent = adminData[i].description;

    var buttonDiv = document.createElement('div');
    buttonDiv.className = 'd-grid gap-2 col-6 mx-auto';

    var actionButton = document.createElement('button');
    actionButton.className = adminData[i].buttonClass;
    actionButton.type = 'button';
    actionButton.textContent = adminData[i].buttonLabel;

    // Add event listener to the button
    if (adminData[i].targetPage) {
      actionButton.addEventListener('click', function() {
        window.location.href = adminData[i].targetPage;
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
    adminContainer.appendChild(colDiv);
  }
}

generateAdminCards();

function updateQuantities() {

  // Get the selected sizes
  var selectedSizes = document.getElementsByName('sizeAvailable[]');

  // Loop through all quantity inputs and set their values to 0 and disable them
  var allQuantityInputs = document.querySelectorAll('[id^="quantity"]');
  for (var i = 0; i < allQuantityInputs.length; i++) {
      allQuantityInputs[i].value = 0;
      allQuantityInputs[i].disabled = true;
  }

  // Loop through selected sizes and enable the corresponding quantity input
  for (var i = 0; i < selectedSizes.length; i++) {
      if (selectedSizes[i].checked) {
          var size = selectedSizes[i].value;
          var correspondingQuantityInput = document.getElementById('quantity' + size.replace(/\s/g, ''));
          if (correspondingQuantityInput) {
              correspondingQuantityInput.value = ''; // Set the value to an empty string, allowing users to input the quantity
              correspondingQuantityInput.removeAttribute('disabled');
          }
      }
  }
}

