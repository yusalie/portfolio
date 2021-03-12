let i = 0;
let j = 0;
let h1 = 'Welcome To my website!';
let h2 = 'My name is Yusuf Salie'
let txtSpd = 50;
let txtpd2 = 1000*10;
function writeTxt() {
  if (i < h1.length) {
    document.getElementById("h1").innerHTML += h1.charAt(i);
    i++;
    setTimeout(writeTxt, txtSpd);
  }
  if (j < h2.length) {
    document.getElementById("h2").innerHTML += h2.charAt(j);
    j++;
    setTimeout(writeTxt, txtpd2);
  }
}
