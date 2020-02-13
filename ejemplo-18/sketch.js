var synth;
var notas = ["C","D","E","F","G","A","B"]; 
var colores = [0,20,40,90,130,170,210];
var octavas = ["2","3","4","5","6","7"];
var tonos = [105,135,165,195,225,255];
var divX;
var divY;
var oldIsPressed = false;
var isPressed = false;
var oldNotaOctava = "";
var ellipseWidthMin = 15;
var ellipseWidthMax = 150;
var ellipseWidth = ellipseWidthMin;

function setup() {

  var width = window.innerWidth;
  console.log('width', width);
  var height = window.innerHeight;
  console.log('height', height);
  canvas = createCanvas(width, height);
  divX = width / notas.length;
  divY = height / octavas.length;
  for (i=0; i < 8; i++) {
    line(0, divY*i, window.screen.width, divY*i);
    line(divX*i, 0, divX*i, window.screen.height);
  }
  synth = new Tone.Synth().toMaster();
  Tone.Transport.start();
  colorMode(HSB, 255);
}

function draw() {

  if (isPressed) {
    
    let nota = Math.round((mouseX+(divX/2))/divX)-1;
    console.log('nota', nota);
    let octava = Math.round((mouseY+(divY/2))/divY)-1;
    console.log('octava', octava);
    console.log('colores[nota]', colores[nota]);
    console.log('tonos[octava]', tonos[octava]);
    fill(colores[nota], 127, tonos[octava]);

    if (ellipseWidth < ellipseWidthMax) {
      ellipseWidth++;
    }

    ellipse(mouseX, mouseY, ellipseWidth, ellipseWidth);

    let newNotaOctava = notas[nota]+octavas[octava];

    if (oldNotaOctava != newNotaOctava) {

      oldNotaOctava = newNotaOctava;
      synth.triggerRelease();
      synth.triggerAttack(newNotaOctava, 0.001);
    }

  } else {

    if (oldIsPressed) {

      oldNotaOctava = "";
      ellipseWidth = ellipseWidthMin;
      synth.triggerRelease();
    }
  }

  oldIsPressed = isPressed;
}

function mousePressed() {
  isPressed = true;
}

function mouseReleased() {
  isPressed = false;
}