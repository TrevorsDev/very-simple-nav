document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");
    const dropdown = document.querySelector(".dropdown"); // Single dropdown
    const submenus = document.querySelectorAll(".dropdown-submenu"); // Select submenus
     
    // Toggle main menu on mobile
    menuToggle.addEventListener("click", function () {
        console.log("Menu button clicked!"); // Debugging
        navMenu.classList.toggle("show");
    });

    // Toggle dropdown menu on mobile
    if (dropdown) { //Check if it exists to avoid errors
        dropdown.addEventListener("click", function (event) {
            event.stopPropagation();
            this.classList.toggle("active");
        })
    };

    // Toggle submenus on mobile
    submenus.forEach(submenu => {
        submenu.addEventListener("click", function (event) {
            event.stopPropagation();
            this.classList.toggle("activeSub");
        })
    });


    // Close menus when clicking outside
    document.addEventListener("click", function (event) {
        if (!navMenu.contains(event.target) && !menuToggle.contains(event.target)) {
            navMenu.classList.remove("show");
            if (dropdown) {
                dropdown.classList.remove("active"); // Fix: No .forEach() needed
            }
            submenus.forEach(submenu => submenu.classList.remove("activeSub"));
        }
    })
});