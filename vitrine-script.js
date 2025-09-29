// Dados dos produtos
const produtos = {
    yoruba: {
        titulo: "Yorùbá Descomplicado",
        preco: "R$ 39,99",
        precoEbook: "R$ 39,99",
        precoFisico: "R$ 99,99",
        imagem: "livro_yoruba.png",
        badges: [],
        descricao: "Um guia completo e prático para aprender o idioma Yorùbá. Este guia é um portal linguístico que desvenda os segredos milenares de uma língua viva, pulsante nos terreiros e no coração da diáspora africana. Aprenda a pronúncia correta, tons sagrados e vocabulário ritualístico do Candomblé.",
        destaques: [
            "Pronúncia correta e tons sagrados",
            "Vocabulário ritualístico essencial",
            "Ideal para iniciantes e filhos de santo",
            "Oríkìs e participação nos rituais"
        ],
        dados: {
            "Autor": "Bàbá Akindele",
            "Editora": "Yorùbá History Channel",
            "Ano": "2025",
            "Formato": "Digital (PDF) / Físico",
            "Páginas": "120"
        },
        linkCompra: "https://pay.hotmart.com/T100535056L",
        linkEbook: "https://pay.hotmart.com/T100535056L",
        linkFisico: "https://pay.hotmart.com/O102147499O"
    },
    obi: {
        titulo: "Aprendendo a Jogar Obì",
        preco: "R$ 29,99",
        precoEbook: "R$ 29,99",
        precoFisico: "R$ 69,99",
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
        linkCompra: "https://pay.hotmart.com/O100753793W",
        linkEbook: "https://pay.hotmart.com/O100753793W",
        linkFisico: "https://pay.hotmart.com/R101026610B"
    },
    ewe: {
        titulo: "Èwé Òró I",
        preco: "R$ 29,99",
        precoEbook: "R$ 29,99",
        precoFisico: "R$ 69,99",
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
            "Autor": "Bàbá Akindele",
            "Editora": "Yorùbá History Channel",
            "Ano": "2025",
            "Formato": "Digital (PDF)",
            "Páginas": "95"
        },
        linkCompra: "https://pay.hotmart.com/N100044015B",
        linkEbook: "https://pay.hotmart.com/N100044015B",
        linkFisico: "https://pay.hotmart.com/U101026859G"
    },
    ilu: {
        titulo: "Ilú Odára",
        preco: "R$ 24,99",
        precoEbook: "R$ 24,99",
        precoFisico: "R$ 69,99",
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
            "Autor": "Bàbá Akindele",
            "Editora": "Yorùbá History Channel",
            "Ano": "2025",
            "Formato": "Digital (PDF) / Físico",
            "Páginas": "110"
        },
        linkCompra: "https://pay.hotmart.com/T101224252U",
        linkEbook: "https://pay.hotmart.com/T101224252U",
        linkFisico: "https://pay.hotmart.com/S102147510T"
    },
    odu: {
        titulo: "Odù no Èrìndílógún",
        preco: "R$ 34,99",
        precoEbook: "R$ 34,99",
        precoFisico: "R$ 89,99",
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
            "Autor": "Bàbá Akindele",
            "Editora": "Yorùbá History Channel",
            "Ano": "2025",
            "Formato": "Digital (PDF) / Físico",
            "Páginas": "88"
        },
        linkCompra: "https://pay.hotmart.com/H101249647U",
        linkEbook: "https://pay.hotmart.com/H101249647U",
        linkFisico: "https://pay.hotmart.com/H102151751M"
    },
    "combo-sagrado": {
        titulo: "Combo Sagrado",
        preco: "R$ 89,99",
        imagem: "combo_oraculo.png",
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
            "Livros Inclusos": "3 livros digitais",
            "Valor Individual": "R$ 99,97",
            "Desconto": "R$ 10,97",
            "Formato": "Digital (PDF)",
            "Acesso": "Imediato"
        },
        linkCompra: "https://pay.hotmart.com/X92825736K?checkoutMode=10",
        linkEbook: "https://pay.hotmart.com/X92825736K?checkoutMode=10",
        linkFisico: "https://pay.hotmart.com/X92825736K?checkoutMode=10"
    },
    "combo-completo": {
        titulo: "Combo 5 Livros",
        preco: "R$ 139,99",
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
            "Livros Inclusos": "5 livros digitais",
            "Valor Individual": "R$ 159,95",
            "Desconto": "R$ 19,96",
            "Formato": "Digital (PDF)",
            "Acesso": "Imediato"
        },
        linkCompra: "https://pay.hotmart.com/J92825659D?checkoutMode=10",
        linkEbook: "https://pay.hotmart.com/J92825659D?checkoutMode=10",
        linkFisico: "https://pay.hotmart.com/J92825659D?checkoutMode=10"
    },
    "combo-completo-7": {
        titulo: "Combo Completo – 7 Livros de Sabedoria Yorùbá",
        preco: "R$ 269,99",
        precoEbook: "R$ 269,99",
        precoFisico: "R$ 549,99",
        imagem: "combo_7.png",
        badges: [],
        descricao: "Descubra a riqueza completa da tradição yorùbá com esta coleção definitiva de 7 livros, reunindo os ensinamentos mais essenciais da Yorùbá History Channel. Explore oráculos sagrados, a língua ritual, folhas sagradas, ritmos dos tambores e aprenda os fundamentos dos èbós e das comidas sagradas dos Òrìṣà. Esta caixa digital e física é um guia indispensável para iniciados, sacerdotes, estudiosos e todos que desejam mergulhar profundamente na cultura afro-brasileira e no culto aos Òrìṣà.",
        destaques: [
            "Odù no Ẹ́ẹ́rìndínlógún – Caminhos, Conselhos e Mistérios",
            "Aprendendo a Jogar Obì – O Oráculo Sagrado dos Òrìṣà",
            "Yorùbá Descomplicado – Uso em Rituais Sagrados do Candomblé",
            "Èwé Òró – Folhas de Fundamento I",
            "Ilú Odára – Ritmo, Tradição e Fé",
            "O Livro dos Èbós – Fundamentos Práticos",
            "Òunjẹ́ Àṣẹ – Comidas Sagradas dos Òrìṣà"
        ],
        dados: {
            "Livros Inclusos": "7 livros completos",
            "Formato Digital": "PDF com qualidade premium",
            "Formato Físico": "Caixa especial colecionável",
            "Acesso": "Imediato (digital)",
            "Público": "Iniciados, sacerdotes e estudiosos"
        },
        linkCompra: "https://pay.hotmart.com/O101946657W",
        linkEbook: "https://pay.hotmart.com/O101946657W",
        linkFisico: "https://pay.hotmart.com/F101946521G"
    },
    "combo-oraculo": {
        titulo: "Combo Oráculo",
        preco: "R$ 59,99",
        imagem: "combo.png",
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
            "Livros Inclusos": "2 livros digitais",
            "Valor Individual": "R$ 64,98",
            "Desconto": "R$ 4,99",
            "Formato": "Digital (PDF)",
            "Acesso": "Imediato"
        },
        linkCompra: "https://pay.hotmart.com/V92825780G?checkoutMode=10",
        linkEbook: "https://pay.hotmart.com/V92825780G?checkoutMode=10",
        linkFisico: "https://pay.hotmart.com/V92825780G?checkoutMode=10"
    },
    "combo-oferendas": {
        titulo: "Combo Oferendas – Èbós e Òunjẹ́ dos Òrìṣà",
        preco: "R$ 99,99",
        precoEbook: "R$ 99,99",
        precoFisico: "R$ 199,99",
        imagem: "combo_adimu.png",
        badges: [],
        descricao: "Descubra os segredos das oferendas e da culinária ritual com este combo especial, reunindo os dois livros essenciais para a prática sagrada dos Òrìṣà. Aprenda a realizar èbós corretamente, respeitando fundamentos ancestrais, e prepare comidas sagradas que carregam o axé necessário para fortalecer sua conexão espiritual.",
        destaques: [
            "O Livro dos Èbós – Fundamentos Práticos",
            "Òunjẹ́ Àṣẹ – Comidas Sagradas dos Òrìṣà",
            "Aprenda a realizar èbós corretamente",
            "Prepare comidas sagradas com axé",
            "Fundamentos ancestrais respeitados",
            "Fortalecimento da conexão espiritual"
        ],
        dados: {
            "Livros Inclusos": "2 livros especializados",
            "Foco": "Oferendas e culinária ritual",
            "Formato Digital": "PDF com qualidade premium",
            "Formato Físico": "Livros impressos",
            "Público": "Praticantes e sacerdotes"
        },
        linkCompra: "https://pay.hotmart.com/Q101946674H",
        linkEbook: "https://pay.hotmart.com/Q101946674H",
        linkFisico: "https://pay.hotmart.com/A101946669X"
    },
    "combo-personalizado": {
        titulo: "Combo Personalizado",
        preco: "Sob Consulta",
        precoEbook: "Sob Consulta",
        precoFisico: "Sob Consulta",
        imagem: "solicitar.jpg",
        badges: ["Personalizado"],
        descricao: "Crie seu combo ideal! Escolha exatamente os livros que você deseja estudar e receba um desconto especial. Entre em contato conosco pelo WhatsApp e monte sua coleção personalizada de acordo com seus interesses e necessidades de estudo.",
        destaques: [
            "Escolha os livros que desejar",
            "Desconto progressivo por quantidade",
            "Atendimento personalizado via WhatsApp",
            "Combo montado sob medida",
            "Preço especial negociado",
            "Ideal para grupos de estudo"
        ],
        dados: {
            "Tipo": "Combo Sob Medida",
            "Livros": "Escolha livre",
            "Desconto": "Progressivo por quantidade",
            "Contato": "WhatsApp direto",
            "Prazo": "Resposta em até 24h"
        },
        linkCompra: "https://wa.me/5592991549151?text=Olá! Gostaria de montar um combo personalizado de livros.",
        linkEbook: "https://wa.me/5592991549151?text=Olá! Gostaria de montar um combo personalizado de livros digitais.",
        linkFisico: "https://wa.me/5592991549151?text=Olá! Gostaria de montar um combo personalizado de livros físicos."
    }
};

// Elementos do DOM
const modal = document.getElementById('produto-modal');
const modalOverlay = document.getElementById('modal-overlay');
const modalClose = document.getElementById('modal-close');
const modalImg = document.getElementById('modal-img');
const modalTitulo = document.getElementById('modal-titulo');
const modalTituloHeader = document.getElementById('modal-titulo-header');
const modalBadges = document.getElementById('modal-badges');
const modalDescricao = document.getElementById('modal-descricao-texto');
const modalDestaques = document.getElementById('modal-destaques');
const modalDados = document.getElementById('modal-dados');
const modalBtnEbook = document.getElementById('modal-btn-ebook');
const modalBtnFisico = document.getElementById('modal-btn-fisico');

// Função para abrir o modal
function abrirModal(produtoId) {
    const produto = produtos[produtoId];
    if (!produto) return;

    // Preencher dados do modal
    modalImg.src = produto.imagem;
    modalImg.alt = produto.titulo;
    modalTitulo.textContent = produto.titulo;
    modalTituloHeader.textContent = produto.titulo;
    modalDescricao.textContent = produto.descricao;
    
    // Configurar botões de compra
    modalBtnEbook.href = produto.linkEbook || produto.linkCompra;
    modalBtnFisico.href = produto.linkFisico || produto.linkCompra;

    // Preencher preços nos botões
    const precoEbookEl = document.getElementById('preco-ebook');
    const precoFisicoEl = document.getElementById('preco-fisico');
    
    if (precoEbookEl) {
        precoEbookEl.textContent = produto.precoEbook || produto.preco;
    }
    
    if (precoFisicoEl) {
        precoFisicoEl.textContent = produto.precoFisico || produto.preco;
    }

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
    
    // Se for combo personalizado, mostrar configurador
    const configurador = document.getElementById('combo-configurador');
    const botoesPadrao = document.querySelector('.modal-acoes');
    
    if (produtoId === 'combo-personalizado') {
        configurador.style.display = 'block';
        botoesPadrao.style.display = 'none';
        inicializarConfigurador();
    } else {
        configurador.style.display = 'none';
        botoesPadrao.style.display = 'block';
    }
}

// Dados dos livros individuais para o configurador
const livrosDisponiveis = {
    yoruba: {
        nome: "Yorùbá Descomplicado",
        imagem: "livro_yoruba.png",
        precoEbook: 39.99,
        precoFisico: 89.99
    },
    obi: {
        nome: "Aprendendo a Jogar Obì",
        imagem: "livro_obi.png",
        precoEbook: 29.99,
        precoFisico: 69.99
    },
    ewe: {
        nome: "Èwé Òró I",
        imagem: "livro_eweoro.png",
        precoEbook: 29.99,
        precoFisico: 69.99
    },
    ilu: {
        nome: "Ilú Odára",
        imagem: "ilu odara folha.png",
        precoEbook: 24.99,
        precoFisico: 64.99
    },
    odu: {
        nome: "Odù no Èrìndílógún",
        imagem: "livro_odus.jpg",
        precoEbook: 34.99,
        precoFisico: 79.99
    },
    ebos: {
        nome: "O Livro dos Èbós",
        imagem: "livro_ebos.jpg",
        precoEbook: 39.99,
        precoFisico: 89.99
    },
    ounje: {
        nome: "Òunjẹ́ Àṣẹ",
        imagem: "ounje.jpg",
        precoEbook: 34.99,
        precoFisico: 79.99
    }
};

// Variáveis do configurador
let formatoSelecionado = 'ebook';
let livrosSelecionados = [];

// Função para inicializar o configurador
function inicializarConfigurador() {
    const formatoRadios = document.querySelectorAll('input[name="formato"]');
    const livrosGrid = document.getElementById('livros-grid');
    
    // Event listeners para mudança de formato
    formatoRadios.forEach(radio => {
        radio.addEventListener('change', function() {
            formatoSelecionado = this.value;
            atualizarGridLivros();
            atualizarResumo();
        });
    });
    
    // Inicializar grid de livros
    atualizarGridLivros();
    atualizarResumo();
}

// Função para atualizar o grid de livros
function atualizarGridLivros() {
    const livrosGrid = document.getElementById('livros-grid');
    livrosGrid.innerHTML = '';
    
    Object.entries(livrosDisponiveis).forEach(([id, livro]) => {
        const preco = formatoSelecionado === 'ebook' ? livro.precoEbook : livro.precoFisico;
        
        const livroDiv = document.createElement('div');
        livroDiv.className = 'livro-option';
        livroDiv.innerHTML = `
            <input type="checkbox" class="livro-checkbox" id="livro-${id}" data-livro="${id}">
            <img src="${livro.imagem}" alt="${livro.nome}" class="livro-img">
            <div class="livro-info">
                <div class="livro-nome">${livro.nome}</div>
                <div class="livro-preco">R$ ${preco.toFixed(2).replace('.', ',')}</div>
            </div>
        `;
        
        // Event listener para o checkbox
        const checkbox = livroDiv.querySelector('.livro-checkbox');
        checkbox.addEventListener('change', function() {
            if (this.checked) {
                livrosSelecionados.push(id);
                livroDiv.classList.add('selected');
            } else {
                livrosSelecionados = livrosSelecionados.filter(livroId => livroId !== id);
                livroDiv.classList.remove('selected');
            }
            atualizarResumo();
        });
        
        // Event listener para clicar na div inteira
        livroDiv.addEventListener('click', function(e) {
            if (e.target !== checkbox) {
                checkbox.click();
            }
        });
        
        livrosGrid.appendChild(livroDiv);
    });
}

// Função para atualizar o resumo do pedido
function atualizarResumo() {
    const resumoItens = document.getElementById('resumo-itens');
    const subtotalValor = document.getElementById('subtotal-valor');
    const descontoValor = document.getElementById('desconto-valor');
    const totalFinal = document.getElementById('total-final');
    const btnSolicitar = document.getElementById('btn-solicitar-combo');
    const btnEmail = document.getElementById('btn-enviar-email');
    
    if (livrosSelecionados.length === 0) {
        resumoItens.innerHTML = '<p class="nenhum-item">Nenhum livro selecionado</p>';
        subtotalValor.textContent = 'R$ 0,00';
        descontoValor.textContent = '- R$ 0,00';
        totalFinal.textContent = 'R$ 0,00';
        btnSolicitar.disabled = true;
        btnEmail.disabled = true;
        return;
    }
    
    // Calcular subtotal
    let subtotal = 0;
    const itensHtml = livrosSelecionados.map(livroId => {
        const livro = livrosDisponiveis[livroId];
        const preco = formatoSelecionado === 'ebook' ? livro.precoEbook : livro.precoFisico;
        subtotal += preco;
        
        return `
            <div class="item-selecionado">
                <span class="item-nome">${livro.nome}</span>
                <span class="item-preco">R$ ${preco.toFixed(2).replace('.', ',')}</span>
            </div>
        `;
    }).join('');
    
    // Calcular desconto (10%)
    const desconto = subtotal * 0.1;
    const total = subtotal - desconto;
    
    // Atualizar DOM
    resumoItens.innerHTML = itensHtml;
    subtotalValor.textContent = `R$ ${subtotal.toFixed(2).replace('.', ',')}`;
    descontoValor.textContent = `- R$ ${desconto.toFixed(2).replace('.', ',')}`;
    totalFinal.textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
    btnSolicitar.disabled = false;
    btnEmail.disabled = false;
    
    // Atualizar eventos dos botões
    btnSolicitar.onclick = function() {
        enviarPedidoWhatsApp(subtotal, desconto, total);
    };
    
    btnEmail.onclick = function() {
        enviarPedidoEmail(subtotal, desconto, total);
    };
}

// Função para enviar pedido via WhatsApp
function enviarPedidoWhatsApp(subtotal, desconto, total) {
    const tipoLivro = formatoSelecionado === 'ebook' ? 'E-books Digitais' : 'Livros Físicos';
    const livrosTexto = livrosSelecionados.map(livroId => {
        const livro = livrosDisponiveis[livroId];
        const preco = formatoSelecionado === 'ebook' ? livro.precoEbook : livro.precoFisico;
        return `📖 ${livro.nome} - R$ ${preco.toFixed(2).replace('.', ',')}`;
    }).join('\n');
    
    const dataAtual = new Date().toLocaleDateString('pt-BR');
    const horaAtual = new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
    
    const mensagem = `� *COMBO PERSONALIZADO YORÙBÁ*
━━━━━━━━━━━━━━━━━━━━━━━━━

🕐 *${dataAtual} às ${horaAtual}*

� *Formato:* ${tipoLivro}
� *Livros Selecionados:*

${livrosTexto}

━━━━━━━━━━━━━━━━━━━━━━━━━
💰 *RESUMO FINANCEIRO:*

💵 Subtotal: R$ ${subtotal.toFixed(2).replace('.', ',')}
🎁 Desconto (10%): -R$ ${desconto.toFixed(2).replace('.', ',')}
✨ *TOTAL FINAL: R$ ${total.toFixed(2).replace('.', ',')}*

━━━━━━━━━━━━━━━━━━━━━━━━━

🙏🏽 Àṣẹ! Gostaria de finalizar este combo personalizado.

Pode me enviar as instruções de pagamento?

Aguardo seu retorno! 🙏🏽

_Enviado via site Yorùbá History Channel_`;
    
    const numeroWhatsApp = '5592991549151'; // Número atualizado
    const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
    
    window.open(linkWhatsApp, '_blank');
}

// Função para enviar pedido via Email
function enviarPedidoEmail(subtotal, desconto, total) {
    const tipoLivro = formatoSelecionado === 'ebook' ? 'E-books Digitais' : 'Livros Físicos';
    const livrosTexto = livrosSelecionados.map(livroId => {
        const livro = livrosDisponiveis[livroId];
        const preco = formatoSelecionado === 'ebook' ? livro.precoEbook : livro.precoFisico;
        return `• ${livro.nome} - R$ ${preco.toFixed(2).replace('.', ',')}`;
    }).join('\n');
    
    const dataAtual = new Date().toLocaleDateString('pt-BR');
    const horaAtual = new Date().toLocaleTimeString('pt-BR');
    
    const assunto = encodeURIComponent('🎯 Solicitação de Combo Personalizado - Yorùbá History Channel');
    
    const corpoEmail = `📚 SOLICITAÇÃO DE COMBO PERSONALIZADO
═══════════════════════════════════════

📋 DETALHES DO PEDIDO:
Data: ${dataAtual}
Hora: ${horaAtual}
Tipo: ${tipoLivro}

📖 LIVROS SELECIONADOS:
${livrosTexto}

💰 RESUMO FINANCEIRO:
Subtotal: R$ ${subtotal.toFixed(2).replace('.', ',')}
Desconto (10%): -R$ ${desconto.toFixed(2).replace('.', ',')}
TOTAL FINAL: R$ ${total.toFixed(2).replace('.', ',')}

═══════════════════════════════════════

🙏 Olá! Gostaria de finalizar este combo personalizado.

Por favor, enviem as instruções de pagamento e entrega.

Aguardo retorno!

Atenciosamente,
[Cliente]

═══════════════════════════════════════
📱 WhatsApp: (92) 99154-9151
📧 Email: yoruba.hc.oficial@gmail.com
🌐 Site: Yorùbá History Channel`;
    
    const emailLink = `mailto:yoruba.hc.oficial@gmail.com?subject=${assunto}&body=${encodeURIComponent(corpoEmail)}`;
    
    window.open(emailLink, '_blank');
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
