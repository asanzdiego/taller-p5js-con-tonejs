let synth;
let colores = [33,66,99,133,166,199,233];
let tonos = [70,90,110,130,150,170,190];
let notas = ["C","D","E","F","G","A","B"]; 
let octavas = ["2","3","4","5","6","7","8"];
let divX;
let divY;

function setup() {
  canvas = createCanvas(window.screen.width, window.screen.height);
  divX = window.screen.width / 7;
  divY = window.screen.height / 7;
  colorMode(HSB, 255);
  synth = new Tone.Synth().toMaster();
  Tone.Transport.start();
  for (i=0; i < 8; i++) {
    line(0,divY*i,window.screen.width,divY*i);
    line(divX*i,0,divX*i,window.screen.height);
  }
}

function draw() {

}

function mousePressed () {
  
  let x = Math.round((mouseX+(divX/2))/divX)-1;
  console.log('x', x);
  let y = Math.round((mouseY+(divY/2))/divY)-1;
  console.log('y', y);
  synth.triggerAttackRelease(notas[x]+octavas[y], '8n');
  console.log('colores[x]', colores[x]);
  console.log('tonos[y]', tonos[y]);
  fill(colores[x], tonos[y], tonos[y]);
  ellipse(mouseX, mouseY, 50, 50);
}