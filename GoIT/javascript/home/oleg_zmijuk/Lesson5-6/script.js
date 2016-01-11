var timer;
var hou = 0;
var min = 0;
var sec = 0;
var ms = 0;
var right = true;

document.getElementById('btn1').onclick = function() {
      
    document.getElementById('start').style.display = (document.getElementById('start').style.display == 'none') ? 'block' : 'none';
    document.getElementById('pause').style.display = (document.getElementById('pause').style.display == 'block') ? 'none' : 'block';
    
}

var run = function() {
    if(right) {
       timer = setInterval (function() {
            ms++;

            if(ms % 1000 === 0) {
                sec++;
                ms = 0;
            };

            if(sec % 60 === 0) {
                min++;
                sec = 0;
            };

            if(min % 60 === 0) {
                hou++;
                min = 0;
            };
           
           if(hou % 24 === 0) {
               hou = 0;
           };

            document.getElementById('ms').innerHTML = ms;
            document.getElementById('sec').innerHTML = sec;
            document.getElementById('min').innerHTML = min;
            document.getElementById('hou').innerHTML = hou;
           
           
            if (document.getElementById('hou').innerHTML == 0) document.getElementById('hou').innerHTML = "0" +         document.getElementById('hou').innerHTML;
            if (document.getElementById('hou').innerHTML < 10 && document.getElementById('hou').innerHTML.charAt(0) != 0) {
                document.getElementById('hou').innerHTML = "0" + document.getElementById('hou').innerHTML;
            }
           
            if (document.getElementById('min').innerHTML  == 0) document.getElementById('min').innerHTML = "0" + document.getElementById('min').innerHTML;
            if (document.getElementById('min').innerHTML < 10 && document.getElementById('min').innerHTML.charAt(0) != 0) {
                document.getElementById('min').innerHTML = "0" + document.getElementById('min').innerHTML;
            }
           
           if (document.getElementById('sec').innerHTML  == 0) document.getElementById('sec').innerHTML = "0" + document.getElementById('sec').innerHTML; 
           if (document.getElementById('sec').innerHTML < 10 && document.getElementById('sec').innerHTML.charAt(0) != 0) {
                document.getElementById('sec').innerHTML = "0" + document.getElementById('sec').innerHTML;
            }

        },
        1);
    }
    right = false;
}

var rightToFalse = function() {
    if (right == false) right = true;
}

var resetTimer = function() {
    document.getElementById('ms').innerHTML = 0;
    document.getElementById('sec').innerHTML = "0" + "0";
    document.getElementById('min').innerHTML = "0" + "0";
    document.getElementById('hou').innerHTML = "0" + "0";
}


document.getElementById('start').addEventListener("click", run);
document.getElementById('pause').addEventListener("click", rightToFalse);
document.getElementById('reset').addEventListener("click", resetTimer);










