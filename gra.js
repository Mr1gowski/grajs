
var id1;
var id2;
var id3;
var width = 450;
var width2 = 450;
var position=42;
var top1=90;


document.getElementById("lewo").addEventListener("mouseover", turnleft);
document.getElementById("lewo").addEventListener("mouseout", stop);
document.getElementById("prawo").addEventListener("mouseover", turnright);
document.getElementById("prawo").addEventListener("mouseout", stop);



function turnright() {
    var elem = document.getElementById("pasek");
	
	
     id1 = setInterval(frame, 20);
    function frame() {
		console.log('dzialawlewo');
        if (position >= 85) {
            clearInterval(id1);
        } else {
            position++;
            elem.style.left = position + '%';
        }
    }
}



function turnleft() {
    var elem = document.getElementById("pasek");
	
    id2 = setInterval(frame, 20);
    function frame() {
		
        if (position <= 0) {
            clearInterval(id2);
        } else {
            position--;console.log('dzialawprawo');
            elem.style.left = position + '%';
        }
    }
}



function kulka() {
    var elem = document.getElementById("kulka");
	
    id3 = setInterval(frame, 20);
    function frame() {
		
        if (top1 <= 2) {
            clearInterval(id3);
        } else {
            top1--;
			console.log('dziala');
            elem.style.top = top1 + '%';
        }
    }
}













function stop(){
clearInterval(id1);
clearInterval(id2);
}
