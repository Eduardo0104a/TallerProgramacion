document.addEventListener("DOMContentLoaded", function () {
    const loader = document.querySelector(".loader");
    const loaderImg = document.querySelector(".loader__img");

    loaderImg.addEventListener("animationend", function () {
        document.body.classList.add("loaded"); 
        setTimeout(() => {
            loader.style.display = "none"; 
        }, 300); 
    });
});

// ANIMACIÓN SUBIDA CONTENIDO SECCIONES
document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".animate");
    let lastScrollY = window.scrollY;

    const observer = new IntersectionObserver(entries => {
        const currentScrollY = window.scrollY;

        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (currentScrollY > lastScrollY) { 
                    entry.target.classList.add("show"); 
                }
            } else if (currentScrollY < lastScrollY) {
                entry.target.classList.remove("show"); 
            }
        });

        lastScrollY = currentScrollY;
    }, { threshold: 0.2 });

    elements.forEach(el => observer.observe(el));
});
