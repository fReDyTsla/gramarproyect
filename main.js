/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction() {
    var menuBtn = document.getElementById("myNavMenu");
    if (menuBtn.className === "nav-menu") {
        menuBtn.className += " responsive";
    } else {
        menuBtn.className = "nav-menu";
    }
}

/* ----- CARRUSEL DE IMAGENES ----- */
let currentImageIndex = 0;
const images = document.querySelectorAll('.image-slider .image');
const totalImages = images.length;

function showNextImage() {
    images[currentImageIndex].classList.remove('active');
    currentImageIndex = (currentImageIndex + 1) % totalImages;
    images[currentImageIndex].classList.add('active');
}

setInterval(showNextImage, 3000); // Cambia la imagen cada 3 segundos

/* ----- IMAGENES DE PRODUCTO----- */
document.addEventListener('DOMContentLoaded', function() {
    const images = Array.from(document.querySelectorAll('.product-item img'));
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const closeBtn = document.querySelector('.modal .close-btn');
    const prevBtn = document.querySelector('.modal .prev-btn');
    const nextBtn = document.querySelector('.modal .next-btn');
    
    let currentIndex = 0;

    function showImage(index) {
        modalImage.src = images[index].src;
        modalImage.classList.add('zoomed'); // Aplica la clase para hacer zoom
    }

    function updateModal() {
        showImage(currentIndex);
        modal.style.display = 'flex';
    }

    // Abre el modal y muestra la imagen
    images.forEach((img, index) => {
        img.addEventListener('click', function() {
            currentIndex = index;
            updateModal();
        });
    });

    // Navega a la imagen anterior
    prevBtn.addEventListener('click', function() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
        updateModal();
    });

    // Navega a la imagen siguiente
    nextBtn.addEventListener('click', function() {
        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
        updateModal();
    });

    // Cierra el modal
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
        modalImage.classList.remove('zoomed'); // Remueve la clase de zoom al cerrar el modal
    });

    // Cierra el modal cuando se hace clic fuera de la imagen
    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            modalImage.classList.remove('zoomed'); // Remueve la clase de zoom al cerrar el modal
        }
    });
});

    // FORMULARIO VALIDADO
// main.js

// Función para validar el formulario
function validateForm(event) {
    event.preventDefault(); // Previene el envío del formulario hasta que se valide
    let isValid = true;

    // Obtener los elementos de los campos de entrada
    const nameInput = document.querySelector('.input-field[name="name"]');
    const emailInput = document.querySelector('.input-field[name="email"]');
    const messageInput = document.querySelector('textarea[name="message"]');

    // Obtener los elementos de las imágenes de error
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');

    // Obtener los valores de los campos
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    // Resetear imágenes de error
    nameError.style.display = 'none';
    emailError.style.display = 'none';
    messageError.style.display = 'none';

    // Validar el nombre
    if (name === "") {
        isValid = false;
        nameError.style.display = 'inline';
    }

    // Validar el correo electrónico
    if (email === "") {
        isValid = false;
        emailError.style.display = 'inline';
    } else if (!validateEmail(email)) {
        isValid = false;
        emailError.style.display = 'inline';
    }

    // Validar el mensaje
    if (message === "") {
        isValid = false;
        messageError.style.display = 'inline';
    }

    // Si todos los campos son válidos, se puede enviar el formulario
    if (isValid) {
        alert("Formulario enviado exitosamente.");
        // Aquí podrías enviar el formulario o hacer otra acción
    }
}

// Función para validar el formato del correo electrónico
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
