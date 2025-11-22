let lastScroll = 0;
const searchBar = document.getElementById("searchBar");

window.addEventListener("scroll", () => {
  let currentScroll = window.pageYOffset;

  if (currentScroll < lastScroll) {
    // Scrolling UP = show search bar
    searchBar.classList.add("show");
  } else {
    // Scrolling DOWN = hide search bar
    searchBar.classList.remove("show");
  }

  lastScroll = currentScroll;
});
