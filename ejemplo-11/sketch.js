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

function touchStarted() {
  synth.triggerAttackRelease('D5', '8n');
  text('touchStarted', 10, 60);
  fill(50);
  ellipse(mouseX, mouseY, 50, 50);
}

function mousePressed() {
  synth.triggerAttackRelease('D4', '8n');
  text('mousePressed', 10, 90);
  fill(200);
  ellipse(mouseX, mouseY, 50, 50);
}