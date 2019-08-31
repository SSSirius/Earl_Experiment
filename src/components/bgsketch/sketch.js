export default function sketch(p) {

    let constellation = [];
    let n;
    let d;

    p.setup = function () {
        // p.createCanvas(p.windowWidth, p.windowHeight);
         p.createCanvas(1100, 800);
        p.pixelDensity(1); // Set 1 because it's too slow on firefox
        //pixelDensity(displayDensity());
        n = 80;
        //  noLoop();
        for (var i = 0; i <= n; i++) {
            constellation.push(new p.star());
        }
        p.strokeWeight(.5);
        p.stroke(255, 255, 255, 150);
    };

    // p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
    //     if (props.rotation !== null) {
    //         rotation = props.rotation * Math.PI / 180;
    //     }
    // };

    p.draw = function () {
        p.background('#000000');
        // if (p.windowWidth > 600) {
            p.push();
            // p.translate(-p.width * 0.5, -p.height * 0.5)
            p.blendMode(p.BLEND);
            p.fill(0, 0, 0, 220);
            p.noStroke();
            p.rect(0, 0, p.width, p.height);
            // rect(0, height - 50, width*0.5, 50);
            //  blendMode(ADD);

            // blendMode(BLEND);
            p.blendMode(p.ADD);
            p.strokeWeight(0.5);
            p.stroke(255, 255, 255, 180);
            for (var i = 0; i < constellation.length; i++) {
                constellation[i].update();
                for (var j = 0; j < constellation.length; j++) {
                    if (i > j) { // "if (i > j)" => to check one time distance between two stars
                        d = p.dist(constellation[i].loc.x, constellation[i].loc.y, constellation[j].loc.x, constellation[j].loc.y); // Distance between two stars
                        if (d <= p.width / 10) { // if d is less than width/10 px, we draw a line between the two stars
                            p.line(constellation[i].loc.x, constellation[i].loc.y, constellation[j].loc.x, constellation[j].loc.y)
                        }
                    }
                }
            }
            p.pop();
            // reveal(re_h);
        // }
    };

    p.star = function () {
        this.a = p.random(5 * p.TAU); // "5*TAU" => render will be more homogeneous
        this.r = p.random(p.width * .2, p.width * .2); // first position will looks like a donut
        this.loc = p.createVector(p.width / 2 + p.sin(this.a) * this.r, p.height / 2 + p.cos(this.a) * this.r);
        this.speed = p.createVector(p.random(-1, 1), p.random(-1, 1));
        // this.speed =p5.Vector.random2D();
        // this.speed.px.random2D();
        this.bam = p.createVector();
        // this.m;


        this.update = function () {
            // this.bam = p5.Vector.random2D(); // movement of star will be a bit erractic
            this.bam = p.createVector(p.random(-0.1, 0.1), p.random(-0.1, 0.1));
            this.bam.mult(0.5);
            this.speed.add(this.bam);

            // speed is done according distance between loc and the mouse :
            this.m = p.constrain(p.map(p.dist(this.loc.x, this.loc.y, p.mouseX, p.mouseY), 0, p.width, 8, .05), .05, 4); // constrain => avoid returning "not a number"
            this.speed.normalize().mult(this.m);

            // No colision detection, instead loc is out of bound
            // it reappears on the opposite side :
            if (p.dist(this.loc.x, this.loc.y, p.width / 2, p.height / 2) > (p.width / 2) * 0.98) {
                if (this.loc.x < p.width / 2) {
                    this.loc.x = p.width - this.loc.x - 4; // "-4" => avoid blinking stuff
                } else if (this.loc.x > p.width / 2) {
                    this.loc.x = p.width - this.loc.x + 4; // "+4"  => avoid blinking stuff
                }
                if (this.loc.y < p.height / 2) {
                    this.loc.y = p.width - this.loc.y - 4;
                } else if (this.loc.x > p.height / 2) {
                    this.loc.y = p.width - this.loc.y + 4;
                }
            }
            this.loc = this.loc.add(this.speed);
        };
    };
}
// export default function sketch(s) {
//     s.props = {}
//     s.onSetAppState = () => {}

//     s.setup = function() {
//         s.createCanvas(900, 300)
//         console.log('::: displayDensity:', s.displayDensity())
//         console.log('::: pixelDensity:', s.pixelDensity())
//     }

//     s.draw = function() {
//         if (s.frameCount % 60 === 1) {
//             s.onSetAppState({ frameRate: s.frameRate().toFixed(1) })
//         }

//         s.background(127, 0, 50)
//         const weight = s.map(s.props.slider, 5, 290, 0, 10)
//         s.strokeWeight(weight)
//         s.stroke(127, 255, 205)
//         const alpha = s.map(s.props.slider, 5, 290, 255, 0)
//         s.fill(127, 255, 205, alpha)
//         s.ellipse(s.width / 2, s.height / 2, s.props.slider)
//     }
// }