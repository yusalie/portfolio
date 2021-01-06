var slideT = 1;
showTest(slideT);

function testChnge(t) {
  showTest(slideT += t);
}

function showTest(t) {
  var j;
  var y = document.getElementsByClassName("testSlide");
  if (t > y.length) {slideT = 1}
  if (t < 1) {slideT = y.length}
  for (j = 0; j < y.length; j++) {
    y[j].style.display = "none";
  }
  y[slideT-1].style.display = "block";
}
