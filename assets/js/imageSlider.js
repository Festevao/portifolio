function slidersScope() {
  let slideIndex = 1;

  function showSlides(n) {
    let i;
    let slides = document.querySelectorAll(".mySlides");
    let dots = document.querySelectorAll(".dot");
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  }

  showSlides(slideIndex);

  let interval = setInterval(() => {
    slideIndex++;
    showSlides(slideIndex);
  }, 7500);

  function currentSlide(n) {
    clearInterval(interval);
    showSlides((slideIndex = n));
    interval = setInterval(() => {
      slideIndex++;
      showSlides(slideIndex);
    }, 7500);
  }

  const dots = document.querySelectorAll(".dot");
  dots.forEach(function (dot, index) {
    dot.addEventListener("click", function (event) {
      currentSlide(index + 1);
    });
  });
}

slidersScope();
