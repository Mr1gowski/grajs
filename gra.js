

var id1;
var id2;
var width = 450;
var width2 = 450;


document.getElementById("lewo").addEventListener("mouseover", turnleft);
document.getElementById("lewo").addEventListener("mouseout", stop);


function turnleft() {
    var elem = document.getElementById("pasek");

    var id = setInterval(frame, 20);
    function frame() {
        if (position >= 85) {
            clearInterval(id1);
        } else {
            position++;
            elem.style.left = position + '%';
        }
    }
}


document.getElementById("prawo").addEventListener("mouseover", turnright);
document.getElementById("prawo").addEventListener("mouseout", stop);


function turnright() {
    var elem = document.getElementById("pasek");

    var id2 = setInterval(frame, 20);
    function frame() {
        if (width >= 0) {
            clearInterval(id2);
        } else {
            width--;
            elem.style.right = width+ '%';
        }
    }
}




function stop(){
clearInterval(id1);
clearInterval(id2);
}
