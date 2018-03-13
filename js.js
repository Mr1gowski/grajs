function move() {
    var elem = document.getElementById("pasek");

    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 85) {
            clearInterval(id1);
        } else {
            width++;
            elem.style.left = width + '%';
        }
    }
}

function move1() {
    var elem = document.getElementById("pasek");

    var id2 = setInterval(frame, 10);
    function frame() {
        if (width <= 0) {
            clearInterval(id2);
        } else {
            width--;
            elem.style.right = width+ '%';
        }
    }
}


var id1;
var id2;
var width = 450;
var width2 = 450;

function stop(){
clearInterval(id1);
clearInterval(id2);
}
