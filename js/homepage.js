const navSearchbar = document.querySelector("#nav-searchbar");
const navSearchbarBg = document.querySelector("#nav-searchbar-bg");
const navSearchIcon = document.querySelector("#nav-search-icon");
const navCloseIcon = document.querySelector("#nav-close-icon");


navSearchIcon.addEventListener("click", () => {
    navSearchbar.classList.toggle("active");
});

navCloseIcon.addEventListener("click", () => {
    navSearchbar.classList.toggle("active");
});

navSearchbarBg.addEventListener("click", () => {
    navSearchbar.classList.toggle("active");
});

