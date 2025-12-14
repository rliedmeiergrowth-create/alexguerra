document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".nav");
  const burger = document.querySelector(".burger");
  const drawer = document.getElementById("drawer");

  if (!burger || !drawer) return;

  burger.addEventListener("click", () => {
    nav.classList.toggle("menu-open");
  });
});
