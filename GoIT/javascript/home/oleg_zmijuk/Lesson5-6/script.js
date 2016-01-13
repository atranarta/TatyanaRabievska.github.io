var timer;
var hours = 0;
var min = 0;
var sec = 0;
var ms = 0;

document.getElementById('btn1').onclick = function() {

    document.getElementById('start').style.display = (document.getElementById('start').style.display == 'none') ? 'block' : 'none';
    document.getElementById('pause').style.display = (document.getElementById('pause').style.display == 'block') ? 'none' : 'block';

};

var run = function() {
    timer = setInterval (
        function() {
            ms += 10;

            if (ms === 1000) {
                sec++;
                ms = 0;
            }

            if (sec === 60) {
                min++;
                sec = 0;
            }

            if (min === 60) {
                hours++;
                min = 0;
            }
           
           if (hours === 24) {
                hours = 0;
            }
            updateHtml();
        },
        10
    );
    }

var doPause = function() {
    clearInterval(timer);
}

var resetTimer = function() {
    clearInterval(timer);

    document.getElementById('start').style.display = 'block';
    document.getElementById('pause').style.display = 'none';

    hours = min = sec = ms = 0;
    
    updateHtml();
};

function updateHtml() {

    var msHtml = ms;

    if  (ms < 10) {
        msHtml = "0" + msHtml;
    }

    if  (ms < 100) {
        msHtml = "0" + msHtml;
    }

    document.getElementById('ms').innerHTML = msHtml;
    document.getElementById('sec').innerHTML = sec < 10 ? "0" + sec : sec;
    document.getElementById('min').innerHTML = min < 10 ? "0" + min : min;
    document.getElementById('hours').innerHTML = hours < 10 ? "0" + hours : hours;
}


document.getElementById('start').addEventListener("click", run);
document.getElementById('pause').addEventListener("click", doPause);
document.getElementById('reset').addEventListener("click", resetTimer);