// Copiar correo al portapapeles desde el enlace más cercano
document.querySelectorAll('button[data-copy-email]').forEach(button => {
    button.addEventListener('click', function() {
        // Busca el enlace mailto más cercano dentro del mismo contenedor
        const parent = button.parentElement;
        const mailLink = parent.querySelector('a[href^="mailto:"]');
        if (mailLink) {
            const email = mailLink.textContent.trim();
            navigator.clipboard.writeText(email).then(() => {
                alert('¡Correo copiado al portapapeles!');
            }, () => {
                alert('No se pudo copiar el correo.');
            });
        }
    });
});

// Scroll suave para navegación
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId.startsWith('#')) {
            e.preventDefault();
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});