(() => {
    'use strict'
    console.log("La función se está ejecutando automáticamente al cargar.");

    const forms = document.querySelectorAll('.needs-validation');
    const alertBox = document.getElementById('form-alert');

    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
                alertBox.classList.remove('d-none');
            } else {
                alertBox.classList.add('d-none');
            }
            form.classList.add('was-validated');
            event.preventDefault();
            event.stopPropagation();
        }, false);
    });
})()