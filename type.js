let i = 0;
let j = 0;
let h1 = "Yusuf Salie";
let h2 = "Aspiring back-end developer";
let txtSpd = 50;
let txtpd2 = 50;
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
