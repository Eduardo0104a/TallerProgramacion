document.addEventListener("DOMContentLoaded", function () { 
    const form = document.getElementById("contactForm");
    const notification = document.getElementById("notification");
    const modal = document.getElementById("loadingModal"); 

    form.addEventListener("submit", function (event) {
        event.preventDefault(); 

        modal.style.display = "flex";

        fetch("send_email.php", {
            method: "POST",
            body: new FormData(form),
        })
        .then(response => {
            if (response.ok) {
                modal.style.display = "none";
                showNotification();
                form.reset();
            }
        })
        .catch(error => console.error("Error al enviar el formulario", error));
    });

    function showNotification() {
        notification.classList.add("show");

        setTimeout(() => {
            notification.classList.remove("show");
        }, 3000);
    }
});
