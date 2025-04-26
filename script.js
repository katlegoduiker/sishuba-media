// Scroll To Top Button
let mybutton = document.getElementById("myBtn");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


// Carousel Slider Buttons
function scrollCarousel(direction) {
  const carousel = document.getElementById('myCarousel');
  const bsCarousel = bootstrap.Carousel.getInstance(carousel) || new bootstrap.Carousel(carousel);

  if (direction === 'prev') {
    bsCarousel.prev();
  } else {
    bsCarousel.next();
  }
}

// Carousel Slider
if (window.location.pathname.includes("clients.html")) {
  document.addEventListener("DOMContentLoaded", function() {
    const hash = window.location.hash;

    const carouselElement = document.querySelector('#myCarousel');
    const carouselInstance = new bootstrap.Carousel(carouselElement, {
      interval: false, // Disable auto-sliding
      ride: false, // Don't auto-start the carousel
    });

    if (hash && hash.startsWith("#slide-")) {
      const slideIndex = parseInt(hash.replace("#slide-", ""), 10);
      
      if (!isNaN(slideIndex)) {
        carouselInstance.to(slideIndex);
      }
    }
  });
}