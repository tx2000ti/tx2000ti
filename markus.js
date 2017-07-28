//Ahh, looking through the source files i see? I am proud. Plus points for intelligent solving.

function setup() {
  createCanvas(1920, 1080);
}

function mouseReleased() {
  if (mouseX>142 && mouseX<182 && mouseY>758 && mouseY<798) {
  fill(0);
  rect(0,0,width, height);
  Text1();
  Text2();
  Text3();
  Text4();
  Text5();
  return false;
  }
}

function Text1() {
    textSize (200);
    textAlign(CENTER);
    fill(80);
    text("'ATBASH'", 960, 200);
}

function Text2() {
    textSize (28);
    textAlign(CENTER);
    fill(80);
    text("blf szev mld vmgvivw gsv urmzo hgztv lu gsv givzhfiv sfmg", 960, 400);
}

function Text3() {
    textSize (28);
    textAlign(CENTER);
    fill(80);
    text("wvxibkgrmt gsrh droo ivhfog rm gsv tizmw kirav", 960, 500);
}

function Text4() {
    textSize (28);
    textAlign(CENTER);
    fill(80);
    text("tl gl groobppvnvwwztvmnzipfhc zg tnzro wlg xln gl xozrn blfi kirav", 960, 600);
}

function Text5() {
    textSize (28);
    textAlign(CENTER);
    fill(80);
    text("r yvg blf zoivzwb pmld gsv kzhhdliw", 960, 700);
}