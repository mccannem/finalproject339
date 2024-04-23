// INDEX
document.getElementById("aboutbutton").addEventListener("click", function() {
    document.getElementById("explain").style.display = "block";
    document.getElementById("aboutbutton").style.display = "none";
})

var popoutFunction1 = function(){
    document.getElementById("popout1").classList.add("popouthover");
}
document.getElementById("feedavatar1").addEventListener('mouseover', popoutFunction1);

var removePopoutFunction1 = function(){
    document.getElementById("popout1").classList.remove("popouthover");
}
document.getElementById("feedavatar1").addEventListener('mouseleave', removePopoutFunction1);

var popoutFunction2 = function(){
    document.getElementById("popout2").classList.add("popouthover");
}
document.getElementById("feedavatar2").addEventListener('mouseover', popoutFunction2);

var removePopoutFunction2 = function(){
    document.getElementById("popout2").classList.remove("popouthover");
}
document.getElementById("feedavatar2").addEventListener('mouseleave', removePopoutFunction2);

var popoutFunction3 = function(){
    document.getElementById("popout3").classList.add("popouthover");
}
document.getElementById("feedavatar3").addEventListener('mouseover', popoutFunction3);

var removePopoutFunction3 = function(){
    document.getElementById("popout3").classList.remove("popouthover");
}
document.getElementById("feedavatar3").addEventListener('mouseleave', removePopoutFunction3);