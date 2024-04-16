var width = screen.width;
console.log(width);
if (width < 768) {
    let slideIndex = [1,1,1];
    let slideId = ["album-prev", "song-prev", "playlist-prev"]
    showSlides(1, 0);
    showSlides(1, 1);
    showSlides(1, 2);

    function plusSlides(n, no) {
    showSlides(slideIndex[no] += n, no);
    }

    function showSlides(n, no) {
    let i;
    let x = document.getElementsByClassName(slideId[no]);
    if (n > x.length) {slideIndex[no] = 1}    
    if (n < 2) {slideIndex[no] = x.length}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }
    x[slideIndex[no]-1].style.display = "block";  
    }

}

else {
    document.getElementsByClassName("discoverslides").style.display = "grid";
}
