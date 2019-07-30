var blink_speed = 1500; // every 1000 == 1 second, adjust to suit
var t = setInterval(function () {
    var ele = document.getElementById('myBlink');
    ele.style.visibility = (ele.style.visibility == 'hidden' ? '' : 'hidden');
}, blink_speed);


function growText() {
    document.getElementById("myHead").addEventListener("mouseover", function(){
        document.getElementsByTagName("section").style.height = "400px";

});
};