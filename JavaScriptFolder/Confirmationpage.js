function disableForm() {
  var form = document.getElementById('formbox');
  var elements = form.elements;

  for (var i = 0; i < elements.length; i++) {
      elements[i].style.display = "None";
    }
}