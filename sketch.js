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

  strokeWeight(4);
  stroke(0);
  fill(50, 180, 100);
  circle(mouseX + 58, mouseY - 40, 10);

  if (mouseX < width / 2) {
    fill(50, 180, 100);
    circle(250, 200, 100);
  }

  strokeWeight(4);
  stroke(0);
  fill(50, 180, 100);
  circle(width / 2, height / 2, 100);

  fill(0, 100, 150);
  circle(mouseX - 20, mouseY - 200, 10);
  fill(150, 0, 100);
  circle(mouseX + 200, mouseY - 50, 10);

  noFill(0);
  stroke(35);
  strokeWeight(7);
  ellipse(mouseX + 50, 320, 250, 100); //horizontal
  ellipse(mouseX + 130, 240, 100, 250);

  stroke(0);
  strokeWeight(3);
  fill(175);
  ellipse(mouseX + 148, 340, 60);

  fill(150, 0, 100);
  ellipse(mouseX + 200, 460, 15);

  fill(50, 180, 100);
  ellipse(mouseX + 50, 380, 20);

  fill(0, 100, 150);
  ellipse(mouseX + 128, 270, 27);
}
