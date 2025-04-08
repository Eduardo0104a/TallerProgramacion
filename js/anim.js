document.addEventListener("DOMContentLoaded", function () {
    const loader = document.querySelector(".loader");
    const loaderImg = document.querySelector(".loader__img");

    // Esperar a que termine la animación
    loaderImg.addEventListener("animationend", function () {
        document.body.classList.add("loaded"); // Agrega la clase para aplicar la animación de fadeOut
        setTimeout(() => {
            loader.style.display = "none"; // Oculta el loader completamente
        }, 300); // Tiempo de fadeOut en el CSS
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
