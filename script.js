document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".nav");
  const burger = document.querySelector(".burger");
  const drawer = document.getElementById("drawer");

  const closeMenu = () => {
    nav?.classList.remove("menu-open");
    burger?.setAttribute("aria-expanded", "false");
  };

  burger?.addEventListener("click", () => {
    const open = nav.classList.toggle("menu-open");
    burger.setAttribute("aria-expanded", open ? "true" : "false");
  });

  drawer?.querySelectorAll("a").forEach(a => a.addEventListener("click", closeMenu));

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 901) closeMenu();
  });
});
