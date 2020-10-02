//Reviewed examples for carousel at www.w3schools.com/howto/tryit.asp?filename=tryhow_js_slideshow_auto
//Some of the below code was inspired by the examples provided.

//Declaration of variable position to track current position in carousel.
var position = 0;

//Function call.
animateCarousel();

function animateCarousel() {
    //variable is an array which holds elements with class name "store-images"
    var pictures = document.getElementsByClassName("store-images");

    //for loop iterates through array
    for (var index = 0; index < pictures.length; index++) {
        pictures[index].style.display = "none";
    }

    //position variable increments.
    position++;

    //if the position variable is greater than the number of array elements, it is initialized to 1
    if (position > pictures.length) {
        position = 1;
    }
    //array element is displayed at position number minus one.  style is in block
    pictures[position - 1].style.display = "block";

    //setTimeOut function receives animateCarousel function as an argument with 1.5 seconds display time.
    setTimeout(animateCarousel, 1500);
}