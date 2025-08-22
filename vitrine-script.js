// Dados dos produtos
const produtos = {
    yoruba: {
        titulo: "Yorùbá Descomplicado",
        preco: "R$ 39,99",
        imagem: "livro_yoruba.png",
        badges: ['Mais Vendido'],
        descricao: "Um guia completo e prático para aprender o idioma Yorùbá. Este guia é um portal linguístico que desvenda os segredos milenares de uma língua viva, pulsante nos terreiros e no coração da diáspora africana. Aprenda a pronúncia correta, tons sagrados e vocabulário ritualístico do Candomblé.",
        destaques: [
            "Pronúncia correta e tons sagrados",
            "Vocabulário ritualístico essencial",
            "Ideal para iniciantes e filhos de santo",
            "Oríkìs e participação nos rituais"
        ],
        dados: {
            "Autor": "Yorùbá History Channel",
            "Editora": "Yorùbá History Channel",
            "Ano": "2025",
            "Formato": "Digital (PDF) / Físico",
            "Páginas": "120"
        },
        linkCompra: "https://pay.hotmart.com/R92825700A?checkoutMode=10"
    },
    obi: {
        titulo: "Aprendendo a Jogar Obì",
        preco: "R$ 29,99",
        imagem: "livro_obi.png",
        badges: [],
        descricao: "Neste guia essencial, Bàbá Akindele ensina de forma prática como jogar, interpretar e cuidar do Obì – um dos oráculos mais antigos e respeitados no culto aos Òrìṣà. O livro apresenta as formas de jogo, tipos de Obì, invocações, oríkì, interpretações e cuidados rituais.",
        destaques: [
            "Explicação dos tipos de Obì e suas funções",
            "Jogos de confirmação e conversação",
            "Uso do Obì nos rituais e cultos afro-brasileiros"
        ],
        dados: {
            "Autor": "Bàbá Akindele",
            "Editora": "Yorùbá History Channel",
            "Ano": "2025",
            "Formato": "Digital (PDF)",
            "Páginas": "80"
        },
        linkCompra: "https://pay.hotmart.com/R92825700A?checkoutMode=10"
    },
    ewe: {
        titulo: "Èwé Òró I",
        preco: "R$ 29,99",
        imagem: "livro_eweoro.png",
        badges: [],
        descricao: "Uma enciclopédia completa das plantas usadas nos terreiros, com seus nomes em yorùbá, usos ritualísticos e fundamentos.",
        destaques: [
            "Enciclopédia completa das folhas sagradas",
            "Nomes em yorùbá e português",
            "Usos medicinais e espirituais",
            "Fundamentos ritualísticos",
            "Essencial para quem trabalha com axé"
        ],
        dados: {
            "Autor": "Yorùbá History Channel",
            "Editora": "Yorùbá History Channel",
            "Ano": "2025",
            "Formato": "Digital (PDF)",
            "Páginas": "95"
        },
        linkCompra: "https://pay.hotmart.com/R92825700A?checkoutMode=10"
    },
    ilu: {
        titulo: "Ilú Odára",
        preco: "R$ 24,99",
        imagem: "ilu odara folha.png",
        badges: [],
        descricao: "Um mergulho profundo no universo sagrado dos tambores afro-brasileiros. Ao longo de 15 capítulos, esta obra revela o tambor como ser vivo, guardião de segredos, transmissor de axé e elo entre o mundo visível (Ayé) e o invisível (Òrún). Uma jornada pela musicalidade e espiritualidade das tradições yorùbá.",
        destaques: [
            "15 capítulos sobre tambores sagrados",
            "Mitos fundadores e técnicas de consagração",
            "Importância dos Alabês e Ògáńs",
            "Toques das nações do Candomblé e Umbanda",
            "História de resistência e tradição"
        ],
        dados: {
            "Autor": "Yorùbá History Channel",
            "Editora": "Yorùbá History Channel",
            "Ano": "2025",
            "Formato": "Digital (PDF) / Físico",
            "Páginas": "110"
        },
        linkCompra: "https://pay.hotmart.com/R92825700A?checkoutMode=10"
    },
    odu: {
        titulo: "Odù no Èrìndílógún",
        preco: "R$ 34,99",
        imagem: "livro_odus.jpg",
        badges: [],
        descricao: "Uma obra fundamental sobre o sistema oracular dos búzios, explorando os 16 Odù principais do Èrìndílógún. Este livro desvenda os mistérios, caminhos e conselhos contidos em cada configuração dos búzios, oferecendo conhecimento profundo sobre interpretação, rituais e fundamentos desta arte divinatória ancestral.",
        destaques: [
            "Os 16 Odù do Èrìndílógún explicados",
            "Técnicas de interpretação dos búzios",
            "Rituais e fundamentos oraculares",
            "Caminhos e conselhos para cada Odù",
            "Arte divinatória ancestral"
        ],
        dados: {
            "Autor": "Yorùbá History Channel",
            "Editora": "Yorùbá History Channel",
            "Ano": "2025",
            "Formato": "Digital (PDF) / Físico",
            "Páginas": "88"
        },
        linkCompra: "https://pay.hotmart.com/R92825700A?checkoutMode=10"
    },
    "combo-sagrado": {
        titulo: "Combo Sagrado",
        preco: "R$ 89,99",
        imagem: "combo_oraculo.png",
        badges: ['Mais Popular'],
        descricao: "Uma seleção especial dos nossos livros mais procurados para quem deseja mergulhar no universo sagrado do Candomblé. Este combo inclui conhecimentos essenciais sobre língua, oráculo e folhas sagradas.",
        destaques: [
            "Yorùbá Descomplicado",
            "Aprendendo a Jogar Obì",
            "Èwé Òró I",
            "Economia de R$ 10,97",
            "Conhecimento completo para iniciantes"
        ],
        dados: {
            "Livros Inclusos": "3 livros digitais",
            "Valor Individual": "R$ 99,97",
            "Desconto": "R$ 10,97",
            "Formato": "Digital (PDF)",
            "Acesso": "Imediato"
        },
        linkCompra: "https://pay.hotmart.com/X92825736K?checkoutMode=10"
    },
    "combo-completo": {
        titulo: "Combo Completo",
        preco: "R$ 139,99",
        imagem: "combo_geral.png",
        badges: ['Premium'],
        descricao: "A coleção completa de todos os nossos livros sobre tradições yorùbá e afro-brasileiras. Ideal para estudiosos, praticantes e todos que desejam conhecimento profundo sobre a cultura ancestral.",
        destaques: [
            "Todos os 5 livros da coleção",
            "Yorùbá Descomplicado",
            "Aprendendo a Jogar Obì",
            "Èwé Òró I",
            "Ilú Odára",
            "Odù no Èrìndílógún",
            "Economia de R$ 19,96"
        ],
        dados: {
            "Livros Inclusos": "5 livros digitais",
            "Valor Individual": "R$ 159,95",
            "Desconto": "R$ 19,96",
            "Formato": "Digital (PDF)",
            "Acesso": "Imediato"
        },
        linkCompra: "https://pay.hotmart.com/J92825659D?checkoutMode=10"
    },
    "combo-oraculo": {
        titulo: "Combo Oráculo",
        preco: "R$ 59,99",
        imagem: "combo.png",
        badges: ['Econômico'],
        descricao: "Focado nos sistemas oraculares tradicionais, este combo é perfeito para quem quer aprender sobre Obì e Èrìndílógún. Conhecimento profundo sobre as artes divinatórias yorùbá.",
        destaques: [
            "Aprendendo a Jogar Obì",
            "Odù no Èrìndílógún",
            "Foco em sistemas oraculares",
            "Economia de R$ 4,99",
            "Ideal para consulentes"
        ],
        dados: {
            "Livros Inclusos": "2 livros digitais",
            "Valor Individual": "R$ 64,98",
            "Desconto": "R$ 4,99",
            "Formato": "Digital (PDF)",
            "Acesso": "Imediato"
        },
        linkCompra: "https://pay.hotmart.com/V92825780G?checkoutMode=10"
    }
};

// Elementos do DOM
const modal = document.getElementById('produto-modal');
const modalOverlay = document.getElementById('modal-overlay');
const modalClose = document.getElementById('modal-close');
const modalImg = document.getElementById('modal-img');
const modalTitulo = document.getElementById('modal-titulo');
const modalTituloHeader = document.getElementById('modal-titulo-header');
const modalPreco = document.getElementById('modal-preco');
const modalBadges = document.getElementById('modal-badges');
const modalDescricao = document.getElementById('modal-descricao-texto');
const modalDestaques = document.getElementById('modal-destaques');
const modalDados = document.getElementById('modal-dados');
const modalBtnComprar = document.getElementById('modal-btn-comprar');

// Função para abrir o modal
function abrirModal(produtoId) {
    const produto = produtos[produtoId];
    if (!produto) return;

    // Preencher dados do modal
    modalImg.src = produto.imagem;
    modalImg.alt = produto.titulo;
    modalTitulo.textContent = produto.titulo;
    modalTituloHeader.textContent = produto.titulo;
    modalPreco.textContent = produto.preco;
    modalDescricao.textContent = produto.descricao;
    modalBtnComprar.href = produto.linkCompra;

    // Badges
    modalBadges.innerHTML = '';
    produto.badges.forEach(badge => {
        const badgeEl = document.createElement('span');
        badgeEl.className = 'badge';
        if (badge === 'Mais Popular') badgeEl.classList.add('popular');
        if (badge === 'Premium') badgeEl.classList.add('premium');
        if (badge === 'Econômico') badgeEl.classList.add('economico');
        badgeEl.textContent = badge;
        modalBadges.appendChild(badgeEl);
    });

    // Destaques
    modalDestaques.innerHTML = `
        <h4>📋 Destaques:</h4>
        <ul>
            ${produto.destaques.map(destaque => `<li>• ${destaque}</li>`).join('')}
        </ul>
    `;

    // Dados técnicos
    modalDados.innerHTML = `
        <h4>📊 Dados Técnicos:</h4>
        <div class="dados-grid">
            ${Object.entries(produto.dados).map(([chave, valor]) => `
                <div class="dado-item">
                    <strong>${chave}:</strong> ${valor}
                </div>
            `).join('')}
        </div>
    `;

    // Mostrar modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Função para fechar o modal
function fecharModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Botões "Ver Detalhes"
    const botoesDetalhes = document.querySelectorAll('.btn-ver-detalhes');
    botoesDetalhes.forEach(botao => {
        botao.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            const produtoCard = this.closest('.produto-card');
            const produtoId = produtoCard.getAttribute('data-produto');
            abrirModal(produtoId);
        });
    });

    // Cards completos também abrem o modal
    const produtoCards = document.querySelectorAll('.produto-card');
    produtoCards.forEach(card => {
        card.addEventListener('click', function() {
            const produtoId = this.getAttribute('data-produto');
            abrirModal(produtoId);
        });
    });

    // Fechar modal
    modalClose.addEventListener('click', fecharModal);
    modalOverlay.addEventListener('click', fecharModal);

    // Fechar modal com ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            fecharModal();
        }
    });

    // Prevenir propagação nos clicks do modal content
    document.querySelector('.modal-content').addEventListener('click', function(e) {
        e.stopPropagation();
    });
});

// Smooth scroll para links de navegação
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

// Animação de entrada dos cards
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const cardObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Aplicar animação aos cards quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.produto-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        cardObserver.observe(card);
    });
});
