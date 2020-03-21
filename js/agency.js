
document.getElementById("forwardSlide").addEventListener("click", forwardSlide);
document.getElementById("backSlide").addEventListener("click", backSlide);
var i = 1;
function forwardSlide() {
  var classLength = document.querySelectorAll('.slider-section-inner').length;
  if(classLength > i) {
    var element = document.getElementById("slide-"+i);
    element.className = element.className.replace(/\bslider-section-inner-acitve\b/g, "");
    var element = document.getElementById("slide-"+(i+1));
    element.classList.add("slider-section-inner-acitve");
    i++;
  }
}

function backSlide() {
  if(i>1) {
    var element = document.getElementById("slide-"+i);
    element.className = element.className.replace(/\bslider-section-inner-acitve\b/g, "");
    var element = document.getElementById("slide-"+(i-1));
    element.classList.add("slider-section-inner-acitve");
    i--;
  }
}

// Get the modal content
var modal = document.getElementById("videoModal");

// Get the button that opens the modal
var youtubeIcon = document.getElementById("youtubeVideo");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
youtubeIcon.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
