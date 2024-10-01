function setup() {
  let x = circle(200, 50, 25, 50);
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  background(230, 90);
  if (x > 5) {
    console.log(x);
  }
}

//custom variables for y-coordinate of sun & horizon
let sunHeight;
let horizon = 200;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);

  //sun follows y-coordinate of mouse
  sunHeight = mouseY;

  //light blue background if sun is above horizon
  if (sunHeight < horizon) {
    //check if it is daytime
    background("lightblue");
  }
  //sun
  fill("yellow");
  circle(200, sunHeight, 100);

  // draw line for horizon
  stroke("green");
  line(0, horizon, 400, horizon);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  if (mouseX < width / 2) {
    background(200, 0, 0); // Rojo si está en la mitad izquierda
  } else {
    background(0, 0, 200); // Azul si está en la mitad derecha
  }

  // Dibujar un círculo en la mitad izquierda y un cuadrado en la derecha
  if (mouseX < width / 2) {
    fill(255); // Color blanco
    ellipse(width / 4, height / 2, 100, 100); // Dibuja un círculo
  } else {
    fill(255); // Color blanco
    rect(width / 2 - 50, height / 2 - 50, 100, 100); // Dibuja un cuadrado
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);

  // Cambiar el color de la figura según la posición del mouse
  if (mouseX < width / 3) {
    fill(255, 0, 0); // Rojo para la parte izquierda
  } else if (mouseX < (2 * width) / 3) {
    fill(0, 255, 0); // Verde para la parte central
  } else {
    fill(0, 0, 255); // Azul para la parte derecha
  }

  // Dibujar la elipse en el centro del lienzo
  ellipse(width / 2, height / 2, 100, 100);
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  // Cambiar el color del rectángulo según la posición vertical del mouse
  if (mouseY < height / 3) {
    fill(255, 0, 0); // Rojo si está en la parte superior
  } else if (mouseY >= height / 3 && mouseY < (2 * height) / 3) {
    fill(0, 255, 0); // Verde si está en la parte media
  } else {
    fill(0, 0, 255); // Azul si está en la parte inferior
  }

  // Dibujar el rectángulo en el centro del lienzo
  rect(width / 4, height / 4, width / 2, height / 2);
}
