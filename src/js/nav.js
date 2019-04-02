const topMenuLinks = document.querySelectorAll(".menu__link");

topMenuLinks.forEach(link => {
  if (link.nextElementSibling) {
    link.addEventListener("focus", function() {
      this.parentElement.classList.add("focus");
    });
  }
});

const subMenus = document.querySelectorAll(".submenu");

subMenus.forEach(submenu => {
  const subMenuLinks = Array.from(submenu.querySelectorAll(".submenu__link"));
  const lastSubMenuLink = subMenuLinks.pop();
  lastSubMenuLink.addEventListener("blur", () => {
    submenu.parentElement.classList.remove("focus");
  });
});
