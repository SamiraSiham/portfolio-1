$(document).ready(function(){
    var i = 0;
    var txt = 'Full Stack Web Developer';
    var speed = 150;
    function Write(){
        if(i<txt.length){
            document.getElementById("typeEffect").innerHTML += txt.charAt(i);
            i++;
            setTimeout(Write,speed);
        }
    }
    Write()
})