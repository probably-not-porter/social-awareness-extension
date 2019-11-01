




function startTime() {
    var today = new Date();
    var height = document.body.clientHeight;
    var width = document.body.clientWidth;

    c_s = document.getElementById('c-seconds');
    c_s.style.right = ((width / 2) -400) + 'px';
    c_s.style.top = ((height / 2) -400) + 'px';

    c_m = document.getElementById('c-minutes');
    c_m.style.right = ((width / 2) -300) + 'px';
    c_m.style.top = ((height / 2) -300) + 'px';

    c_h = document.getElementById('c-hours');
    c_h.style.right = ((width / 2) -200) + 'px';
    c_h.style.top = ((height / 2) -200) + 'px';

    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var ms = today.getMilliseconds();

    // Create Hour sat
    var r_h = ((h + (m/60)) / 12) * (2 * Math.PI) + Math.PI;
    y_h = -1* Math.cos(r_h+ Math.PI) * 200;
    x_h = Math.sin(r_h) * 200;
    p_h = document.getElementById('hours');
    p_h.innerHTML = h;
    p_h.style.right = ((width / 2 - 25) + (x_h)) + 'px';
    p_h.style.top = ((height / 2 - 25) + (y_h)) + 'px';

    // Create Minute sat
    var r_m = ((m + (s / 60)) / 60) * (2 * Math.PI) + Math.PI;
    y_m = -1* Math.cos(r_m+ Math.PI) * 295;
    x_m = Math.sin(r_m) * 295;
    p_m = document.getElementById('minutes');
    p_m.innerHTML = m;
    p_m.style.right = ((width / 2 - 25) + (x_m)) + 'px';
    p_m.style.top = ((height / 2 - 25) + (y_m)) + 'px';

    

    // Create Second sat
    var r_s = ((s + (ms/1000)) / 60) * (2 * Math.PI);
    y_s = Math.cos(r_s+ Math.PI) * 400;
    x_s = -1* Math.sin(r_s) * 400;
    p_s = document.getElementById('seconds');
    p_s.innerHTML = s;
    p_s.style.right = ((width / 2 - 25) + (x_s)) + 'px';
    p_s.style.top = ((height / 2 - 25) + (y_s)) + 'px';


    // create sun
    var sun = document.getElementById('sun');
    sun.style.left = (width / 2 - 75) + 'px';
    sun.style.top = (height / 2 - 75) + 'px';

    // Recur loop
    var t = setTimeout(startTime, 20);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

$(document).ready(function() {
    console.log('did we make it?');
    startTime();
});