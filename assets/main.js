let currentIndex = 0;

function nextSlide() {
  const items = document.querySelectorAll(".carousel-item");
  items[currentIndex].classList.remove("active");
  currentIndex = (currentIndex + 1) % items.length;
  items[currentIndex].classList.add("active");
}

// Auto-slide functionality (optional)
// setInterval(nextSlide, 5000);
