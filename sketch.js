let weightSlider;
let slantSlider;
let casualSlider;
let variable;

// var canvasDiv = document.getElementById('col_1');

function setup() {
  // var winWidth = canvasDiv.offsetWidth;
  // var winHeight = canvasDiv.offsetHeight;
  // var myCanvas = createCanvas(winWidth, winHeight);
  // myCanvas.parent('#col_1')

  variable = select('.variable');
}

function draw() {
  // let a = map(window.innerWidth, 500, 1250, 300, 1000)
  // console.log(a)

  let wght = map(innerWidth / innerHeight, 0.8, 5, 200, 900)
  let wdth = map(innerWidth / innerHeight, 0.8, 5, 50, 200)
  let ls = map(innerWidth / innerHeight, 0.8, 5, -40, 14)

  let from = color(218, 165, 32);
  let to = color(72, 61, 139);
  colorMode(RGB); // Try changing to HSB.
  let interA = lerpColor(from, to, (innerWidth/innerHeight+0.2)/5.2);

  console.log("rgb(" + interA +")")

  variable.style('font-size', "48.5vh")
  variable.style('background', interA)
  variable.style('letter-spacing', ls + "px")
  variable.style('font-variation-settings', "'wght' " + wght + ", 'wdth' " + wdth);
}

// function windowResized() {
//   var winWidth = canvasDiv.offsetWidth;
//   var winHeight = canvasDiv.offsetHeight;
//   resizeCanvas(winWidth, winHeight);
//   }