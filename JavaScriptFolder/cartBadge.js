function updateBadge() {

  const products = JSON.parse(localStorage.getItem('myData')) || [];
  
  let totalQuantity = 0;
  products.forEach(product => {
      totalQuantity += product.quantity;
  });
  
  const badge = document.getElementById('cart-badge');
  badge.innerText = totalQuantity > 0 ? totalQuantity.toString() : '';
}
