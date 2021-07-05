/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";  
document.getElementByClassName("category").style.opacity="0";
}

//search box
// Open the full screen search box
function openSearch() {
  document.getElementById("myOverlay").style.display = "block";
}

// Close the full screen search box
function closeSearch() {
  document.getElementById("myOverlay").style.display = "none";
}
var year=new Date().getFullYear();
document.getElementById("year").innerHTML=year;
//sign in and login in
function signup(){
document.getElementById("signup").style.display="block";
document.getElementById('login').style.display="none";}
function login(){
document.getElementById("signup").style.display="none";
document.getElementById('login').style.display="block";}
/*loader animation
$(window).on("load",function(){
$(".loader-container") .fadeout(5000)})*/
//add to cart

//end of cart page
//homepage slide
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function frontback(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentdot(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide-container");
  var dots = document.getElementsByClassName("point");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slide-container");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 10000); 
} 