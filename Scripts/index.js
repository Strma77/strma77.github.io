// JavaScript to toggle the navbar
let headerLinks = document.getElementById("header-links");
let headerOpen = document.getElementById("header-open");
let headerClose = document.getElementById("header-close");

function showHamburger() {
    headerLinks.style.display = "flex";
    headerClose.style.display = "flex";
    headerOpen.style.display = "none";
}

function hideHamburger() {
    headerLinks.style.display = "none";
    headerClose.style.display = "none";
    headerOpen.style.display = "flex";
}


//Scroll indicator
document.addEventListener('scroll', function() {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    const scrollTop = window.scrollY; // Current scroll position from the top
    const documentHeight = document.documentElement.scrollHeight; // Total height of the document
    const windowHeight = window.innerHeight; // Height of the visible window
    const totalHeight = documentHeight - windowHeight; // Total height that can be scrolled

    // Calculate the scroll percentage
    const scrollPercentage = (scrollTop / totalHeight) * 100;
    
    console.log(scrollPercentage)

    // Update the width of the scroll indicator
    scrollIndicator.style.width = `${scrollPercentage}%`;
});


// Back to top button
let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 500) {
    mybutton.classList.add("show");
  } else {
    mybutton.classList.remove("show");
  }
}


function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}