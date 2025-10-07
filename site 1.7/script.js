// Aguarda o DOM carregar completamente
document.addEventListener('DOMContentLoaded', function() {
    // Efeito ripple nos botões de navegação
    function createRipple(event) {
        const button = event.currentTarget;
        const ripple = document.createElement('span');
        
        // Remove ripples anteriores
        const existingRipples = button.querySelectorAll('.ripple');
        existingRipples.forEach(r => r.remove());
        
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;
        
        ripple.classList.add('ripple');
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        
        button.appendChild(ripple);
        
        // Remove o ripple após a animação
        setTimeout(() => {
            ripple.remove();
        }, 800);
    }
    
    // Adiciona efeito ripple aos botões de navegação
    const navButtons = document.querySelectorAll('.book-nav-item');
    navButtons.forEach(button => {
        button.addEventListener('click', createRipple);
    });
    
    // Efeito de ativação do botão baseado na seção visível
    function updateActiveNavButton() {
        const sections = document.querySelectorAll('[id^="img-"]');
        const navButtons = document.querySelectorAll('.book-nav-item');
        
        let currentSection = '';
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                currentSection = section.id;
            }
        });
        
        // Remove classe active de todos os botões
        navButtons.forEach(btn => btn.classList.remove('active'));
        
        // Adiciona classe active ao botão correspondente
        if (currentSection) {
            const activeButton = document.querySelector(`[href="#${currentSection}"]`);
            if (activeButton) {
                activeButton.classList.add('active');
            }
        }
    }
    
    // Atualiza botão ativo durante scroll
    window.addEventListener('scroll', updateActiveNavButton);
    updateActiveNavButton(); // Executa inicialmente
    
    // Botão flutuante de ir ao topo
    const backToTopBtn = document.getElementById('back-to-top');
    function toggleBackToTop() {
        if (window.scrollY > 200) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    }
    window.addEventListener('scroll', toggleBackToTop);
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    // Funcionalidade para esconder navegação fixa no mobile durante scroll
    const fixedNav = document.querySelector('.fixed-navigation');
    let lastScrollTop = 0;
    let scrollTimer = null;
    
    function handleNavOnScroll() {
        if (fixedNav && window.innerWidth <= 1024) {
            const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            if (currentScrollTop > lastScrollTop && currentScrollTop > 100) {
                // Scrolling down - hide navigation
                fixedNav.style.transform = 'translateX(320px)';
                fixedNav.style.opacity = '0.3';
            } else if (currentScrollTop < lastScrollTop) {
                // Scrolling up - show navigation
                fixedNav.style.transform = 'translateX(0)';
                fixedNav.style.opacity = '1';
            }
            
            // Clear previous timer
            if (scrollTimer) clearTimeout(scrollTimer);
            
            // Show navigation after scroll stops
            scrollTimer = setTimeout(() => {
                if (fixedNav) {
                    fixedNav.style.transform = 'translateX(0)';
                    fixedNav.style.opacity = '1';
                }
            }, 2000);
            
            lastScrollTop = currentScrollTop;
        }
    }
    
    window.addEventListener('scroll', handleNavOnScroll);
    
    // Detecta se é dispositivo móvel
    const isMobile = window.innerWidth <= 768;
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    // Smooth scroll para os links de navegação
    const navLinks = document.querySelectorAll('.book-nav-item, .nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Verifica se é um link interno (começa com #)
            if (href && href.startsWith('#')) {
                e.preventDefault();
                
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    // Calcula a posição considerando o header fixo
                    const header = document.querySelector('.header');
                    const headerHeight = header ? header.offsetHeight : 80;
                    
                    // Se for uma imagem, centraliza exatamente no meio da imagem
                    if (targetId.startsWith('img-')) {
                        const imgElement = targetElement.querySelector('img');
                        if (imgElement) {
                            // Aguarda a imagem carregar se necessário
                            const scrollToCenter = () => {
                                // Usa getBoundingClientRect para posição precisa
                                const imgRect = imgElement.getBoundingClientRect();
                                const windowHeight = window.innerHeight;
                                
                                // Calcula a posição atual da imagem relativa ao viewport
                                const imgTopInViewport = imgRect.top;
                                const imgHeight = imgRect.height;
                                
                                // Calcula quanto scroll é necessário para centralizar
                                const imgCenter = imgTopInViewport + (imgHeight / 2);
                                const viewportCenter = windowHeight / 2;
                                const scrollAmount = imgCenter - viewportCenter;
                                
                                // Posição final considerando header
                                const currentScroll = window.pageYOffset;
                                const targetPosition = currentScroll + scrollAmount;
                                
                                // Scroll suave para o centro exato da imagem
                                window.scrollTo({
                                    top: Math.max(0, targetPosition),
                                    behavior: 'smooth'
                                });
                            };
                            
                            // Se a imagem ainda não carregou, aguarda
                            if (imgElement.complete && imgElement.naturalHeight !== 0) {
                                scrollToCenter();
                            } else {
                                imgElement.addEventListener('load', scrollToCenter, { once: true });
                                // Fallback após timeout
                                setTimeout(scrollToCenter, 100);
                            }
                        } else {
                            // Fallback se não encontrar a imagem
                            const extraOffset = isMobile ? 20 : 30;
                            const targetPosition = targetElement.offsetTop - headerHeight - extraOffset;
                            
                            window.scrollTo({
                                top: Math.max(0, targetPosition),
                                behavior: 'smooth'
                            });
                        }
                    } else {
                        // Para outras seções, scroll normal
                        const extraOffset = isMobile ? 20 : 30;
                        const targetPosition = targetElement.offsetTop - headerHeight - extraOffset;
                        
                        // Scroll suave
                        window.scrollTo({
                            top: Math.max(0, targetPosition),
                            behavior: 'smooth'
                        });
                    }
                    
                    // Atualiza o item ativo no menu de navegação dos livros
                    if (this.classList.contains('book-nav-item')) {
                        updateActiveNavItem(this);
                    }
                }
            }
        });
        
        // Melhora a experiência touch
        if (isTouch) {
            link.addEventListener('touchstart', function() {
                this.style.transform = 'scale(0.98)';
            }, { passive: true });
            
            link.addEventListener('touchend', function() {
                setTimeout(() => {
                    this.style.transform = '';
                }, 150);
            }, { passive: true });
        }
    });
    
    // Função para atualizar item ativo na navegação
    function updateActiveNavItem(clickedItem) {
        // Remove classe active de todos os itens
        document.querySelectorAll('.book-nav-item').forEach(item => {
            item.classList.remove('active');
        });
        
        // Adiciona classe active ao item clicado
        if (clickedItem) {
            clickedItem.classList.add('active');
        }
    }
    
    // Função de debug para verificar correspondência entre links e seções
    // (Removida para produção)
    
    // Adiciona efeitos interativos aos botões de navegação
    document.querySelectorAll('.book-nav-item').forEach(item => {
        // Efeito de click
        item.addEventListener('mousedown', function() {
            this.style.transform = 'translateY(-2px) scale(1.02)';
        });
        
        item.addEventListener('mouseup', function() {
            this.style.transform = 'translateY(-5px) scale(1.05)';
        });
        
        // Efeito de foco para acessibilidade
        item.addEventListener('focus', function() {
            this.style.outline = '3px solid rgba(212, 175, 55, 0.5)';
            this.style.outlineOffset = '2px';
        });
        
        item.addEventListener('blur', function() {
            this.style.outline = 'none';
        });
        
        // Efeito de ripple no click
        item.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // Observador de interseção para destacar seção ativa automaticamente
    const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -30% 0px', // Melhor detecção de visibilidade
        threshold: [0.1, 0.5, 0.7]
    };
    
    const observer = new IntersectionObserver(function(entries) {
        let maxVisibility = 0;
        let mostVisibleEntry = null;
        
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.intersectionRatio > maxVisibility) {
                maxVisibility = entry.intersectionRatio;
                mostVisibleEntry = entry;
            }
        });
        
        if (mostVisibleEntry) {
            const id = mostVisibleEntry.target.id;
            let correspondingNavItem = null;
            
            // Primeiro tenta encontrar link direto para a imagem
            correspondingNavItem = document.querySelector(`.book-nav-item[href="#${id}"]`);
            
            // Se não encontrar e for uma seção de livro, procura pela imagem correspondente
            if (!correspondingNavItem && id.startsWith('livro')) {
                const imgId = `img-${id}`;
                correspondingNavItem = document.querySelector(`.book-nav-item[href="#${imgId}"]`);
            }
            
            // Se não encontrar e for o combo2, procura pelo img-combo
            if (!correspondingNavItem && id === 'combo2') {
                correspondingNavItem = document.querySelector(`.book-nav-item[href="#img-combo"]`);
            }
            
            if (correspondingNavItem) {
                updateActiveNavItem(correspondingNavItem);
            }
        }
    }, observerOptions);
    
    // Observa todas as seções de livros e imagens
    document.querySelectorAll('[id^="livro"], [id^="img-livro"], #combo2, #img-combo').forEach(section => {
        observer.observe(section);
    });
    
    // Efeito de hover nos botões de compra
    const botoesCompra = document.querySelectorAll('.btn-comprar');
    
    botoesCompra.forEach(botao => {
        botao.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
            this.style.boxShadow = '0 8px 25px rgba(0,0,0,0.2)';
        });
        
        botao.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '';
        });
        
        // Efeito de clique
        botao.addEventListener('mousedown', function() {
            this.style.transform = 'translateY(-1px)';
        });
        
        botao.addEventListener('mouseup', function() {
            this.style.transform = 'translateY(-3px)';
        });
    });
    
    // Contador de economia no combo
    const economiaElements = document.querySelectorAll('.economia');
    
    economiaElements.forEach(element => {
        if (element.textContent.includes('R$')) {
            // Adiciona animação pulsante para chamar atenção
            setInterval(() => {
                element.style.transform = 'scale(1.05)';
                setTimeout(() => {
                    element.style.transform = 'scale(1)';
                }, 150);
            }, 3000);
        }
    });
    
    // Scroll para mostrar header com sombra
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        
        if (window.scrollY > 100) {
            header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        }
    });
    
    // Validação e feedback para links externos
    function configurarLinksCompra() {
        const botoesCompra = document.querySelectorAll('.btn-comprar');
        
        botoesCompra.forEach(botao => {
            botao.addEventListener('click', function(e) {
                // Aqui você pode adicionar tracking analytics
                
                // Simula carregamento
                const originalText = this.innerHTML;
                this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Redirecionando...';
                this.disabled = true;
                
                setTimeout(() => {
                    this.innerHTML = originalText;
                    this.disabled = false;
                }, 1500);
                
                // Aqui você substituiria '#' pelos links reais da Hotmart
                // window.open('URL_REAL_DA_HOTMART', '_blank');
            });
        });
    }
    
    configurarLinksCompra();
    
    // Adiciona indicador de scroll
    function criarIndicadorScroll() {
        const indicador = document.createElement('div');
        indicador.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 0%;
            height: 3px;
            background: #d4af37;
            z-index: 9999;
            transition: width 0.3s ease;
        `;
        document.body.appendChild(indicador);
        
        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;
            indicador.style.width = scrollPercent + '%';
        });
    }
    
    criarIndicadorScroll();
    
    // Menu mobile (se necessário no futuro)
    function initMobileMenu() {
        const nav = document.querySelector('.nav');
        const header = document.querySelector('.header .container');
        
        // Verifica se é mobile
        if (window.innerWidth <= 768) {
            // Adiciona funcionalidade mobile se necessário
        }
    }
    
    // Verifica responsividade
    window.addEventListener('resize', initMobileMenu);
    initMobileMenu();
    
    // Efeito parallax sutil no hero
    window.addEventListener('scroll', function() {
        const hero = document.querySelector('.hero');
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        if (hero) {
            hero.style.transform = `translateY(${rate}px)`;
        }
    });
    
});

// Função para integração com analytics (Google Analytics, Facebook Pixel, etc.)
function trackEvent(action, category, label) {
    // Tracking removido para produção
    
    // Integração com Google Analytics (se configurado)
    if (typeof gtag !== 'undefined') {
        gtag('event', action, {
            event_category: category,
            event_label: label
        });
    }
    
    // Integração com Facebook Pixel (se configurado)
    if (typeof fbq !== 'undefined') {
        fbq('track', action, { category, label });
    }
}

// Função para compartilhamento social
function compartilhar(plataforma) {
    const url = window.location.href;
    const titulo = document.title;
    
    const urls = {
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
        twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(titulo)}`,
        whatsapp: `https://wa.me/?text=${encodeURIComponent(titulo + ' - ' + url)}`,
        telegram: `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(titulo)}`
    };
    
    if (urls[plataforma]) {
        window.open(urls[plataforma], '_blank', 'width=600,height=400');
        trackEvent('compartilhamento', 'social', plataforma);
    }
}

// Melhorias específicas para dispositivos móveis
if (isMobile || isTouch) {
    // Otimização de scroll para mobile
    let ticking = false;
    
    function updateScrollPosition() {
        // Adiciona classe para indicar scroll em dispositivos móveis
        if (window.scrollY > 50) {
            document.body.classList.add('scrolled');
        } else {
            document.body.classList.remove('scrolled');
        }
        ticking = false;
    }
    
    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(updateScrollPosition);
            ticking = true;
        }
    }, { passive: true });
    
    // Previne zoom em inputs (iOS)
    document.querySelectorAll('input, select, textarea').forEach(input => {
        input.addEventListener('focus', function() {
            this.style.fontSize = '16px';
        });
    });
    
    // Melhora performance das animações em mobile
    document.querySelectorAll('.livro-image img').forEach(img => {
        img.style.willChange = 'transform';
        img.addEventListener('load', function() {
            this.style.willChange = 'auto';
        });
    });
    
    // Feedback tátil para botões importantes
    const importantButtons = document.querySelectorAll('.btn-comprar, .book-nav-item');
    importantButtons.forEach(button => {
        button.addEventListener('touchstart', function() {
            // Vibração sutil se suportada
            if (navigator.vibrate) {
                navigator.vibrate(10);
            }
        }, { passive: true });
    });
}

// Preload de imagens críticas para melhor performance
const criticalImages = ['img/logo.png', 'img/livro_yoruba.png', 'img/livro_obi.png', 'img/livro_eweoro.png'];
criticalImages.forEach(src => {
    const img = new Image();
    img.src = src;
});

// Lazy loading para imagens não críticas
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });

    // Botão Voltar ao Topo
    const backToTopBtn = document.getElementById('back-to-top');
    
    if (backToTopBtn) {
        // Mostrar/ocultar botão baseado no scroll
        function toggleBackToTop() {
            const scrollY = window.pageYOffset;
            
            if (scrollY > 50) {
                backToTopBtn.classList.add('visible');
                // Forçar estilos inline para garantir visibilidade
                backToTopBtn.style.opacity = '1';
                backToTopBtn.style.visibility = 'visible';
                backToTopBtn.style.transform = 'translateY(0)';
            } else {
                // Só remove se estiver realmente no topo (menos de 30px)
                if (scrollY < 30) {
                    backToTopBtn.classList.remove('visible');
                    backToTopBtn.style.opacity = '0';
                    backToTopBtn.style.visibility = 'hidden';
                    backToTopBtn.style.transform = 'translateY(100px)';
                }
            }
        }
        
        // Scroll suave para o topo
        function scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            
            // Analytics tracking (se existir)
            if (typeof gtag !== 'undefined') {
                gtag('event', 'back_to_top_click', {
                    event_category: 'Navigation',
                    event_label: 'Back to Top Button'
                });
            }
        }
        
        // Event listeners
        window.addEventListener('scroll', toggleBackToTop);
        backToTopBtn.addEventListener('click', scrollToTop);
        
        // Touch events para mobile
        if (isTouch) {
            backToTopBtn.addEventListener('touchstart', function() {
                this.style.transform = 'translateY(-2px) scale(0.95)';
            }, { passive: true });
            
            backToTopBtn.addEventListener('touchend', function() {
                setTimeout(() => {
                    this.style.transform = '';
                }, 150);
            }, { passive: true });
        }
        
        // Verificar posição inicial
        toggleBackToTop();
        
        // Forçar verificação após um pequeno delay
        setTimeout(() => {
            toggleBackToTop();
            
            // Proteção: verificar a cada 2 segundos se o botão ainda está visível
            setInterval(() => {
                if (window.pageYOffset > 50 && !backToTopBtn.classList.contains('visible')) {
                    backToTopBtn.classList.add('visible');
                    backToTopBtn.style.opacity = '1';
                    backToTopBtn.style.visibility = 'visible';
                    backToTopBtn.style.transform = 'translateY(0)';
                }
            }, 2000);
        }, 1000);
    }

    // Função throttle para otimizar performance do scroll
    function throttle(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    
    // FAQ Toggle
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Fecha todos os outros itens
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle do item atual
            item.classList.toggle('active');
        });
    });
}
