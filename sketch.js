var d = " ,./()!;:?-_+=[]";
var cities;
var words = [];
var search ;
var wordCounter = 0;
var counter = 0;

var serial;
var portName = '/dev/cu.usbmodem1421';
var w;

function preload() {
  cities = loadStrings('2cities.txt');
}

function setup() {
  createCanvas(600, 600);
  var everything = join(cities).toLowerCase();
  words = splitTokens(everything, d);
  
 // setInterval(updateCounter, 60);
  
 // for (var i = 0; i < words.length; i++) {
   //  text(words[i], 10, i * 20);
  //  if (words[i] == search) {
  //    wordCounter++;
//    }
  //}
  serial = new p5.SerialPort();
  serial.on('data', serialEvent);
  serial.open(portName);
}

function serialEvent() {
  w = Number(serial.read());
}

function draw() {
  background(0);
  fill(random(0,255), w, random(0,255));

  //for (var i = 0; i < words.length; i++) {
//    text(words[i], w, i*20);
//  }

var pos = map(w, 0, 255, 20, width-50);
  text(words[mouseX+mouseY], pos, pos);

  console.log(words.length);
}

//function updateCounter(){
//  counter++;
//}