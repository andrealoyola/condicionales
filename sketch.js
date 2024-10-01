function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);

  // Cambiar el nivel de la batería y el color del background según la posición horizontal del mouse
  if (mouseX < width / 3) {
    background(150, 150, 200);
    fill(255, 0, 0); // Relleno rojo si está en la izquierda
    noStroke(0);
    rect(width / 2, 450, 100, 30, 7);
  } else if (mouseX >= (2 * width) / 3) {
    background(200, 0, 100);
    fill(0, 220, 0); // Relleno verde si está en la derecha
    noStroke(0);
    rect(width / 2, 280, 100, 200, 10);
  } else {
    background(100, 180, 50);
    fill(250, 180, 100); // Relleno naranja si está en el centro
    noStroke(0);
    rect(width / 2, 377, 100, 100, 8);
  }

  // Dibujo el contorno
  noFill(0);
  stroke(0);
  strokeWeight(6);
  rect(width / 2, 280, 100, 200, 10); // Caja principal
  rect(width / 2 + 40, 260, 20, 20, 3); // Caja superior
}
