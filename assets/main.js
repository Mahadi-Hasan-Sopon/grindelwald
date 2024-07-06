let currentIndex = 0;

function nextSlide() {
  const items = document.querySelectorAll(".carousel-item");
  items[currentIndex].classList.remove("active");
  currentIndex = (currentIndex + 1) % items.length;
  items[currentIndex].classList.add("active");
}

// Auto-slide functionality (optional)
// setInterval(nextSlide, 5000);

// Dashboard scripts below

// for dashboard navigation
document.addEventListener("DOMContentLoaded", function () {
  const navItems = document.querySelectorAll(".nav-items .nav-item");

  navItems.forEach((item) => {
    item.addEventListener("click", function (e) {
      e.preventDefault();

      // Remove the active class from all nav items
      navItems.forEach((nav) => nav.classList.remove("active"));

      // Add the active class to the clicked nav item
      this.classList.add("active");
    });
  });
});
