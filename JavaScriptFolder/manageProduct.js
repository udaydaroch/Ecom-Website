
function autofillUpdateForm(productId) {
    
  fetch(`/Website-project/PHPFolder/get_product_details.php?id=${productId}`)
    .then(response => response.json() )
    .then(data => {
        
        // Populate form fields with retrieved data
      document.getElementById('updateclothingName').value = data.clothing_name;
      document.getElementById('updateclothingDescription').value = data.clothing_description;
      document.getElementById('updateclothingType').value = data.clothing_type;
      document.getElementById('currentimage').src = "/Website-project/PHPFolder/" + data.img;

      // Populate sizes and prices
      document.getElementById('updatesizeXS').value = data.clothing_size_xs;
      document.getElementById('updatepriceXS').value = data.price_size_xs;

      document.getElementById('updatesizeS').value = data.clothing_size_s;
      document.getElementById('updatepriceS').value = data.price_size_s;

      document.getElementById('updatesizeM').value = data.clothing_size_m;
      document.getElementById('updatepriceM').value = data.price_size_m;

      document.getElementById('updatesizeL').value = data.clothing_size_l;
      document.getElementById('updatepriceL').value = data.price_size_l;

      document.getElementById('updatesizeXL').value = data.clothing_size_xl;
      document.getElementById('updatepriceXL').value = data.price_size_xl;

      document.getElementById('updatesizeXXL').value = data.clothing_size_xxl;
      document.getElementById('updatepriceXXL').value = data.price_size_xxl;
    })
    .catch(error => {
      console.error('Error fetching product details:', error);
    });
    
}





function showForm(formID) {
      const formClass = formID + 'Form';
      const form = document.querySelector(`.${formClass}`);
      const formTypes = ["addForm", 'removeForm', 'updateForm'];
      
      formTypes.forEach(type => {
          const currentForm = document.querySelector(`.${type}`);
          if (currentForm) {
          currentForm.style.display = type === formClass ? 'block' : 'none';
          }
    });

}

function toggleImageUpload() {
var keepImageCheckbox = document.getElementById('updateKeepImage');
var imageUploadContainer = document.getElementById('updateImageUploadContainer');
var imageUploadInput = document.getElementById('updateclothingImage'); // Add this line to get the image upload input

if (keepImageCheckbox.checked) {
imageUploadContainer.style.display = 'none';
imageUploadInput.removeAttribute('required'); // Remove the required attribute
} else {
imageUploadContainer.style.display = 'block';
imageUploadInput.setAttribute('required', 'required'); // Add the required attribute
}
}
