let parallax = document.querySelectorAll(".parallaxScroll");
let listProductHot = document.querySelectorAll(
  "#itemHotProduct div[data-productHot]"
);
listProductHot[0].style.display = "block";
let productHot = document.querySelector("#productHot");
let checkProductHotActive = false;
function autoScrollSlide(list) {
  let lengthList = list.length,
    currIndex = 0;
  // list[currIndex].style.display = "block";
  setInterval(() => {
    list[currIndex].style.display = "none";
    ++currIndex;
    if (currIndex === lengthList) {
      currIndex = 0;
    }
    list[currIndex].style.display = "block";
  }, 3000);
}
// Parallax scroll
document.addEventListener("scroll", () => {
  if (productHot.offsetTop - window.scrollY < 350 && !checkProductHotActive) {
    autoScrollSlide(listProductHot);
    checkProductHotActive = true;
  }
  parallax.forEach((item) => {
    if (item.offsetTop - window.scrollY < 350) {
      item.classList.add("active");
    }
  });
});
// End Parallax scroll
