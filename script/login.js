var title = "Welcome",
  body =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
  bold,
  regular;

function preload() {
  bold = "Poppins";
  regular = "Poppins";

  addimg = loadImage("asset/punchbowl/addimg.png");
  loginicon = loadImage("asset/punchbowl/loginicon.png");
}

function setup() {
  createCanvas(375, 812);
  nextfilterlink = createA("alert.html", "");

  input = createInput();
  input.position(70, 400);
  input.size(240, 30);
}

function draw() {
  background("#15184B");
  
  textSize(22);
  textFont(bold);
  fill(256);
  text(title, 20, 100);
  
  textSize(12);
  textFont(bold);
  fill(256);
  text(body, 20, 120, width-60);



  fill("#1F246F");
  noStroke();
  rect(135, 240, 100, 100, 20);
  
  image(addimg, 172, 275, 30, 30);

  textSize(12);
  textFont(bold);
  fill("#ffffff");
  textWrap(WORD);
  text("Add profile image", 130, 360, 320);


  image(loginicon, 40, 400, 30, 35);

  fill("#40DF9F");
  noStroke();
  rect(20, 720, width-40, 60, 5);

  textSize(14);
  textFont(bold);
  fill("#15184B");
  textWrap(WORD);
  text("Start", (width/2)-20, 743, 320);
  nextfilterlink.position(20, 720);
  nextfilterlink.size(width-40, 60);
}