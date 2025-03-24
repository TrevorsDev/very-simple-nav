document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");
    const dropdown = document.querySelector(".dropdown");

    // Toggle main menu on mobile
    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("show");
    });

    // Toggle dropdown menu on mobile
    dropdown.addEventListener("click", function (event) {
        event.preventDefault();
        this.classList.toggle("active");
    });
});