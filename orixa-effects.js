// Efeitos interativos para os símbolos dos Orixás
document.addEventListener('DOMContentLoaded', function() {
    const orixaPatterns = document.querySelectorAll('.orixa-symbols > div');
    
    // Verificar se o usuário prefere movimento reduzido
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (!prefersReducedMotion) {
        // Efeito de respiração sutil nos símbolos
        function addBreathingEffect() {
            orixaPatterns.forEach((pattern, index) => {
                const delay = index * 500; // Delay escalonado
                
                setTimeout(() => {
                    pattern.style.transition = 'all 3s ease-in-out';
                    
                    function breathe() {
                        const scale = 0.95 + Math.random() * 0.1; // Escala entre 0.95 e 1.05
                        const opacity = 0.03 + Math.random() * 0.04; // Opacidade entre 0.03 e 0.07
                        
                        pattern.style.transform = `scale(${scale}) rotate(${Math.random() * 10 - 5}deg)`;
                        pattern.style.opacity = opacity;
                        
                        // Próxima respiração
                        setTimeout(breathe, 3000 + Math.random() * 2000);
                    }
                    
                    breathe();
                }, delay);
            });
        }
        
        // Iniciar após um pequeno delay
        setTimeout(addBreathingEffect, 2000);
        
        // Efeito de interação sutil com o scroll
        let ticking = false;
        
        function updateOrixaPositions() {
            const scrolled = window.pageYOffset;
            const rate = scrolled * 0.1;
            
            orixaPatterns.forEach((pattern, index) => {
                const direction = index % 2 === 0 ? 1 : -1;
                const speed = 0.05 + (index * 0.01);
                
                if (pattern && scrolled < window.innerHeight * 3) {
                    const translateY = rate * speed * direction;
                    const currentTransform = pattern.style.transform || '';
                    
                    // Preservar outras transformações
                    const scaleMatch = currentTransform.match(/scale\(([^)]+)\)/);
                    const rotateMatch = currentTransform.match(/rotate\(([^)]+)\)/);
                    
                    const scale = scaleMatch ? scaleMatch[1] : '1';
                    const rotate = rotateMatch ? rotateMatch[1] : '0deg';
                    
                    pattern.style.transform = `translateY(${translateY}px) scale(${scale}) rotate(${rotate})`;
                }
            });
            
            ticking = false;
        }
        
        function requestTick() {
            if (!ticking) {
                requestAnimationFrame(updateOrixaPositions);
                ticking = true;
            }
        }
        
        // Adicionar listener de scroll apenas se suportado
        const supportsPassive = (() => {
            let supportsPassive = false;
            try {
                addEventListener('test', null, Object.defineProperty({}, 'passive', {
                    get: function () {
                        supportsPassive = true;
                    }
                }));
            } catch(e) {}
            return supportsPassive;
        })();
        
        window.addEventListener('scroll', requestTick, supportsPassive ? { passive: true } : false);
    }
    
    // Efeito de aparição gradual
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = entry.target.dataset.opacity || '0.05';
                entry.target.style.transition = 'opacity 2s ease-in-out';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '50px'
    });
    
    // Observar todos os padrões
    orixaPatterns.forEach(pattern => {
        pattern.dataset.opacity = getComputedStyle(pattern).opacity;
        pattern.style.opacity = '0';
        observer.observe(pattern);
    });
    
    // Cleanup ao sair da página
    window.addEventListener('beforeunload', () => {
        orixaPatterns.forEach(pattern => {
            pattern.style.animation = 'none';
            pattern.style.transform = 'none';
        });
    });
    
    // Função para pausar animações quando a aba não está ativa
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            orixaPatterns.forEach(pattern => {
                pattern.style.animationPlayState = 'paused';
            });
        } else {
            orixaPatterns.forEach(pattern => {
                pattern.style.animationPlayState = 'running';
            });
        }
    });
});
