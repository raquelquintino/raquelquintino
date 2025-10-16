// Menu Toggle para Mobile
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMain = document.querySelector('.nav-main');
    
    if (menuToggle && navMain) {
        menuToggle.addEventListener('click', function() {
            navMain.classList.toggle('active');
            
            // Animação do botão hamburger
            const spans = menuToggle.querySelectorAll('span');
            spans[0].style.transform = navMain.classList.contains('active') 
                ? 'rotate(45deg) translate(5px, 5px)' 
                : 'none';
            spans[1].style.opacity = navMain.classList.contains('active') ? '0' : '1';
            spans[2].style.transform = navMain.classList.contains('active') 
                ? 'rotate(-45deg) translate(7px, -6px)' 
                : 'none';
        });
        
        // Fechar menu ao clicar em um link
        const navLinks = navMain.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    navMain.classList.remove('active');
                    const spans = menuToggle.querySelectorAll('span');
                    spans[0].style.transform = 'none';
                    spans[1].style.opacity = '1';
                    spans[2].style.transform = 'none';
                }
            });
        });
    }
    
    // Smooth scroll para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 100;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Highlight do menu sidebar baseado na seção visível
    const sections = document.querySelectorAll('.section');
    const sidebarLinks = document.querySelectorAll('.nav-sidebar a');
    
    function highlightNavigation() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop - 150) {
                current = section.getAttribute('id');
            }
        });
        
        sidebarLinks.forEach(link => {
            link.style.backgroundColor = '';
            link.style.color = '';
            link.style.borderLeftColor = '';
            
            if (link.getAttribute('href') === `#${current}`) {
                link.style.backgroundColor = 'var(--color-sand)';
                link.style.color = 'var(--color-white)';
                link.style.borderLeftColor = 'var(--color-wine)';
            }
        });
    }
    
    window.addEventListener('scroll', highlightNavigation);
    highlightNavigation(); // Executar na carga inicial
    
    // Animação de entrada para seções
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(section);
    });
    
    // Lazy loading para imagens
    const images = document.querySelectorAll('img');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.style.opacity = '0';
                img.style.transition = 'opacity 0.5s ease-in';
                
                // Simular carregamento
                setTimeout(() => {
                    img.style.opacity = '1';
                }, 100);
                
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
    
    // Adicionar efeito parallax suave no hero
    const hero = document.querySelector('.hero');
    if (hero) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const rate = scrolled * 0.5;
            hero.style.transform = `translate3d(0, ${rate}px, 0)`;
        });
    }
    
    // Adicionar classe active aos links do menu principal quando na seção correspondente
    const mainNavLinks = document.querySelectorAll('.nav-main a');
    
    function highlightMainNavigation() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.pageYOffset >= sectionTop - 150) {
                current = section.getAttribute('id');
            }
        });
        
        mainNavLinks.forEach(link => {
            link.style.backgroundColor = '';
            link.style.color = '';
            
            if (link.getAttribute('href') === `#${current}`) {
                link.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                link.style.color = 'var(--color-yellow)';
            }
        });
    }
    
    window.addEventListener('scroll', highlightMainNavigation);
    highlightMainNavigation();
    
    // Prevenção de FOUC (Flash of Unstyled Content)
    document.body.style.opacity = '0';
    window.addEventListener('load', function() {
        document.body.style.transition = 'opacity 0.3s ease-in';
        document.body.style.opacity = '1';
    });
    
    // Acessibilidade: navegação por teclado
    document.addEventListener('keydown', function(e) {
        // Esc para fechar menu mobile
        if (e.key === 'Escape' && navMain && navMain.classList.contains('active')) {
            navMain.classList.remove('active');
            if (menuToggle) {
                const spans = menuToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        }
    });
    
    // Log de inicialização
    console.log('Site Raquel Quintino - Vidas em Movimento carregado com sucesso! ✨');
});

