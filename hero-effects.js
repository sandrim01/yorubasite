// Efeitos especiais para a seção Hero
document.addEventListener('DOMContentLoaded', function() {
    const hero = document.querySelector('.hero');
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const heroButtons = document.querySelectorAll('.hero-btn');
    const heroStats = document.querySelectorAll('.hero-stat');

    // Animação de entrada suave
    const observerOptions = {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px'
    };

    const heroObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Animação sequencial dos elementos
                setTimeout(() => {
                    heroTitle.style.transform = 'translateY(0)';
                    heroTitle.style.opacity = '1';
                }, 200);
                
                setTimeout(() => {
                    heroSubtitle.style.transform = 'translateY(0)';
                    heroSubtitle.style.opacity = '1';
                }, 400);
                
                setTimeout(() => {
                    heroButtons.forEach((btn, index) => {
                        setTimeout(() => {
                            btn.style.transform = 'translateY(0)';
                            btn.style.opacity = '1';
                        }, index * 150);
                    });
                }, 600);
                
                setTimeout(() => {
                    heroStats.forEach((stat, index) => {
                        setTimeout(() => {
                            stat.style.transform = 'translateY(0)';
                            stat.style.opacity = '1';
                        }, index * 100);
                    });
                }, 1000);
            }
        });
    }, observerOptions);

    // Aplicar estilos iniciais para animação
    heroTitle.style.transform = 'translateY(30px)';
    heroTitle.style.opacity = '0';
    heroTitle.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    
    heroSubtitle.style.transform = 'translateY(30px)';
    heroSubtitle.style.opacity = '0';
    heroSubtitle.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    
    heroButtons.forEach(btn => {
        btn.style.transform = 'translateY(30px)';
        btn.style.opacity = '0';
        btn.style.transition = 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    });
    
    heroStats.forEach(stat => {
        stat.style.transform = 'translateY(20px)';
        stat.style.opacity = '0';
        stat.style.transition = 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    });

    // Observar a seção hero
    heroObserver.observe(hero);

    // Efeito paralaxe sutil no scroll
    let ticking = false;
    
    function updateParallax() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.3;
        
        if (hero && scrolled < hero.offsetHeight) {
            hero.style.transform = `translateY(${rate}px)`;
        }
        
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    }
    
    // Verificar se o dispositivo suporta paralaxe
    const supportsParallax = window.DeviceOrientationEvent === undefined;
    
    if (supportsParallax) {
        window.addEventListener('scroll', requestTick);
    }

    // Contador animado para as estatísticas
    function animateCounter(element, target) {
        let current = 0;
        const increment = target / 100;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target.toString().includes('+') ? target : Math.ceil(target);
                clearInterval(timer);
            } else {
                element.textContent = Math.ceil(current);
            }
        }, 20);
    }

    // Animar contadores quando visíveis
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const numberElement = entry.target.querySelector('.hero-stat-number');
                const text = numberElement.textContent;
                
                if (text.includes('⭐')) return; // Não animar estrelas
                
                const number = parseInt(text.replace(/\D/g, ''));
                if (number) {
                    numberElement.textContent = '0';
                    setTimeout(() => {
                        animateCounter(numberElement, number);
                        if (text.includes('+')) {
                            setTimeout(() => {
                                numberElement.textContent = text;
                            }, 2000);
                        }
                    }, 500);
                }
                
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.8 });

    heroStats.forEach(stat => {
        statsObserver.observe(stat);
    });
});
