//  var
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
car_image = new Image();
let x = 450;
let y = 850;
// handle draw img to canvas
function drawCar() {
  car_image.src = "/IMG/car.png";
  ctx.drawImage(car_image, x, y, car_image.width, car_image.height);
}

drawCar();

function drawStar() {
  let x = Math.floor(Math.random() * 500);
  let y = Math.floor(Math.random() * 500);
  star_image = new Image();
  star_image.src = "/IMG/star.jpg";
  ctx.drawImage(
    star_image,
    x,
    y,
    star_image.width / 12,
    star_image.height / 12
  );
}
// run draw star 10s
setInterval(() => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawStar();
  drawCar();
}, 2000);

// handle keydown and move img
// function keyDown

function moveSelection(evt) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawStar();

  switch (evt.keyCode) {
    case 37:
      x -= 8;
      break;
    case 38:
      y -= 8;
      break;
    case 39:
      x += 8;
      break;
    case 40:
      y += 8;
      break;
  }
  ctx.drawImage(car_image, x, y, car_image.width, car_image.height);
}

// function upPoint() {
//   if( )
// }
function onloadd() {
  window.addEventListener("keydown", moveSelection);
}
