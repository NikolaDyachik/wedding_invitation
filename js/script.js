document.addEventListener("DOMContentLoaded", function () {
  let burger = document.getElementById("burger");
  let popup = document.getElementById("popup");
  burger.addEventListener("click", function (e) {
    e.preventDefault();
    burger.classList.toggle("open");
    popup.classList.toggle("open");
  });
});

function lightmode() {
  // const wasLightmode = localStorage.getItem("lightmode") === "true";
  // localStorage.setItem("lightmode", !wasLightmode);
  const header = document.querySelector(".header");
  const quiz = document.querySelector(".quiz");
  const main = document.querySelector(".main");
  const main_text = document.querySelector(".main_text");
  const pozitive_text = document.querySelector(".pozitive_text");
  header.classList.toggle("header__ligth");
  quiz.classList.toggle("quiz__ligth");
  main.classList.toggle("main__ligth");
  main_text.classList.toggle("main_text__ligth");
  pozitive_text.classList.toggle("pozitive_text__ligth");
}

document.querySelector(".footer__button").addEventListener("click", lightmode);
