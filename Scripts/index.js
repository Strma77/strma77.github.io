// ===== Load Header & Footer =====
async function loadHTML(selector, url, callback) {
  try {
    const res = await fetch(url);
    const html = await res.text();
    document.querySelector(selector).innerHTML = html;
    if (callback) callback(); // run additional logic (e.g., event setup) after load
  } catch (err) {
    console.error(`Error loading ${url}:`, err);
  }
}

function initHeader() {
  // Re-fetch header DOM elements (since they’re now in the DOM after .innerHTML)
  headerLinks = document.getElementById("header-links");
  headerOpen = document.getElementById("header-open");
  headerClose = document.getElementById("header-close");
}

// First load the header, then initialize header-related functions
loadHTML("#header-container", "../HTMLs/header.html", initHeader);
loadHTML("#footer-container", "../HTMLs/footer.html");

// JavaScript to toggle the navbar
let headerLinks = document.getElementById("header-links");
let headerOpen = document.getElementById("header-open");
let headerClose = document.getElementById("header-close");

function showHamburger() {
  headerLinks.classList.add("show");
  headerClose.style.display = "flex";
  headerOpen.style.display = "none";
}

function hideHamburger() {
  headerLinks.classList.remove("show");
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
  window.scrollTo({top: 0, behavior: 'smooth'});
}