var H = $("#home-cate").offset().top;
$(function () {
    $('#home-down-btn').click(function () {
        //用变量获取元素div块的高度H
        scrollTopSmooth(H);


        // document.addEventListener('touchstart', handler, {
        //     passive: true
        // });


        // $("body").scroll(function () {
        //     console.log(3);
        //     // if ($("body").scrollTop() > $("#home-cate").offset().top * 0.8) {
        //     //     $(".nav-home").fadeTo("slow", 1);

        //     // } else {

        //     //     $(".nav-home").fadeTo("slow", 0);
        //     // }
        // });

    });
    window.addEventListener("scroll",
        function () {
            var sctop = document.documentElement.scrollTop;
           
            var op = (sctop - H * 0.7) / (H *0.3);
            if (op < 0) op = 0;
            if (op > 1) op = 1;
//  console.log(sctop);
//  console.log(op);
            $("#nav-home").css("opacity", op);
            $("#nav-home").css("top", H + op * 20 - 20);
            // var bkcolor = "hsl(120,0%," + op * 200+ "%)";
            // $("#nav-home").css("background-color", bkcolor);
        

            // fadeTo("slow", (H - sctop) / H);
        }

        , false);
});


// $(".nav-home").fadeTo("slow", 0);


var easeout = function (position, destination, rate, callback) {
    if (position === destination || typeof destination !== 'number') {
        return false;
    }
    destination = destination || 0;
    rate = rate || 4;
    if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = function (fn) {
            return setTimeout(fn, 17);
        }
    }

    var step = function () {
        position = position + (destination - position) / rate;
        if (Math.abs(destination - position) < 1) {
            callback(destination, true);
            return;
        }
        callback(position, false);
        requestAnimationFrame(step);
    };
    step();
}
var scrollTopSmooth = function (position) {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    easeout(scrollTop, position, 10, function (val) {
        window.scrollTo(0, val);
    });
}
