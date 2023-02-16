const year = document.querySelector(".year");
const btnNav = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
const allLinks = document.querySelectorAll("a:link");

//Mobile nav

btnNav.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});
year.textContent = new Date().getFullYear();

//Smooth scrolling

for (const link of allLinks) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });

      if (link.classList.contains("main-nav-link")) {
        headerEl.classList.toggle("nav-open");
      }
    }
  });
}
