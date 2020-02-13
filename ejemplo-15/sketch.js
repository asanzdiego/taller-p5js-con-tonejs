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
  synth.triggerAttack('D4', 0.0001);
  text('mousePressed', 10, 60);
  fill(200);
  ellipse(mouseX, mouseY, 50, 50);
}

function mouseReleased() {
  synth.triggerRelease();
  text('mouseReleased', 10, 90);
  fill(200);
  ellipse(mouseX, mouseY, 50, 50);
}