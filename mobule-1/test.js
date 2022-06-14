function giaipt() {
  let a = +document.getElementById("a").value;
  let b = +document.getElementById("b").value;
  let c = +document.getElementById("c").value;
  if (a == 0) {
    if (b == 0) {
      if (c == 0) {
        document.getElementById("result").innerHTML = "PT co vo so nghiem";
      } else {
        document.getElementById("result").innerHTML = "PT vo nghiem";
      }
    } else {
      x = -c / b;
      z = x.toFixed(3);
      document.getElementById("result").innerHTML =
        "PT co nghiem duy nhat x =" + z;
    }
  } else {
    let d = b * b - 4 * a * c;
    if (d < 0) {
      document.getElementById("result").innerHTML = "PT vo nghiem";
    } else if (d == 0) {
      x = -b / (2 * a);
      z = x.toFixed(3);
      document.getElementById("result").innerHTML =
        "PT co nghiem kep x1=x2=" + z;
    } else {
      x = (-b + Math.sqrt(d)) / (2 * a);
      z = x.toFixed(3);
      y = (-b - Math.sqrt(d)) / (2 * a);
      n = x.toFixed(3);
      document.getElementById("result").innerHTML =
        "PT co 2 nghiem phan biet " + "x1= " + z + "; x2= " + n;
    }
  }
}
