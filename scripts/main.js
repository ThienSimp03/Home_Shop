let parallax = document.querySelectorAll(".parallaxScroll");
// Parallax scroll
document.addEventListener("scroll", () => {
  parallax.forEach((item) => {
    if (item.offsetTop - window.scrollY < 350) {
      item.classList.add("active");
    }
  });
});
// End Parallax scroll
