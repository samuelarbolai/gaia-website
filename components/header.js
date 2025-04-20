// Header Component
class HeaderComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <header>
                <div class="container">
                    <a href="index.html" class="logo-container">
                        <img src="logo.jpeg" alt="Gaia Ingeniería Ambiental" class="logo">
                    </a>
                    <nav>
                        <ul class="nav-menu">
                            <li><a href="#" class="active">Inicio</a></li>
                            <li><a href="#services">Servicios</a></li>
                            <li><a href="#contact">Contacto</a></li>
                        </ul>
                        <button class="mobile-menu-btn" aria-label="Open mobile menu">
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </nav>
                </div>
            </header>
        `;

        // Add mobile menu functionality if needed
        const mobileMenuBtn = this.querySelector('.mobile-menu-btn');
        const navMenu = this.querySelector('.nav-menu');
        
        if (mobileMenuBtn && navMenu) {
            mobileMenuBtn.addEventListener('click', () => {
                navMenu.classList.toggle('active');
                mobileMenuBtn.classList.toggle('active');
            });
        }
    }
}

// Define the custom element
customElements.define('header-component', HeaderComponent);