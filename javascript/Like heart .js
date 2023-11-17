// click heart css javascript

const heart = document.querySelectorAll(".heart");

heart.forEach((currentItem) => {
  currentItem.addEventListener("click", (params) => {
    currentItem.classList.toggle("red");
  });
});