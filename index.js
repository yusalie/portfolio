var slideN = 1;
showSlide(slideN);

function slideChnge(n) {
  showSlide(slideN += n);
}

function showSlide(n) {
  var i;
  var x = document.getElementsByClassName("slides");
  if (n > x.length) {slideN = 1}
  if (n < 1) {slideN = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideN-1].style.display = "block";
}
