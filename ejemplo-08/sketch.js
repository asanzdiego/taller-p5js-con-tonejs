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

function doIt() {

  text('doIt', 10, 30);

  fill(127);
  ellipse(mouseX, mouseY, 50, 50);

  
}

function touchStarted() {
  doIt();
  text('touchStarted2', 10, 60);
  synth.triggerAttackRelease('D4', '8n');
}

function mousePressed() {
  doIt();
  text('mousePressed2', 10, 90);
  synth.triggerAttackRelease('D4', '8n');
}