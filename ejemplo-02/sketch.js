let synth;
let isPressed = false;
let notas = ["C", "D", "E", "F", "G", "A", "B"];
let octavas = ["2", "3", "4", "5", "6", "7"];
let divX;
let divY;

function setup() {

  let width = window.innerWidth;
  console.log('width', width);
  let height = window.innerHeight;
  console.log('height', height);
  canvas = createCanvas(width, height);
  divX = width / notas.length;
  divY = height / octavas.length;
  synth = new Tone.Synth().toMaster();
  Tone.Transport.start();
}

function doIt() {

  let nota = Math.round((mouseX + (divX / 2)) / divX) - 1;
  console.log('nota', nota);
  let octava = Math.round((mouseY + (divY / 2)) / divY) - 1;
  console.log('octava', octava);
  synth.triggerAttackRelease(notas[nota] + octavas[octava], '8n');
  fill(127);
  ellipse(mouseX, mouseY, 50, 50);
}

function touchStarted() {
  doIt();
}

function mousePressed() {
  doIt();
}