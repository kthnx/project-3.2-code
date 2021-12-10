var title = "Punch Bowl",
  body =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
  alcohollevel = "60% alcohol",
  nonalcohollevel = "40% non - alcohol",
  AddDrinks = "Add Drinks",
  Custom = "Custom",
  bold,
  regular,
  thumbnail1,
  thumbnail2,
  thumbnail3,
  clickbtn,
  mainImg;

function preload() {
  // bold = loadFont('font/Poppins-Bold.woff2');
  // regular = loadFont('font/Poppins-Regular.woff2')

  bold = "Poppins";
  regular = "Poppins";

  backarrow = loadImage("asset/punchbowl/backarrow.png");
  reset = loadImage("asset/punchbowl/reset.png");
  mainBowl = loadImage("asset/punchbowl/punchbowl.png");
  Martini = loadImage("asset/punchbowl/Martini.jpg");
  closeicon = loadImage("asset/punchbowl/close.png");
  alert1 = loadImage("asset/punchbowl/alert1.png");
}

function setup() {
  createCanvas(375, 812);
  nextfilterlink = createA("martini.html", "");
  nextfilterlink1 = createA("single.html", "");
  nextfilterlink2 = createA("multi.html", "");
  nextfilterlink3 = createA("punchbowl.html", "");
}

function draw() {
  background("#15184B");

  image(backarrow, 20, 25, 20, 20);

  textSize(18);
  textFont(bold);
  fill(256);
  text(title, 60, 40);

  image(reset, 330, 25, 20, 20);

  textSize(12);
  textFont(regular);
  fill(256);
  textWrap(WORD);
  text(body, 20, 100, 350);

  image(mainBowl, 80, 230, 200, 200);

  fill("#FC9924");
  noStroke();
  rect(40, 480, 18, 18, 5);

  textSize(12);
  textFont(regular);
  fill(256);
  textWrap(WORD);
  text(alcohollevel, 65, 485, 350);

  fill("#5BF8E9");
  noStroke();
  rect(190, 480, 18, 18, 5);

  textSize(12);
  textFont(regular);
  fill(256);
  textWrap(WORD);
  text(nonalcohollevel, 215, 485, 350);

  textSize(14);
  textFont(bold);
  fill("#FC9924");
  textWrap(WORD);
  text(AddDrinks, 30, 620, 350);

  fill("#1F246F");
  noStroke();
  rect(30, 640, 100, 140, 5);
  nextfilterlink3.position(35, 650);
  nextfilterlink3.size(80, 90);

  textSize(14);
  textFont(bold);
  fill(256);
  textWrap(WORD);
  text(Custom, 52, 705, 350);

  fill("#1F246F");
  noStroke();
  rect(140, 640, 100, 140, 5);

  fill("#1F246F");
  noStroke();
  rect(250, 640, 100, 140, 5);

  fill("#1F246F");
  noStroke();
  rect(360, 640, 100, 140, 5);

  image(Martini, 150, 650, 80, 90);
  nextfilterlink.position(150, 650);
  nextfilterlink.size(80, 90);

  textSize(14);
  textFont(bold);
  fill(256);
  textWrap(WORD);
  text("Martini", 165, 755, 350);

  image(Martini, 260, 650, 80, 90);

  textSize(14);
  textFont(bold);
  fill(256);
  textWrap(WORD);
  text("Single", 278, 755, 350);

  nextfilterlink1.position(260, 650);
  nextfilterlink1.size(80, 90);

  squareColor = color(0, 0, 0);
  squareColor.setAlpha(200);
  fill(squareColor);
  rect(0, 0, width, height, 5);

  fill("#1F246F");
  noStroke();
  rect(20, (height - 380)/2, width-40, 380, 5);

  textSize(14);
  textFont(bold);
  fill(256);
  textWrap(WORD);
  text("Alert", (width/2)-25, 240, 350);

  image(closeicon, 325, 235, 16, 16);
  nextfilterlink3.position(325, 235);
  nextfilterlink3.size(16, 16);

  image(alert1, (width/2)-30, 280, 60, 160);

  textSize(12);
  textFont(bold);
  fill(256);
  textWrap(WORD);
  text("Hey, your alcohol percentage is 60% ! It’s time for you to grab a meal !!", 40, 470, 320);

  fill("#40DF9F");
  noStroke();
  rect(40, 520, width-80, 60, 5);

  textSize(14);
  textFont(bold);
  fill("#15184B");
  textWrap(WORD);
  text("Okay", (width/2)-20, 542, 320);

  nextfilterlink3.position(40, 520);
  nextfilterlink3.size(width-80, 60);

}
