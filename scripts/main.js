let parallax = document.querySelectorAll(".parallaxScroll");
let listProductHot = document.querySelectorAll(
  "#itemHotProduct div[data-productHot]"
);
let productHot = document.querySelector("#productHot");
let navgation = document.querySelector("#nav");
let checkProductHotActive = false;
function autoScrollSlide(list) {
  let lengthList = list.length,
    currIndex = 0;
  list[currIndex].style.display = "block";
  setInterval(() => {
    list[currIndex].style.display = "none";
    ++currIndex;
    if (currIndex === lengthList) {
      currIndex = 0;
    }
    list[currIndex].style.display = "block";
  }, 5000);
}
// Parallax scroll
document.addEventListener("scroll", () => {
  // Nav Active
  activeMenu();
  // End Nav Active
  // Nav
  if (window.scrollY > 150) {
    navgation.classList.add(
      "toFixed",
      "animate__slideInDown",
      "animate__animated"
    );
  } else
    navgation.classList.remove(
      "toFixed",
      "animate__slideInDown",
      "animate__animated"
    );
  // End Nav
  if (productHot.offsetTop - window.scrollY < 350 && !checkProductHotActive) {
    autoScrollSlide(listProductHot);
    checkProductHotActive = true;
  }
  parallax.forEach((item) => {
    if (item.offsetTop - window.scrollY < 350) {
      item.classList.add("active");
    } else item.classList.remove("active");
  });
});
// End Parallax scroll
// Active Menu
let navgationActive = document.querySelectorAll("#nav .links");
let selector = document.querySelectorAll(".selector");
function activeMenu() {
  let length = selector.length;
  while (--length && selector[length].offsetTop > window.scrollY + 100) {}
  navgationActive.forEach((item) => {
    item.classList.remove("activeNav");
  });
  navgationActive[length].classList.add("activeNav");
}
activeMenu();
// End Active Menu
