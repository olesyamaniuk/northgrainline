document.addEventListener("DOMContentLoaded", () => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const navListRef = document.querySelector(".a-t-navigation-list");
  const headerRef = document.querySelector(".a-t-header");
  const navigationRef = document.querySelector(".a-t-navigation");

  menuBtnRef.addEventListener("click", () => {
    menuBtnRef.classList.toggle("is-open");
    navListRef.classList.toggle("is-open");
    headerRef.classList.toggle("is-open");
    navigationRef.classList.toggle("is-open");
  });

  document.querySelectorAll(".a-t-navigation-link").forEach((n) =>
    n.addEventListener("click", () => {
      navListRef.classList.remove("is-open");
      menuBtnRef.classList.remove("is-open");
      headerRef.classList.remove("is-open");
      navigationRef.classList.remove("is-open");
    }),
  );
});
function toggleAnswer(element) {
  const answer = element.nextElementSibling;
  const buttonImg = element.querySelector(".a-t-toggle-button img");

  answer.classList.toggle("open");

  if (answer.classList.contains("open")) {
    buttonImg.classList.add("rotated");
  } else {
    buttonImg.classList.remove("rotated");
  }
}
