window.onload = function() {
    // Obtener el contenedor del logo y el contenido principal
    const logoContainer = document.getElementById('logoContainer');
    const mainContent = document.getElementById('mainContent');

    // Activar el fade-out para el logo después de 3 segundos
    setTimeout(function() {
        logoContainer.classList.add('hide');  // Aplica el fade-out al logo
        
        // Espera 1 segundo (el tiempo de fade-out) y luego muestra el contenido principal
        setTimeout(function() {
            mainContent.classList.add('show');  // Muestra el contenido principal con fade-in
            logoContainer.style.display = 'none';  // Oculta el logo completamente
        }, 1000);  // 1000ms = 1 segundo de espera para el fade-out
    }, 3000);  // 3000ms = 3 segundos antes de empezar el fade-out
};
