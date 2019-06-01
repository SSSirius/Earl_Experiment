
   
var constellation = [];
var n;
var d;
var re_h = 1;
var part=0.85;
function setup() {
    let cnv = createCanvas(windowWidth, windowHeight);
    cnv.id('home_background');
    pixelDensity(1); // Set 1 because it's too slow on firefox
    //pixelDensity(displayDensity());
    n = 80;
//  noLoop();
    for (var i = 0; i <= n; i++) {
        constellation.push(new star());
    }
    strokeWeight(.5);
    stroke(255,255,255,150);
}

function draw() {

    background('#000000');

    blendMode(BLEND);
    fill(0, 0, 0, 220);
    noStroke();
    rect(0, 0, width, height);
    // rect(0, height - 50, width*0.5, 50);
    blendMode(ADD);
    strokeWeight(.5);
    stroke(255, 255, 255, 180);
    for (var i = 0; i < constellation.length; i++) {
        constellation[i].update();
        for (var j = 0; j < constellation.length; j++) {
            if (i > j) { // "if (i > j)" => to check one time distance between two stars
                d = constellation[i].loc.dist(constellation[j].loc); // Distance between two stars
                if (d <= width / 10) { // if d is less than width/10 px, we draw a line between the two stars
                    line(constellation[i].loc.x, constellation[i].loc.y, constellation[j].loc.x, constellation[j].loc.y)
                }
            }
        }
    }
    // blendMode(BLEND);
 
    if (mouseX > width * 0.8 && mouseY > height * 0.85 && mouseY < height) {

        re_h = re_h * part + (1 - part) * (0.4 + 0.1*sin(frameCount * 0.01));
       
    }else{
        re_h = re_h * part + (1 - part) * 1.1;

    }

    reveal(re_h);
    
    // rect(width * 0.7, height * 0.7, width * 0.3, height * 0.3);
}
function reveal(reh){

    blendMode(BLEND);
    fill(255, 255, 255);
    noStroke();
    // noFill();
    // stroke(255);
//     beginShape();
//     curveVertex(width * 0.7, height);
//     curveVertex(width * 0.7, height);
//     // for (var n = 0; n < 10; n ++); {
//     //     curveVertex(n * width * 0.03 + width * 0.7, height * 0.85 + height * 0.02 * sin(frameCount * 0.01) * cos(n*1.3));
//     //     console.log(n * width * 0.1, height * cos(20));
//     // }
//     // beginShape();
//     curveVertex( width * 0.1 + width * 0.7, height * 0.85 + height * 0.02 * sin(frameCount * 0.01) * sin(0));
//     curveVertex(width * 0.2 + width * 0.7, height * 0.85 + height * 0.02 * cos(frameCount * 0.01) *sin(30));
//     curveVertex(width * 0.25 + width * 0.7, height * 0.85 + height * 0.02 * sin(frameCount * 0.01) * sin(60));
//    curveVertex( width * 0.3+ width * 0.7, height * 0.85 + height * 0.02 * cos(frameCount * 0.01) * sin(90)); // curveVertex(width * 0.8, height * 0.9 + height*0.02*sin(frameCount*0.01));
//     // curveVertex(width * 0.85, height * 0.85+ height * 0.02 * cos(frameCount * 0.01));
//     // curveVertex(width * 0.9, height * 0.85 + height * 0.02 * sin(frameCount * 0.01));
//     // curveVertex(width * 0.95, height * 0.85 + height * 0.02 * cos(frameCount * 0.01));
//     // curveVertex(width, height*0.8);
//     curveVertex(width , height);
//     curveVertex(width , height);
  
  
//     endShape();
    // endShape();
    bezier(width * 0.7, height, width, height, width * 1.2, height * reh, width*1.2, height*1.2);
}
function star() {

    this.a = random(5 * TAU); // "5*TAU" => render will be more homogeneous
    this.r = random(width * .2, width * .2); // first position will looks like a donut
    this.loc = createVector(width / 2 + sin(this.a) * this.r, height / 2 + cos(this.a) * this.r);
    this.speed = createVector();
    this.speed = p5.Vector.random2D();
    //this.speed.random2D();
    this.bam = createVector();
    this.m;


    this.update = function () {
        this.bam = p5.Vector.random2D(); // movement of star will be a bit erractic
        //this.bam.random2D();
        this.bam.mult(0.5);
        this.speed.add(this.bam);
        // speed is done according distance between loc and the mouse :
        this.m = constrain(map(dist(this.loc.x, this.loc.y, mouseX, mouseY), 0, width, 8, .05), .05, 4); // constrain => avoid returning "not a number"
        this.speed.normalize().mult(this.m);

        // No colision detection, instead loc is out of bound
        // it reappears on the opposite side :
        if (dist(this.loc.x, this.loc.y, width / 2, height / 2) > (width / 2) * 0.98) {
            if (this.loc.x < width / 2) {
                this.loc.x = width - this.loc.x - 4; // "-4" => avoid blinking stuff
            } else if (this.loc.x > width / 2) {
                this.loc.x = width - this.loc.x + 4; // "+4"  => avoid blinking stuff
            }
            if (this.loc.y < height / 2) {
                this.loc.y = width - this.loc.y - 4;
            } else if (this.loc.x > height / 2) {
                this.loc.y = width - this.loc.y + 4;
            }
        }
        this.loc = this.loc.add(this.speed);
    } // End of update()
} // End of class