window.history.scrollRestoration = "manual";

// MENU HAMBURGUESA
document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.querySelector(".toggle_btn");
    const dropdownMenu = document.querySelector(".dropdown_menu");
    const toggleIcon = toggleBtn.querySelector("i");
    const menuLinks = dropdownMenu.querySelectorAll("a");

    function toggleMenu() {
        dropdownMenu.classList.toggle("open");
        toggleIcon.classList.toggle("bi-list");
        toggleIcon.classList.toggle("bi-x");
    }

    function closeMenu() {
        dropdownMenu.classList.remove("open");
        toggleIcon.classList.add("bi-list");
        toggleIcon.classList.remove("bi-x");
    }

    toggleBtn.addEventListener("click", (event) => {
        event.stopPropagation();
        toggleMenu();
    });

    menuLinks.forEach(link => {
        link.addEventListener("click", closeMenu);
    });

    document.addEventListener("click", (event) => {
        if (!dropdownMenu.contains(event.target) && !toggleBtn.contains(event.target)) {
            closeMenu();
        }
    });
});

// CAMBIO DE COLOR NAVBAR
document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector(".site__header"); 

    window.addEventListener("scroll", function () {
        if (window.scrollY > 0) { 
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); 

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId); 

        if (targetElement) {
            const headerHeight = 80; 

            const targetPosition = targetElement.offsetTop - headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: "smooth"
            });
        }
    });
});

