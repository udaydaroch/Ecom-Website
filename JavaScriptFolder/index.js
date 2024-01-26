document.addEventListener("DOMContentLoaded", function () {
    function generateCard(data) {
        var cardContainer = document.getElementById('cardContainer');

        for (let i = 0; i < data.length; i++) {
            // Check if the product is available
            if (data[i].isAvailable == 'yes') {
                var colDiv = document.createElement('div');
                colDiv.className = 'col-lg-4 col-md-6 col-sm-12';

                var cardDiv = document.createElement('div');
                cardDiv.className = 'card mb-5 shadow-lg';

                var imgElement = document.createElement('img');
                imgElement.src = "/Website-project/PHPFolder/" + data[i].img;
                imgElement.className = 'img-fluid';

                var cardBodyDiv = document.createElement('div');
                cardBodyDiv.className = 'card-body';

                var cardTitleDiv = document.createElement('div');
                cardTitleDiv.className = 'card-title';

                var h2Element = document.createElement('h2');
                h2Element.textContent = data[i].clothing_name;

                var cardTextDiv = document.createElement('div');
                cardTextDiv.className = 'card-text';

                var pElement = document.createElement('p');
                pElement.textContent = data[i].clothing_description;

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
    }

    function clearCardContainer() {
        var cardContainer = document.getElementById('cardContainer');
        cardContainer.innerHTML = '';
    }

    function fetchAndDisplayProducts() {
        clearCardContainer();

        // Fetch data from the server
        fetch('/Website-project/PHPFolder/get_product.php')
            .then(response => response.json())
            .then(data => generateCard(data))
            .catch(error => console.error('Error fetching products:', error));
    }

    var shirtsLink = document.getElementById('shirtsLink');
    shirtsLink.addEventListener('click', function () {
        fetchAndDisplayProducts();
    });

    var ShoesLink = document.getElementById('shoesLink');
    ShoesLink.addEventListener('click', function () {
        clearCardContainer();
    });
});
