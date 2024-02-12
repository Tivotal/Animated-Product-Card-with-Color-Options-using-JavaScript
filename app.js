/* Created by Tivotal */

let colors = document.querySelectorAll(".color span");

for (let i = 0; i < colors.length; i++) {
  colors[i].addEventListener("click", () => {
    document.documentElement.style.setProperty("--degree", i);

    document.querySelector(".active").classList.remove("active");
    colors[i].classList.add("active");
  });
}
