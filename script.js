// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 3D card interaction
const heroCard = document.querySelector('.hero-card');
if (heroCard) {
    heroCard.addEventListener('mousemove', (e) => {
        const rect = heroCard.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        heroCard.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    heroCard.addEventListener('mouseleave', () => {
        heroCard.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    });
}

// 3D About Card Interaction
const aboutCard = document.querySelector('.about-card');
if (aboutCard) {
    aboutCard.addEventListener('mousemove', (e) => {
        const rect = aboutCard.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 15;
        const rotateY = (centerX - x) / 15;
        
        aboutCard.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    aboutCard.addEventListener('mouseleave', () => {
        aboutCard.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    });
}

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    // Tambahkan tombol hamburger menu jika belum ada
    const navContainer = document.querySelector('.nav-container');
    if (!document.querySelector('.menu-toggle')) {
        const menuToggle = document.createElement('div');
        menuToggle.classList.add('menu-toggle');
        menuToggle.innerHTML = `
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        `;
        navContainer.appendChild(menuToggle);
        
        // Tambahkan event listener untuk menu toggle
        menuToggle.addEventListener('click', function() {
            const navLinks = document.querySelector('.nav-links');
            navLinks.classList.toggle('active');
            
            // Animasi hamburger menu
            const bars = menuToggle.querySelectorAll('.bar');
            bars.forEach((bar, index) => {
                if (navLinks.classList.contains('active')) {
                    if (index === 0) bar.style.transform = 'rotate(-45deg) translate(-5px, 6px)';
                    if (index === 1) bar.style.opacity = '0';
                    if (index === 2) bar.style.transform = 'rotate(45deg) translate(-5px, -6px)';
                } else {
                    bar.style.transform = 'none';
                    bar.style.opacity = '1';
                }
            });
        });
        
        // Tutup menu saat link diklik
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                const navLinks = document.querySelector('.nav-links');
                navLinks.classList.remove('active');
                const bars = menuToggle.querySelectorAll('.bar');
                bars.forEach(bar => {
                    bar.style.transform = 'none';
                    bar.style.opacity = '1';
                });
            });
        });
    }
});

// Debug: Check if sections exist
console.log('Education section:', document.getElementById('education'));
console.log('Experience section:', document.getElementById('experience'));
console.log('Skills section:', document.getElementById('skills'));

// Add floating elements dynamically
function createFloatingElements() {
    const heroSection = document.querySelector('.hero');
    for (let i = 0; i < 3; i++) {
        const element = document.createElement('div');
        element.classList.add('floating-element');
        heroSection.appendChild(element);
    }
}

// Initialize floating elements
createFloatingElements();

// Add floating element styles
const style = document.createElement('style');
style.textContent = `
    .floating-element {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.1);
        animation: float 6s ease-in-out infinite;
    }
    .floating-element:nth-child(1) {
        width: 80px;
        height: 80px;
        top: 10%;
        left: 10%;
        animation-delay: 0s;
    }
    .floating-element:nth-child(2) {
        width: 120px;
        height: 120px;
        top: 70%;
        right: 10%;
        animation-delay: 1s;
    }
    .floating-element:nth-child(3) {
        width: 60px;
        height: 60px;
        bottom: 10%;
        left: 30%;
        animation-delay: 2s;
    }
    @keyframes float {
        0%, 100% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-20px);
        }
    }
    
    /* Mobile Menu Styles */
    .menu-toggle {
        display: none;
        flex-direction: column;
        cursor: pointer;
    }
    
    .bar {
        width: 25px;
        height: 3px;
        background-color: rgb(17, 0, 0);
        margin: 3px 0;
        transition: 0.3s;
    }
    
    @media screen and (max-width: 768px) {
        .menu-toggle {
            display: flex;
        }
        
        .nav-links {
            position: fixed;
            left: -100%;
            top: 70px;
            flex-direction: column;
            background-color: rgba(255, 255, 255, 0.95);
            width: 100%;
            text-align: center;
            transition: 0.3s;
            box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);
            padding: 20px 0;
        }

        .nav-links.active {
            left: 0;
        }

        .nav-links li {
            margin: 10px 0;
        }

        .nav-links a {
            color: var(--dark-color);
        }

        .nav-links a::after {
            background: var(--primary-color);
        }
    }
`;
document.head.appendChild(style);
