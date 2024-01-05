function OrderTypeProcess() {


  var orderType;
  if(document.getElementById("PickUp").checked)
  {
    orderType = 'PickUp';
  } else if (document.getElementById("Delivery").checked){
    orderType = 'Delivery';

  }else {
    alert('Please select an order type')
    return;
  }

  if(orderType === "PickUp")
  {
    window.location.href ="PickUpConfirmation.html";
  } else if(orderType === "Delivery") {
    window.location.href ="DeliveryConfirmation.html";
  }



}

window.addEventListener('scroll', function() {
  var bottomPart = document.querySelector('.bottompart');
  var scrollPosition = window.scrollY;

  // Adjust the threshold based on your preference
  var threshold = 150;

  if (scrollPosition > threshold) {
    bottomPart.style.transform = 'translateY(0)';
  } else {
    bottomPart.style.transform = 'translateY(100%)';
  }
});
