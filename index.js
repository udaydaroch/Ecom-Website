var cardData = {
  imageSrc: 'shirt1.png',
  title: 'India Cricket Shirt',
  description: 'Show your support for the Indian cricket team with our official India Cricket Shirt. Crafted with premium materials and featuring the iconic team colors, this shirt is perfect for cricket enthusiasts and fans alike.',
};

// Function to generate the card dynamically
function generateCard(data) {
  for (let i= 0; i < 20; i++) {
  var cardContainer = document.getElementById('cardContainer');

  // Create elements
  var colDiv = document.createElement('div');
  colDiv.className = 'col-lg-4 col-md-5 col-sm-12';

  var cardDiv = document.createElement('div');
  cardDiv.className = 'card mb-5 shadow-sm';

  var imgElement = document.createElement('img');
  imgElement.src = data.imageSrc;
  imgElement.className = 'img-fluid';

  var cardBodyDiv = document.createElement('div');
  cardBodyDiv.className = 'card-body';

  var cardTitleDiv = document.createElement('div');
  cardTitleDiv.className = 'card-title';

  var h2Element = document.createElement('h2');
  h2Element.textContent = data.title;

  var cardTextDiv = document.createElement('div');
  cardTextDiv.className = 'card-text';

  var pElement = document.createElement('p');
  pElement.textContent = data.description;

  var buttonDiv = document.createElement('div');
  buttonDiv.className = 'd-grid gap-2 col-6 mx-auto';

  var viewButton = document.createElement('button');
  viewButton.className = 'btn btn-outline-success';
  viewButton.type = 'button';
  viewButton.textContent = 'View more';

  var addToCartButton = document.createElement('button');
  addToCartButton.className = 'btn btn-outline-primary';
  addToCartButton.type = 'button';
  addToCartButton.textContent = 'Add to Cart';

  // Append elements to their respective parents
  cardTitleDiv.appendChild(h2Element);
  cardTextDiv.appendChild(pElement);
  buttonDiv.appendChild(viewButton);
  buttonDiv.appendChild(addToCartButton);
  cardBodyDiv.appendChild(cardTitleDiv);
  cardBodyDiv.appendChild(cardTextDiv);
  cardBodyDiv.appendChild(buttonDiv);
  cardDiv.appendChild(imgElement);
  cardDiv.appendChild(cardBodyDiv);
  colDiv.appendChild(cardDiv);

  // Append the entire card to the cardContainer
  cardContainer.appendChild(colDiv);
}
}

// Call the function with the sample data
generateCard(cardData);