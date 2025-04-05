const navToggler = document.querySelector(".nav__toggler");
const collapsible = document.querySelector(".collapsible");

navToggler.addEventListener("click", function () {
  collapsible.classList.toggle("collapsible--expanded");
});

//
// document.querySelector("h1").addEventListener("mouseover", function () {
//   this.style.color = "purple";
// });
