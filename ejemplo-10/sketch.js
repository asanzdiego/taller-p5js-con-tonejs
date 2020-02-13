let synth;

function setup() {

  let width = window.innerWidth;
  console.log('width', width);
  let height = window.innerHeight;
  console.log('height', height);
  canvas = createCanvas(width, height);
  synth = new Tone.Synth().toMaster();
  Tone.Transport.start();
}

function mousePressed() {
  synth.triggerAttackRelease('D4', '8n');
  text('mousePressed', 10, 90);
  fill(127);
  ellipse(mouseX, mouseY, 50, 50);
}