const burgerMenu = document.getElementById("burger-menu");
const menu = document.getElementById("menu");

burgerMenu.addEventListener("click", () => {
  burgerMenu.classList.toggle("open");
  menu.classList.toggle("open");
});

const nav__options = document.getElementsByClassName("nav__options");

// function findPosition(obj) {
//   var currenttop = 0;
//   console.log(obj);
//   if (obj.offsetParent) {
//     do {
//       currenttop += obj.offsetTop;
//     } while ((obj = obj.offsetParent));
//     return [currenttop];
//   }
// }

// function scrollFunction(element) {
//   console.log("ID: ", element);
//   console.log("ELEMENT BY ID: ", document.getElementById(element));
//   const position = findPosition(document.getElementById(element));
//   console.log(position);
//   //   window.scroll(0, position);
//   window.scrollTo({
//     x: 0,
//     y: position[0],
//     duration: 2000,
//   });
// }

for (let i = 0; i < nav__options.length; i++) {
  nav__options[i].addEventListener("click", async (event) => {
    burgerMenu.classList.toggle("open");
    menu.classList.toggle("open");
    // Obtén la posición del elemento al que apunta el enlace
    // console.log(event.target.href.split("#")[1]);
    let currentTarget = `${event.target.href.split("#")[1]}`;
    const target = document.getElementById(currentTarget);
    // console.log("Current target", currentTarget);
    // const target = document.querySelector(currentTarget);
    window.scrollTo({
      x: 0,
      y: target.offsetTop,
      duration: 2000,
    });
    // target.scrollIntoView({
    //   behavior: "smooth",
    // });
    // scrollFunction(currentTarget);
  });
}
