document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('year').textContent = new Date().getFullYear();
    
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active');
        });
    }
    
    // Service cards toggle
    const serviceHeaders = document.querySelectorAll('.service-header');
    
    serviceHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const serviceCard = this.parentElement;
            serviceCard.classList.toggle('active');
            
            // Close other cards
            serviceHeaders.forEach(otherHeader => {
                if (otherHeader !== header) {
                    otherHeader.parentElement.classList.remove('active');
                }
            });
        });
    });
    
    // Auto-expand the first service card initially
    if (serviceHeaders.length > 0) {
        serviceHeaders[0].parentElement.classList.add('active');
    }
    
    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Here you would normally send the form data to your server
            // For now, just show a success message
            alert('¡Gracias por contactarnos! Te responderemos lo antes posible.');
            contactForm.reset();
        });
    }
});