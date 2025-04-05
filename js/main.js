const navToggler = document.querySelector(".nav__toggler");
const collapsible = document.querySelector(".collapsible");

const hero = document.querySelectorAll(".hero__box");
// const heroExperience = document.querySelectorAll(".hero__experience")
hero.forEach((item) => {
  item.addEventListener("mouseover", function () {
    this.classList.add("outsider"); // Add class on hover
  });

  item.addEventListener("mouseleave", function () {
    this.classList.remove("outsider"); // Remove class when mouse leaves
  });
});

navToggler.addEventListener("click", function () {
  collapsible.classList.toggle("collapsible--expanded");
});

//
// document.querySelector("h1").addEventListener("mouseover", function () {
//   this.style.color = "purple";
// });
