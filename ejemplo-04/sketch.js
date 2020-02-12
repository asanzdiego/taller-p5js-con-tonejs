let synth;
let notas = ["C","D","E","F","G","A","B"]; 
let colores = [0,20,40,90,130,170,210];
let octavas = ["2","3","4","5","6","7"];
let tonos = [105,135,165,195,225,255];
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
  for (i=0; i < 8; i++) {
    line(0, divY*i, window.screen.width, divY*i);
    line(divX*i, 0, divX*i, window.screen.height);
  }
  synth = new Tone.Synth().toMaster();
  Tone.Transport.start();
  colorMode(HSB, 255);
}

function doIt() {

  let nota = Math.round((mouseX+(divX/2))/divX)-1;
  console.log('nota', nota);
  let octava = Math.round((mouseY+(divY/2))/divY)-1;
  console.log('octava', octava);
  synth.triggerAttackRelease(notas[nota]+octavas[octava], '8n');
  console.log('colores[nota]', colores[nota]);
  console.log('tonos[octava]', tonos[octava]);
  fill(colores[nota], 127, tonos[octava]);
  ellipse(mouseX, mouseY, 50, 50);
}

function touchStarted() {
  doIt();
}

function mousePressed() {
  doIt();
}