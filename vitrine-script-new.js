// Dados dos produtos
// Última atualização: 31/08/2025 - Modal do livro dos Èbós adicionado
const produtos = {
    yoruba: {
        titulo: "Yorùbá Descomplicado - Uso em Rituais Sagrados do Candomblé",
        preco: "R$ 39,99",
        precoEbook: "R$ 39,99",
        precoFisico: "R$ 89,99",
        imagem: "livro_yoruba.png",
        badges: [],
        descricao: "Mais do que um dicionário, este é um guia funcional e ritualístico da língua yorùbá. O livro ensina vocabulário, estrutura de frases, pronúncia, termos rituais e saudações utilizadas nos terreiros. Material indispensável para iniciados, praticantes e estudiosos da cultura afro-brasileira que desejam se comunicar com respeito, reverência e precisão nos contextos sagrados.",
        destaques: [
            "Gramática e estrutura da língua yorùbá",
            "Saudações e frases usadas nos rituais",
            "Listas de verbos, advérbios, objetos e sentimentos"
        ],
        dados: {
            "Autor": "Bàbá Akindele",
            "Editora": "Yorùbá History Channel",
            "Ano": "2025",
            "Formato": "Digital (PDF) / Físico",
            "Páginas": "100"
        },
        linkCompra: "https://pay.hotmart.com/T100535056L",
        linkEbook: "https://pay.hotmart.com/T100535056L",
        linkFisico: "https://pay.hotmart.com/K101000829W"
    },
    obi: {
        titulo: "Aprendendo a Jogar Obì - O Oráculo Sagrado dos Òrìsà",
        preco: "R$ 29,99",
        precoEbook: "R$ 29,99",
        precoFisico: "R$ 69,99",
        imagem: "livro_obi.png",
        badges: [],
        descricao: "Neste guia essencial, Bàbá Akindele ensina de forma prática como jogar, interpretar e cuidar do Obì – um dos oráculos mais antigos e respeitados no culto aos Òrìsà. O livro apresenta as formas de jogo, tipos de Obì, invocações, oríkì, interpretações e cuidados rituais.",
        destaques: [
            "Explicação dos tipos de Obì e suas funções",
            "Jogos de confirmação e conversação",
            "Uso do Obì nos rituais e cultos afro-brasileiros"
        ],
        dados: {
            "Autor": "Bàbá Akindele",
            "Editora": "Yorùbá History Channel",
            "Ano": "2025",
            "Formato": "Digital (PDF) / Físico",
            "Páginas": "80"
        },
        linkCompra: "https://pay.hotmart.com/O100753793W",
        linkEbook: "https://pay.hotmart.com/O100753793W",
        linkFisico: "https://pay.hotmart.com/R101026610B"
    },
    ewe: {
        titulo: "Èwé Òró - Folhas de Fundamento I",
        preco: "R$ 29,99",
        precoEbook: "R$ 29,99",
        precoFisico: "R$ 69,99",
        imagem: "livro_eweoro.png",
        badges: [],
        descricao: "Este livro é um verdadeiro herbário espiritual que apresenta o nome sagrado de dezenas de folhas utilizadas nos rituais afro-brasileiros. Cada entrada traz o nome em yorùbá com acentuação tonal correta, nome popular, nome científico, Òrìṣà correspondente, usos medicinais, aplicações ritualísticas e imagens ilustrativas. Obra essencial para iniciados, sacerdotes e estudiosos que desejam aprofundar sua relação com o universo vegetal sagrado.",
        destaques: [
            "Mais de 50 folhas descritas com riqueza de detalhes",
            "Informações botânicas e litúrgicas",
            "Nome em yorùbá com acento tonal correto"
        ],
        dados: {
            "Autor": "Bàbá Akindele",
            "Editora": "Yorùbá History Channel",
            "Ano": "2025",
            "Formato": "Digital (PDF) / Físico",
            "Páginas": "56"
        },
        linkCompra: "https://pay.hotmart.com/N100044015B",
        linkEbook: "https://pay.hotmart.com/N100044015B",
        linkFisico: "https://pay.hotmart.com/U101026859G"
    },
    ilu: {
        titulo: "Ilú Odára - Ritmo, Tradição e Fé",
        preco: "R$ 24,99",
        precoEbook: "R$ 24,99",
        precoFisico: "R$ 64,99",
        imagem: "ilu odara folha.png",
        badges: [],
        descricao: "Um mergulho no universo dos tambores sagrados do Candomblé e da Umbanda. O livro revela a história, os tipos de atabaques, a missão dos ogãs e a linguagem ritual dos toques que invocam os Òrìṣà.",
        destaques: [
            "História dos tambores no culto afro-brasileiro",
            "Toques para cada Òrìṣà e seus significados",
            "Função ritual dos atabaques e dos ogãs"
        ],
        dados: {
            "Autor": "Bàbá Akindele",
            "Editora": "Yorùbá History Channel",
            "Ano": "2025",
            "Formato": "Digital (PDF) / Físico",
            "Páginas": "100"
        },
        linkCompra: "https://pay.hotmart.com/T101224252U",
        linkEbook: "https://pay.hotmart.com/T101224252U",
        linkFisico: "https://pay.hotmart.com/X101224611R"
    },
    odu: {
        titulo: "Odù no Ẹ́ẹ́rìndínlógún - Caminhos, Conselhos e Mistérios",
        preco: "R$ 34,99",
        precoEbook: "R$ 34,99",
        precoFisico: "R$ 84,99",
        imagem: "livro_odus.jpg",
        badges: [],
        descricao: "Este livro apresenta um estudo completo sobre os 16 Òdù maiores do oráculo dos búzios, conhecido como Ẹ́ẹ́rìndínlógún. Bàbá Akindele revela os fundamentos, funções e simbolismos de cada Odù, conectando histórias ancestrais com o uso ritual e prático. Obra indispensável para quem deseja compreender profundamente o jogo de búzios.",
        destaques: [
            "Interpretação dos 16 Òdù principais",
            "Relação com os Òrìṣà e o sistema de Ifá",
            "Fundamentos ritualísticos do jogo de búzios"
        ],
        dados: {
            "Autor": "Bàbá Akindele",
            "Editora": "Yorùbá History Channel",
            "Ano": "2025",
            "Formato": "Digital (PDF) / Físico",
            "Páginas": "75"
        },
        linkCompra: "https://pay.hotmart.com/H101249647U",
        linkEbook: "https://pay.hotmart.com/H101249647U",
        linkFisico: "https://pay.hotmart.com/O101250008A"
    },
    "livro-ebos": {
        titulo: "O livro dos Èbós - Fundamentos e Práticas Sagradas",
        preco: "R$ 89,99",
        precoEbook: "R$ 89,99",
        precoFisico: "R$ 139,90",
        imagem: "livro_ebos.jpg",
        badges: [],
        descricao: "Este livro apresenta um mergulho profundo na tradição dos ebós, rituais sagrados de limpeza, proteção e transformação dentro do culto aos Òrìṣà. Bàbá Akindele reúne fundamentos, ingredientes, receitas e aplicações práticas, mostrando como cada ebó atua na abertura de caminhos, na cura espiritual e no fortalecimento do axé. Uma obra indispensável para iniciados, estudiosos e todos que buscam compreender a importância e o poder dos ebós na tradição yorùbá e no Candomblé.",
        destaques: [
            "Fundamentos e simbolismo dos ebós",
            "Ingredientes, receitas e modos de preparo",
            "Conexão com Òrìṣà e com o oráculo",
            "Aplicações para proteção, prosperidade e equilíbrio"
        ],
        dados: {
            "Autor": "Bàbá Akindele",
            "Editora": "Yorùbá History Channel",
            "Ano": "2025",
            "Formato": "Digital (PDF) / Físico",
            "Páginas": "203"
        },
        linkCompra: "https://pay.hotmart.com/F101665291H",
        linkEbook: "https://pay.hotmart.com/F101665291H",
        linkFisico: "https://pay.hotmart.com/W101665411S"
    },
    "combo-sagrado": {
        titulo: "Combo Sagrado",
        preco: "R$ 89,99",
        precoEbook: "R$ 89,99",
        precoFisico: "R$ 179,99",
        imagem: "combo.png",
        badges: [],
        descricao: "Uma seleção especial dos nossos livros mais procurados para quem deseja mergulhar no universo sagrado do Candomblé. Este combo inclui conhecimentos essenciais sobre língua, oráculo e folhas sagradas.",
        destaques: [
            "Yorùbá Descomplicado",
            "Aprendendo a Jogar Obì",
            "Èwé Òró I",
            "Economia de R$ 10,97",
            "Conhecimento completo para iniciantes"
        ],
        dados: {
            "Livros Inclusos": "3 livros",
            "Valor Individual E-book": "R$ 99,97",
            "Valor Individual Físico": "R$ 199,97",
            "Formato": "Digital (PDF) / Físico",
            "Acesso": "Imediato / 5-10 dias úteis"
        },
        linkCompra: "https://pay.hotmart.com/I101033188S",
        linkEbook: "https://pay.hotmart.com/I101033188S",
        linkFisico: "https://pay.hotmart.com/X101033177I"
    },
    "combo-completo": {
        titulo: "Combo Completo",
        preco: "R$ 139,99",
        precoEbook: "R$ 139,99",
        precoFisico: "R$ 289,99",
        imagem: "combo_geral.png",
        badges: [],
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
            "Livros Inclusos": "5 livros",
            "Valor Individual E-book": "R$ 159,95",
            "Valor Individual Físico": "R$ 319,95",
            "Formato": "Digital (PDF) / Físico",
            "Acesso": "Imediato / 5-10 dias úteis"
        },
        linkCompra: "https://pay.hotmart.com/W101256979E",
        linkEbook: "https://pay.hotmart.com/W101256979E",
        linkFisico: "https://pay.hotmart.com/U101256572A"
    },
    "combo-oraculo": {
        titulo: "Combo Oráculo",
        preco: "R$ 59,99",
        precoEbook: "R$ 59,99",
        precoFisico: "R$ 119,99",
        imagem: "combo_oraculo.png",
        badges: [],
        descricao: "Focado nos sistemas oraculares tradicionais, este combo é perfeito para quem quer aprender sobre Obì e Èrìndílógún. Conhecimento profundo sobre as artes divinatórias yorùbá.",
        destaques: [
            "Aprendendo a Jogar Obì",
            "Odù no Èrìndílógún",
            "Foco em sistemas oraculares",
            "Economia de R$ 4,99",
            "Ideal para consulentes"
        ],
        dados: {
            "Livros Inclusos": "2 livros",
            "Valor Individual E-book": "R$ 64,98",
            "Valor Individual Físico": "R$ 124,98",
            "Formato": "Digital (PDF) / Físico",
            "Acesso": "Imediato / 5-10 dias úteis"
        },
        linkCompra: "https://pay.hotmart.com/W101256953G",
        linkEbook: "https://pay.hotmart.com/W101256953G",
        linkFisico: "https://pay.hotmart.com/E101255523Y"
    }
};

// Função para abrir o modal
function abrirModal(produtoId) {
    console.log('Abrindo modal para:', produtoId);
    console.log('Produtos disponíveis:', Object.keys(produtos));
    const produto = produtos[produtoId];
    if (!produto) {
        console.error('Produto não encontrado:', produtoId);
        console.error('Produtos disponíveis:', Object.keys(produtos));
        return;
    }

    const modal = document.getElementById('produto-modal');
    const modalImg = document.getElementById('modal-img');
    const modalTitulo = document.getElementById('modal-titulo');
    const modalSubtitulo = document.getElementById('modal-subtitulo');
    const modalDescricao = document.getElementById('modal-descricao-texto');
    const modalDestaques = document.getElementById('modal-destaques');
    const modalDados = document.getElementById('modal-dados');
    const modalBtnEbook = document.getElementById('modal-btn-ebook');
    const modalBtnFisico = document.getElementById('modal-btn-fisico');
    const precoEbookEl = document.getElementById('preco-ebook');
    const precoFisicoEl = document.getElementById('preco-fisico');

    // Verificar se todos os elementos existem
    if (!modal || !modalImg || !modalTitulo) {
        console.error('Elementos do modal não encontrados');
        return;
    }

    // Dividir título em título e subtítulo
    const tituloCompleto = produto.titulo;
    const partesDoTitulo = tituloCompleto.split(' - ');
    const titulo = partesDoTitulo[0];
    const subtitulo = partesDoTitulo.length > 1 ? partesDoTitulo[1] : '';

    // Preencher dados do modal
    modalImg.src = produto.imagem;
    modalImg.alt = produto.titulo;
    modalTitulo.textContent = titulo;
    if (modalSubtitulo) {
        modalSubtitulo.textContent = subtitulo;
        modalSubtitulo.style.display = subtitulo ? 'block' : 'none';
    }
    if (modalDescricao) modalDescricao.textContent = produto.descricao;
    
    // Configurar botões de compra com onclick
    console.log('Configurando botões - LinkEbook:', produto.linkEbook, 'LinkFisico:', produto.linkFisico);
    if (modalBtnEbook) {
        modalBtnEbook.href = "#";
        modalBtnEbook.onclick = function(e) {
            e.preventDefault();
            console.log('Clique no botão ebook, abrindo:', produto.linkEbook || produto.linkCompra);
            window.open(produto.linkEbook || produto.linkCompra, '_blank');
        };
        console.log('Botão ebook configurado');
    } else {
        console.error('Elemento modal-btn-ebook não encontrado');
    }
    if (modalBtnFisico) {
        modalBtnFisico.href = "#";
        modalBtnFisico.onclick = function(e) {
            e.preventDefault();
            console.log('Clique no botão físico, abrindo:', produto.linkFisico || produto.linkCompra);
            window.open(produto.linkFisico || produto.linkCompra, '_blank');
        };
        console.log('Botão físico configurado');
    } else {
        console.error('Elemento modal-btn-fisico não encontrado');
    }

    // Preencher preços nos botões
    console.log('Atualizando preços - Ebook:', produto.precoEbook || produto.preco, 'Fisico:', produto.precoFisico || produto.preco);
    if (precoEbookEl) {
        precoEbookEl.textContent = produto.precoEbook || produto.preco;
        console.log('Preço ebook atualizado para:', precoEbookEl.textContent);
    } else {
        console.error('Elemento preco-ebook não encontrado');
    }
    if (precoFisicoEl) {
        precoFisicoEl.textContent = produto.precoFisico || produto.preco;
        console.log('Preço físico atualizado para:', precoFisicoEl.textContent);
    } else {
        console.error('Elemento preco-fisico não encontrado');
    }

    // Destaques
    if (modalDestaques) {
        modalDestaques.innerHTML = `
            <h4>📋 Destaques:</h4>
            <ul>
                ${produto.destaques.map(destaque => `<li>• ${destaque}</li>`).join('')}
            </ul>
        `;
    }

    // Dados técnicos
    if (modalDados) {
        modalDados.innerHTML = `
            <h4>📊 Dados Técnicos:</h4>
            <div class="dados-grid">
                ${Object.entries(produto.dados).map(([chave, valor]) => `
                    <div class="dado-item">
                        <strong>${chave}:</strong> ${valor}
                    </div>
                `).join('')}
                <div class="dado-item">
                    <strong>Acesso:</strong> Ebook (imediato) / Livro (de 5 a 15 dias úteis)
                </div>
                <div class="dado-item">
                    <strong>Frete:</strong> Livro físico - calcular na compra
                </div>
            </div>
        `;
    }

    // Mostrar modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Função para fechar o modal
function fecharModal() {
    const modal = document.getElementById('produto-modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// Hero dinâmico
function iniciarHeroDinamico() {
    const heroTitulo = document.querySelector('.titulo-principal');
    const titulos = [
        'Biblioteca Yorùbá',
        'Conhecimento Ancestral',
        'Sabedoria Milenar',
        'Tradição Yorùbá'
    ];
    
    let index = 0;
    
    setInterval(() => {
        if (heroTitulo) {
            heroTitulo.style.opacity = '0';
            setTimeout(() => {
                index = (index + 1) % titulos.length;
                heroTitulo.textContent = titulos[index];
                heroTitulo.style.opacity = '1';
            }, 500);
        }
    }, 3000);
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM carregado, inicializando...');
    
    // Verificação de integridade
    const modal = document.getElementById('produto-modal');
    
    if (!modal) {
        console.error('Modal não encontrado!');
        return;
    }
    
    // Inicializar hero dinâmico
    iniciarHeroDinamico();
    
    // Botões "Ver Detalhes"
    const botoesDetalhes = document.querySelectorAll('.btn-ver-detalhes');
    console.log('Elementos verificados:');
    console.log('- Modal:', modal ? 'OK' : 'ERRO');
    console.log('- Botões encontrados:', botoesDetalhes.length);
    console.log('- Produtos definidos:', Object.keys(produtos).length);
    console.log('Botões encontrados:', botoesDetalhes.length);
    
    botoesDetalhes.forEach(botao => {
        botao.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            const produtoCard = this.closest('.produto-card');
            const produtoId = produtoCard.getAttribute('data-produto');
            console.log('Clique no botão, produto:', produtoId);
            abrirModal(produtoId);
        });
    });

    // Cards completos também abrem o modal
    const produtoCards = document.querySelectorAll('.produto-card');
    console.log('Cards encontrados:', produtoCards.length);
    
    produtoCards.forEach(card => {
        card.addEventListener('click', function(e) {
            // Só abrir modal se não clicar no botão
            if (!e.target.closest('.btn-ver-detalhes')) {
                const produtoId = this.getAttribute('data-produto');
                console.log('Clique no card, produto:', produtoId);
                abrirModal(produtoId);
            }
        });
    });

    // Títulos dos produtos como botões (especialmente para mobile)
    const produtoTitulos = document.querySelectorAll('.produto-titulo');
    console.log('Títulos encontrados:', produtoTitulos.length);
    
    // Função para verificar se é mobile
    function isMobile() {
        return window.innerWidth <= 768;
    }
    
    // Função para atualizar títulos baseado no tamanho da tela
    function atualizarTitulos() {
        produtoTitulos.forEach(titulo => {
            if (!titulo.dataset.tituloOriginal) {
                titulo.dataset.tituloOriginal = titulo.textContent;
            }
            
            if (isMobile()) {
                titulo.textContent = "COMPRAR";
                titulo.style.cursor = "pointer";
            } else {
                titulo.textContent = titulo.dataset.tituloOriginal;
                titulo.style.cursor = "default";
            }
        });
    }
    
    // Executar na inicialização
    atualizarTitulos();
    
    // Executar quando a tela for redimensionada
    window.addEventListener('resize', atualizarTitulos);
    
    produtoTitulos.forEach(titulo => {
        titulo.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            const produtoCard = this.closest('.produto-card');
            const produtoId = produtoCard.getAttribute('data-produto');
            console.log('Clique no título, produto:', produtoId);
            abrirModal(produtoId);
        });
    });

    // Fechar modal
    const modalClose = document.getElementById('modal-close');
    const modalOverlay = document.getElementById('modal-overlay');
    
    if (modalClose) {
        modalClose.addEventListener('click', fecharModal);
    }
    
    if (modalOverlay) {
        modalOverlay.addEventListener('click', fecharModal);
    }

    // Fechar modal com ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            fecharModal();
        }
    });

    // Prevenir propagação nos clicks do modal content
    const modalContent = document.querySelector('.modal-content');
    if (modalContent) {
        modalContent.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }

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

    // Botão voltar ao topo
    const backToTop = document.getElementById('back-to-top');
    if (backToTop) {
        window.addEventListener('scroll', function() {
            if(window.scrollY > 300) { 
                backToTop.style.display = 'flex'; 
            } else { 
                backToTop.style.display = 'none'; 
            }
        });
        
        backToTop.onclick = () => { 
            window.scrollTo({top: 0, behavior: 'smooth'}); 
        };
    }
});
