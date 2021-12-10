var title = "Punch Bowl",
body = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
alcohollevel = "70% alcohol",
nonalcohollevel = "30% non - alcohol",
AddDrinks = "Add Drinks",
Custom = "Custom",
bold, regular, thumbnail1, thumbnail2, thumbnail3, clickbtn, mainImg;

function preload() {
  // bold = loadFont('font/Poppins-Bold.woff2');
  // regular = loadFont('font/Poppins-Regular.woff2')

  bold = "Poppins";
  regular = "Poppins"

  backarrow = loadImage('asset/punchbowl/backarrow.png');
  reset = loadImage('asset/punchbowl/reset.png');
  mainBowl = loadImage('asset/punchbowl/punchbowl.png');
  Martini = loadImage('asset/punchbowl/Martini.jpg')
}

function setup() {
    createCanvas(375, 812);
    nextfilterlink = createA('martini.html', '');
    nextfilterlink1 = createA('single.html', '');
    nextfilterlink2 = createA('multi.html', '');
    nextfilterlink3 = createA('punchbowl.html', '');
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
    rect(-85, 640, 100, 140, 5);
    nextfilterlink3.position(-85, 640);
    nextfilterlink3.size(100, 140);
    
    textSize(14);
    textFont(bold);
    fill(256);
    textWrap(WORD);
    text(Custom, -60, 715, 350);


    fill("#1F246F");
    noStroke();
    rect(25, 640, 100, 140, 5);

    image(Martini, 35, 650, 80, 90);
    nextfilterlink.position(35, 650);
    nextfilterlink.size(80, 90);
    
    textSize(14);
    textFont(bold);
    fill(256);
    textWrap(WORD);
    text("Martini", 50, 755, 350);



    fill("#1F246F");
    stroke(256);
    strokeWeight(2)
    rect(135, 640, 100, 140, 5);

    image(Martini, 145, 650, 80, 90);
    
    noStroke();
    textSize(14);
    textFont(bold);
    fill(256);
    textWrap(WORD);
    text("Single", 160, 755, 350);

    nextfilterlink1.position(145, 650);
    nextfilterlink1.size(80, 90);




    fill("#1F246F");
    noStroke();
    rect(245, 640, 100, 140, 5);

    
    image(Martini, 255, 650, 80, 90);
    
    textSize(14);
    textFont(bold);
    fill(256);
    textWrap(WORD);
    text("Multi", 275, 755, 350);

    nextfilterlink2.position(255, 650);
    nextfilterlink2.size(80, 90);



  }
