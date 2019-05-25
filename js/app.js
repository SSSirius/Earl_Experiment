$(function () {
    $('#home-down-btn').click(function () {
        var H = $("#home-cate").offset().top; //用变量获取元素div块的高度H
        // scrollTopSmooth(H);
    })
})

var easeout = function (position, destination, rate, callback) {
    if (position === destination || typeof destination !== 'number') {
        return false;
    }
    destination = destination || 0;
    rate = rate || 2;
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
    easeout(scrollTop, position, 20, function (val) {
        window.scrollTo(0, val);
    });
}
