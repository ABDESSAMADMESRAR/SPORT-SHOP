const biggerContainer = document.querySelector(".bigger-contaier");

const kahyaan = document.getElementById("kahyaan");
const visa = document.getElementById("visa");

const buy = document.querySelectorAll(".js-buy");
// when click on buy button
buy.forEach((item) => {
  item.addEventListener("click", (eo) => {
    biggerContainer.classList.add("active");
    eo.preventDefault();

    kahyaan.style.display = "none";

    visa.style.display = "block";
  });
});

const aywaa = document.querySelectorAll(".aywaa");
// // forEach
aywaa.forEach((item) => {
  item.addEventListener("click", (eo) => {
    kahyaan.style.display = "block";
    visa.style.display = "none";
    eo.preventDefault();


    setTimeout(() => {
      kahyaan.style.display = "none";
      biggerContainer.classList.remove("active");
    
    }, 1000);
  });
});