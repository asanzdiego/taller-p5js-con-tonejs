let synth;

function setup() {
  canvas = createCanvas(window.screen.width, window.screen.height);
  synth = new Tone.Synth().toMaster();
  Tone.Transport.start();
}

function draw() {

}

function mousePressed () {
  
  synth.triggerAttackRelease('D4', '8n');
  fill(127);
  ellipse(mouseX, mouseY, 50, 50);
}