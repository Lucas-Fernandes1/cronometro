"use strict"

var h = 0;
var mm = 0;
var s = 0;

var tempo = 10; //milésimos de segundo
var cron;

function start() {
    cron = setInterval(() => {timer(); }, tempo);
}
start()


function pause() {
    clearInterval(cron);
}


function stop() {
    clearInterval(cron);
    h = 0;
    mm = 0;
    s = 0;
    document.getElementById('counter').innerText = '00:00:00';

}

function timer() {
    s++;
    
    if(s == 60) {
        s = 0;
        mm++;
    }

    if(mm == 60) {
        mm = 0;
        h++;
    }
    
    var format = (h <10 ? '0'+ h : h) + ':' + (mm < 10 ? '0'+ mm : mm) + ':' + (s < 10 ? '0'+ s : s);
    document.getElementById('counter').innerText = format;
}