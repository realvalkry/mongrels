const customJs = () => {
  const MenuButton = document.querySelector(".navbar-toggler");
  const nonesc = document.querySelector(".none-sc");

  let showMenu = false;

  MenuButton.addEventListener("click", toggleMenu);
  function toggleMenu() {
    if (!showMenu) {
      body.classList.add("none-sc");
      showMenu = true;
    } else {
      body.classList.remove("none-sc");
      showMenu = false;
    }
  }

  const body = document.body;
  const triggerMenu = document.querySelector(".top-h-section");
  const scrollUp = "sc-up";
  const scrollDown = "sc-down";
  let lastScroll = 0;
  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll <= 0) {
      body.classList.remove(scrollUp);
      return;
    }
    if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
      // down
      body.classList.remove(scrollUp);
      body.classList.add(scrollDown);
    } else if (
      currentScroll < lastScroll &&
      body.classList.contains(scrollDown)
    ) {
      // up
      body.classList.remove(scrollDown);
      body.classList.add(scrollUp);
    }
    lastScroll = currentScroll;
  });
};

export default customJs;
