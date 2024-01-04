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
