document.addEventListener("DOMContentLoaded", function () {
  
  var cardData = {
    imgSrc: "/Website-project/Prefabs/shirt1.png",
    title: 'India Cricket Shirt',
    description: 'Show your support for the Indian cricket team with our official India Cricket Shirt. Crafted with premium materials and featuring the iconic team colors, this shirt is perfect for cricket enthusiasts and fans alike.',
  };
  
  var cardData2 = {
    imgSrc: "/Website-project/Prefabs/shirt2.png",
    title: 'Football Jersey',
    description: 'Manchester United player'
  };
  
  var cardData3 = {
    imgSrc: "/Website-project/Prefabs/shirt3.png",
    title: 'Football Jersey',
    description: 'Versace Football Jersey Special Edition'
  };
  
  var datas = [cardData, cardData2, cardData3];
  
  function generateCard(data) {
    var cardContainer = document.getElementById('cardContainer');
  
    for (let i = 0; i < data.length; i++) {
        var colDiv = document.createElement('div');
        colDiv.className = 'col-lg-4 col-md-6 col-sm-12';
  
        var cardDiv = document.createElement('div');
        cardDiv.className = 'card mb-5 shadow-lg';
  
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
        buttonDiv.className = 'd-grid gap-2 col-6 mx-auto';
  
        var viewButton = document.createElement('button');
        viewButton.className = 'btn btn-outline-success';
        viewButton.type = 'button';
        viewButton.textContent = 'View more';
        viewButton.addEventListener('click', function () {
      
          window.location.href = 'viewmore.html';
        });
  
        var addToCartButton = document.createElement('button');
        addToCartButton.className = 'btn btn-outline-primary';
        addToCartButton.type = 'button';
        addToCartButton.textContent = 'Add to Cart';
  
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
        cardContainer.appendChild(colDiv);
    }
  }
  function clearCardContainer() {
    var cardContainer = document.getElementById('cardContainer');
    cardContainer.innerHTML = '';
  }


  var shirtsLink = document.getElementById('shirtsLink');
  shirtsLink.addEventListener('click', function () {
      generateCard(datas);
  });

   var ShoesLink = document.getElementById("shoesLink");
   ShoesLink.addEventListener('click', function () {
    clearCardContainer();
  });
});


