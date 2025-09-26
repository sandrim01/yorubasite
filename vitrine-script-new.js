// Dados dos produtos
// Última atualização: 31/08/2025 - Modal do livro dos Èbós adicionado

// Função para calcular preço original baseado no promocional
function calcularPrecoOriginal(precoPromocional) {
    const valor = parseFloat(precoPromocional.replace('R$ ', '').replace(',', '.'));
    const original = valor + 10; // Adiciona R$ 10
    return `R$ ${original.toFixed(2).replace('.', ',')}`;
}

const produtos = {
    yoruba: {
        titulo: "Yorùbá Descomplicado - Uso em Rituais Sagrados do Candomblé",
        preco: "R$ 39,99",
        precoEbook: "R$ 39,99",
        precoEbookOriginal: "R$ 49,99",
        precoFisico: "R$ 89,99",
        precoFisicoOriginal: "R$ 99,99",
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
        precoEbookOriginal: "R$ 39,99",
        precoFisico: "R$ 69,99",
        precoFisicoOriginal: "R$ 79,99",
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
        precoEbookOriginal: "R$ 39,99",
        precoFisico: "R$ 69,99",
        precoFisicoOriginal: "R$ 79,99",
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
        precoEbookOriginal: "R$ 34,99",
        precoFisico: "R$ 64,99",
        precoFisicoOriginal: "R$ 74,99",
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
        precoEbookOriginal: "R$ 44,99",
        precoFisico: "R$ 84,99",
        precoFisicoOriginal: "R$ 94,99",
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
        preco: "R$ 69,99",
        precoEbook: "R$ 69,99",
        precoEbookOriginal: "R$ 79,99",
        precoFisico: "R$ 119,99",
        precoFisicoOriginal: "R$ 129,99",
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
    ounje: {
        titulo: "Òunjẹ́ Àṣẹ - Comidas Sagradas dos Òrìṣà",
        preco: "R$ 49,99",
        precoEbook: "R$ 49,99",
        precoEbookOriginal: "R$ 59,99",
        precoFisico: "R$ 99,99",
        precoFisicoOriginal: "R$ 109,99",
        imagem: "ounje.jpg",
        badges: [],
        descricao: "Neste livro fundamental, Bàbá Akindele apresenta a riqueza da culinária sagrada do Candomblé e da tradição yorùbá, revelando como cada prato é mais do que alimento: é oferenda, oração e caminho de ligação com o divino. A obra descreve receitas tradicionais, seus significados espirituais e rituais, além do papel essencial da Yabassê como guardiã dos segredos da cozinha sagrada.",
        destaques: [
            "Receitas completas de comidas rituais para os principais Òrìṣà",
            "Explicações sobre o simbolismo de cada prato e seus ingredientes",
            "Orientações sobre o preparo com respeito, fé e Axé",
            "Preservação da tradição oral e da prática ancestral"
        ],
        dados: {
            "Autor": "Bàbá Akindele",
            "Editora": "Yorùbá History Channel",
            "Ano": "2025",
            "Formato": "Digital (PDF) e Impresso",
            "Páginas": "184"
        },
        linkCompra: "https://pay.hotmart.com/E101920830J",
        linkEbook: "https://pay.hotmart.com/E101920830J",
        linkFisico: "https://pay.hotmart.com/X101921002I"
    },
    "oruko-nomes": {
        titulo: "Òrùkọ – Os Nomes dos Filhos de Òrìṣà",
        preco: "R$ 29,99",
        precoEbook: "R$ 29,99",
        precoEbookOriginal: "R$ 39,99",
        precoFisico: "R$ 79,99",
        precoFisicoOriginal: "R$ 89,99",
        imagem: "oruko.jpg",
        badges: ["Novo"],
        descricao: "Nesta obra inédita, Bàbá Akindele revela a profundidade espiritual dos nomes na tradição yorùbá e no Candomblé. Mais do que simples identificações, os Òrùkọ são bênçãos, orações e guias de destino. Cada nome carrega a memória ancestral, a ligação com os Òrìṣà e a força do Àṣẹ que molda a vida do iniciado. O livro apresenta nomes sagrados ligados a cada divindade, seus significados e o papel que exercem na vida dos filhos de santo, resgatando e preservando uma tradição que atravessa séculos.",
        destaques: [
            "Explicação completa sobre o significado espiritual dos nomes (Òrùkọ)",
            "Nomes tradicionais ligados a cada Òrìṣà, com tradução e interpretação",
            "Reflexões sobre a importância do Òrùkọ no Candomblé e na cultura yorùbá",
            "Preservação da memória ancestral e da identidade religiosa"
        ],
        dados: {
            "Autor": "Bàbá Akindele",
            "Editora": "Yorùbá History Channel",
            "Ano": "2025",
            "Formato": "Digital (PDF) e Impresso",
            "Páginas": "136"
        },
        linkCompra: "https://pay.hotmart.com/U101992074R",
        linkEbook: "https://pay.hotmart.com/U101992074R",
        linkFisico: "https://pay.hotmart.com/V101992053C"
    },
    "coletanea-orisa": {
        titulo: "Aprendendo sobre os Òrìṣà",
        subtitulo: "Coletânea Ritos e Mistérios - Livro I",
        preco: "R$ 34,99",
        precoEbook: "R$ 34,99",
        precoEbookOriginal: "R$ 44,99",
        precoFisico: "R$ 99,99",
        precoFisicoOriginal: "R$ 109,99",
        imagem: "orisa.jpg",
        badges: ["Novo"],
        descricao: "Nesta obra fundamental, Bàbá Akindele conduz o leitor a uma jornada pelo universo dos Òrìṣà, revelando de forma clara e acessível os fundamentos, ritos e histórias que sustentam o Candomblé. Mais do que um livro, trata-se de um guia espiritual e cultural que conecta tradição, ancestralidade e resistência. O autor apresenta desde os princípios da religião, a cosmologia yorùbá e os Irúnmòlè, até os mitos da criação, a essência do Òrìṣà e a riqueza do panteão africano.",
        destaques: [
            "Fundamentos do Candomblé e da cosmologia yorùbá",
            "O papel dos Irúnmòlè e os mitos da criação",
            "Apresentação dos principais Òrìṣà e suas características",
            "Reflexões sobre ancestralidade, oralidade e iniciação"
        ],
        dados: {
            "Autor": "Bàbá Akindele",
            "Editora": "Yorùbá History Channel",
            "Ano": "2025",
            "Formato": "Digital (PDF) e Físico",
            "Páginas": "150"
        },
        linkCompra: "https://pay.hotmart.com/N102104557D",
        linkEbook: "https://pay.hotmart.com/N102104557D",
        linkFisico: "https://pay.hotmart.com/D102104527M"
    },
    "combo-sagrado": {
        titulo: "Combo Sagrado",
        preco: "R$ 89,99",
        precoEbook: "R$ 89,99",
        precoEbookOriginal: "R$ 99,97",
        precoFisico: "R$ 199,99",
        precoFisicoOriginal: "R$ 229,97",
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
        titulo: "Combo 5 Livros",
        preco: "R$ 149,99",
        precoEbook: "R$ 149,99",
        precoEbookOriginal: "R$ 209,95",
        precoFisico: "R$ 349,99",
        precoFisicoOriginal: "R$ 429,95",
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
    "combo-completo-7": {
        titulo: "Combo Completo – 7 Livros de Sabedoria Yorùbá",
        preco: "R$ 269,99",
        precoEbook: "R$ 269,99",
        precoEbookOriginal: "R$ 349,93",
        precoFisico: "R$ 549,99",
        precoFisicoOriginal: "R$ 679,93",
        imagem: "combo_7.png",
        badges: [],
        descricao: "Descubra a riqueza completa da tradição yorùbá com esta coleção definitiva de 7 livros, reunindo os ensinamentos mais essenciais da Yorùbá History Channel. Explore oráculos sagrados, a língua ritual, folhas sagradas, ritmos dos tambores e aprenda os fundamentos dos èbós e das comidas sagradas dos Òrìṣà.",
        destaques: [
            "Odù no Ẹ́ẹ́rìndínlógún – Caminhos, Conselhos e Mistérios",
            "Aprendendo a Jogar Obì – O Oráculo Sagrado dos Òrìṣà",
            "Yorùbá Descomplicado – Uso em Rituais Sagrados",
            "Èwé Òró – Folhas de Fundamento I",
            "Ilú Odára – Ritmo, Tradição e Fé",
            "O Livro dos Èbós – Fundamentos Práticos",
            "Òunjẹ́ Àṣẹ – Comidas Sagradas dos Òrìṣà"
        ],
        dados: {
            "Livros Inclusos": "7 livros completos",
            "Valor Individual E-book": "R$ 349,93",
            "Valor Individual Físico": "R$ 679,93",
            "Formato": "Digital (PDF) / Físico Premium",
            "Acesso": "Imediato / 5-10 dias úteis"
        },
        linkCompra: "https://pay.hotmart.com/O101946657W",
        linkEbook: "https://pay.hotmart.com/O101946657W",
        linkFisico: "https://pay.hotmart.com/F101946521G"
    },
    "combo-oraculo": {
        titulo: "Combo Oráculo",
        preco: "R$ 59,99",
        precoEbook: "R$ 59,99",
        precoEbookOriginal: "R$ 64,98",
        precoFisico: "R$ 119,99",
        precoFisicoOriginal: "R$ 154,98",
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
    },
    "combo-oferendas": {
        titulo: "Combo Oferendas – Èbós e Òunjẹ́ dos Òrìṣà",
        preco: "R$ 99,99",
        precoEbook: "R$ 99,99",
        precoEbookOriginal: "R$ 129,98",
        precoFisico: "R$ 199,99",
        precoFisicoOriginal: "R$ 239,98",
        imagem: "combo_adimu.png",
        badges: [],
        descricao: "Descubra os segredos das oferendas e da culinária ritual com este combo especial, reunindo os dois livros essenciais para a prática sagrada dos Òrìṣà. Aprenda a realizar èbós corretamente e prepare comidas sagradas que carregam o axé necessário.",
        destaques: [
            "O Livro dos Èbós – Fundamentos Práticos",
            "Òunjẹ́ Àṣẹ – Comidas Sagradas dos Òrìṣà",
            "Aprenda a realizar èbós corretamente",
            "Prepare comidas sagradas com axé",
            "Fundamentos ancestrais respeitados",
            "Economia de R$ 29,99"
        ],
        dados: {
            "Livros Inclusos": "2 livros especializados",
            "Valor Individual E-book": "R$ 129,98",
            "Valor Individual Físico": "R$ 239,98",
            "Formato": "Digital (PDF) / Físico",
            "Acesso": "Imediato / 5-10 dias úteis"
        },
        linkCompra: "https://pay.hotmart.com/Q101946674H",
        linkEbook: "https://pay.hotmart.com/Q101946674H",
        linkFisico: "https://pay.hotmart.com/A101946669X"
    },
    "combo-personalizado": {
        titulo: "Combo Personalizado",
        preco: "Sob Consulta",
        precoEbook: "Sob Consulta",
        precoEbookOriginal: "Economia Garantida",
        precoFisico: "Sob Consulta",
        precoFisicoOriginal: "Desconto Progressivo",
        imagem: "",
        badges: ["Personalizado"],
        descricao: "",
        destaques: [],
        dados: {},
        linkCompra: "https://wa.me/5592991549151?text=Olá! Gostaria de montar um combo personalizado de livros.",
        linkEbook: "https://wa.me/5592991549151?text=Olá! Gostaria de montar um combo personalizado de livros digitais.",
        linkFisico: "https://wa.me/5592991549151?text=Olá! Gostaria de montar um combo personalizado de livros físicos."
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
    const precoEbookOriginalEl = document.getElementById('preco-ebook-original');
    const precoFisicoOriginalEl = document.getElementById('preco-fisico-original');

    // Verificar se todos os elementos existem
    if (!modal || !modalImg || !modalTitulo) {
        console.error('Elementos do modal não encontrados');
        return;
    }

    // Preencher dados do modal
    modalImg.src = produto.imagem;
    modalImg.alt = produto.titulo;
    modalTitulo.textContent = produto.titulo;
    if (modalSubtitulo) {
        modalSubtitulo.textContent = produto.subtitulo || '';
        modalSubtitulo.style.display = produto.subtitulo ? 'block' : 'none';
    }
    if (modalDescricao) modalDescricao.textContent = produto.descricao;
    
    // Esconder imagem e descrição para combo personalizado
    const modalImageContainer = document.querySelector('.modal-image');
    const modalDescricaoContainer = document.querySelector('.modal-descricao');
    if (produtoId === 'combo-personalizado') {
        if (modalImageContainer) modalImageContainer.style.display = 'none';
        if (modalDescricaoContainer) modalDescricaoContainer.style.display = 'none';
    } else {
        if (modalImageContainer) modalImageContainer.style.display = 'block';
        if (modalDescricaoContainer) modalDescricaoContainer.style.display = 'block';
    }
    
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

    // Preencher preços originais
    if (precoEbookOriginalEl) {
        precoEbookOriginalEl.textContent = produto.precoEbookOriginal || calcularPrecoOriginal(produto.precoEbook || produto.preco);
        console.log('Preço ebook original atualizado para:', precoEbookOriginalEl.textContent);
    }
    if (precoFisicoOriginalEl) {
        precoFisicoOriginalEl.textContent = produto.precoFisicoOriginal || calcularPrecoOriginal(produto.precoFisico || produto.preco);
        console.log('Preço físico original atualizado para:', precoFisicoOriginalEl.textContent);
    }

    // Destaques
    if (modalDestaques) {
        if (produtoId === 'combo-personalizado') {
            modalDestaques.style.display = 'none';
        } else {
            modalDestaques.style.display = 'block';
            modalDestaques.innerHTML = `
                <h4>📋 Destaques:</h4>
                <ul>
                    ${produto.destaques.map(destaque => `<li>• ${destaque}</li>`).join('')}
                </ul>
            `;
        }
    }

    // Dados técnicos
    if (modalDados) {
        if (produtoId === 'combo-personalizado') {
            modalDados.style.display = 'none';
        } else {
            modalDados.style.display = 'block';
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
    }

    // Controlar visibilidade do +frete no modal
    const freteInfoModal = document.querySelector('.frete-info-modal');
    if (freteInfoModal) {
        // Mostrar +frete apenas se houver preço físico diferente do e-book
        if (produto.precoFisico && produto.precoFisico !== produto.precoEbook) {
            freteInfoModal.style.display = 'block';
        } else {
            freteInfoModal.style.display = 'none';
        }
    }

    // Se for combo personalizado, abrir o modal específico
    if (produtoId === 'combo-personalizado') {
        abrirModalPersonalizado();
        return;
    }

    // Mostrar modal padrão para outros produtos
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Esconder configurador e mostrar botões padrão
    const configurador = document.getElementById('combo-configurador');
    const botoesPadrao = document.querySelector('.modal-acoes');
    
    if (configurador) {
        configurador.style.display = 'none';
    }
    if (botoesPadrao) {
        botoesPadrao.style.display = 'flex';
    }
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

// ========================================
// CONFIGURADOR DE COMBO PERSONALIZADO
// ========================================

// Dados dos livros individuais para o configurador
const livrosDisponiveis = {
    yoruba: {
        nome: "Yorùbá Descomplicado",
        imagem: "livro_yoruba.png",
        precoEbook: 49.99,
        precoFisico: 99.99
    },
    obi: {
        nome: "Aprendendo a Jogar Obì",
        imagem: "livro_obi.png",
        precoEbook: 39.99,
        precoFisico: 79.99
    },
    "coletanea-orisa": {
        nome: "Coletânea Ritos e Mistérios - Livro I",
        imagem: "orisa.jpg",
        precoEbook: 44.99,
        precoFisico: 109.99
    },
    ewe: {
        nome: "Èwé Òró I",
        imagem: "livro_eweoro.png",
        precoEbook: 39.99,
        precoFisico: 79.99
    },
    ilu: {
        nome: "Ilú Odára",
        imagem: "ilu odara folha.png",
        precoEbook: 34.99,
        precoFisico: 74.99
    },
    odu: {
        nome: "Odù no Èrìndílógún",
        imagem: "livro_odus.jpg",
        precoEbook: 44.99,
        precoFisico: 94.99
    },
    ebos: {
        nome: "O Livro dos Èbós",
        imagem: "livro_ebos.jpg",
        precoEbook: 79.99,
        precoFisico: 129.99
    },
    ounje: {
        nome: "Òunjẹ́ Àṣẹ",
        imagem: "ounje.jpg",
        precoEbook: 59.99,
        precoFisico: 109.99
    },
    "oruko-nomes": {
        nome: "Òrùkọ – Os Nomes dos Filhos de Òrìṣà",
        imagem: "oruko.jpg",
        precoEbook: 39.99,
        precoFisico: 89.99
    }
};

// Variáveis do configurador
let formatoSelecionado = 'ebook';
let livrosSelecionados = [];

// Função para calcular desconto progressivo
function calcularDescontoProgressivo(quantidadeLivros) {
    if (quantidadeLivros >= 10) return 0.20; // 20% para 10+ livros
    if (quantidadeLivros >= 6) return 0.15; // 15% para 6-9 livros
    if (quantidadeLivros >= 3) return 0.10; // 10% para 3-5 livros
    if (quantidadeLivros >= 2) return 0.05; // 5% para 2 livros
    return 0; // Sem desconto para 1 livro
}

// Função para obter texto do desconto
function obterTextoDesconto(quantidadeLivros) {
    if (quantidadeLivros >= 10) return "20%";
    if (quantidadeLivros >= 6) return "15%";
    if (quantidadeLivros >= 3) return "10%";
    if (quantidadeLivros >= 2) return "5%";
    return "0%";
}

// Função para inicializar o configurador
function inicializarConfigurador() {
    const formatoRadios = document.querySelectorAll('input[name="formato"]');
    const livrosGrid = document.getElementById('livros-grid');
    const livrosSelection = document.querySelector('.livros-selection');
    const configuradorEscolhas = document.querySelector('.configurador-escolhas');
    
    // Reset das variáveis
    formatoSelecionado = '';
    livrosSelecionados = [];
    
    // Esconder seção de livros inicialmente
    if (livrosSelection) {
        livrosSelection.style.display = 'none';
    }
    
    // Adicionar placeholder visual
    const placeholder = document.createElement('div');
    placeholder.className = 'formato-placeholder';
    placeholder.id = 'formato-placeholder';
    placeholder.innerHTML = `
        <div style="text-align: center; padding: 30px 20px;">
            <i class="fas fa-arrow-up" style="font-size: 2rem; color: #10b981; margin-bottom: 15px;"></i>
            <h4 style="color: #374151; margin-bottom: 10px;">Primeiro, escolha o formato</h4>
            <p style="color: #6b7280; font-size: 0.9rem;">Selecione se deseja <strong>E-books Digitais</strong> ou <strong>Livros Físicos</strong> para ver os títulos disponíveis</p>
        </div>
    `;
    if (configuradorEscolhas && !document.getElementById('formato-placeholder')) {
        configuradorEscolhas.appendChild(placeholder);
    }
    
    // Desmarcar todos os radios inicialmente
    formatoRadios.forEach(radio => {
        radio.checked = false;
    });
    
    // Event listeners para mudança de formato
    formatoRadios.forEach(radio => {
        radio.addEventListener('change', function() {
            formatoSelecionado = this.value;
            
            // Remover placeholder
            const placeholderEl = document.getElementById('formato-placeholder');
            if (placeholderEl) {
                placeholderEl.remove();
            }
            
            // Mostrar seção de livros quando formato for selecionado
            if (livrosSelection) {
                livrosSelection.style.display = 'block';
            }
            
            atualizarGridLivros();
            atualizarResumo();
        });
    });
    
    // Não inicializar grid de livros automaticamente
    atualizarResumo();
}

// Função para atualizar o grid de livros
function atualizarGridLivros() {
    const livrosGrid = document.getElementById('livros-grid');
    if (!livrosGrid) return;
    
    livrosGrid.innerHTML = '';
    
    Object.entries(livrosDisponiveis).forEach(([id, livro]) => {
        if (!livro) {
            console.error('Livro não encontrado na geração:', id);
            return;
        }
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
    
    if (!resumoItens || !subtotalValor || !descontoValor || !totalFinal || !btnSolicitar) return;
    
    // Se nenhum formato foi selecionado
    if (!formatoSelecionado) {
        resumoItens.innerHTML = '<p class="nenhum-item">Selecione um formato primeiro</p>';
        subtotalValor.textContent = 'R$ 0,00';
        descontoValor.textContent = '- R$ 0,00';
        totalFinal.textContent = 'R$ 0,00';
        btnSolicitar.disabled = true;
        return;
    }
    
    if (livrosSelecionados.length === 0) {
        resumoItens.innerHTML = '<p class="nenhum-item">Nenhum livro selecionado</p>';
        subtotalValor.textContent = 'R$ 0,00';
        descontoValor.textContent = '- R$ 0,00';
        totalFinal.textContent = 'R$ 0,00';
        btnSolicitar.disabled = true;
        return;
    }
    
    // Calcular subtotal
    let subtotal = 0;
    const itensHtml = livrosSelecionados.map(livroId => {
        const livro = livrosDisponiveis[livroId];
        if (!livro) {
            console.error('ERRO: Livro não encontrado para ID:', livroId);
            console.log('IDs disponíveis:', Object.keys(livrosDisponiveis));
            return '<div class="item-selecionado"><span class="item-nome">Livro não encontrado</span><span class="item-preco">R$ 0,00</span></div>';
        }
        
        const preco = formatoSelecionado === 'ebook' ? livro.precoEbook : livro.precoFisico;
        subtotal += preco;
        
        return `
            <div class="item-selecionado">
                <span class="item-nome">${livro.nome || 'Nome não definido'}</span>
                <span class="item-preco">R$ ${preco.toFixed(2).replace('.', ',')}</span>
            </div>
        `;
    }).join('');
    
    // Calcular desconto progressivo
    const percentualDesconto = calcularDescontoProgressivo(livrosSelecionados.length);
    const desconto = subtotal * percentualDesconto;
    const total = subtotal - desconto;
    
    // Atualizar DOM
    resumoItens.innerHTML = itensHtml;
    subtotalValor.textContent = `R$ ${subtotal.toFixed(2).replace('.', ',')}`;
    
    // Mostrar desconto com percentual
    const textoDesconto = obterTextoDesconto(livrosSelecionados.length);
    if (percentualDesconto > 0) {
        descontoValor.textContent = `- R$ ${desconto.toFixed(2).replace('.', ',')} (${textoDesconto})`;
    } else {
        descontoValor.textContent = `R$ 0,00 (Desconto a partir de 2 livros)`;
    }
    
    totalFinal.textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
    btnSolicitar.disabled = false;
    
    // Atualizar evento do botão único
    btnSolicitar.onclick = function() {
        enviarPedidoCompletoPersonalizado(subtotal, desconto, total, percentualDesconto);
    };
}

// Função para enviar pedido completo (WhatsApp + Email automático)
function enviarPedidoCompletoPersonalizado(subtotal, desconto, total, percentualDesconto) {
    // Abrir WhatsApp primeiro
    enviarPedidoWhatsApp(subtotal, desconto, total, percentualDesconto);
    
    // Aguardar um breve momento e abrir email automaticamente
    setTimeout(() => {
        enviarPedidoEmail(subtotal, desconto, total, percentualDesconto);
    }, 1000); // 1 segundo de delay para dar tempo do WhatsApp abrir
}

// Função para enviar pedido via WhatsApp
function enviarPedidoWhatsApp(subtotal, desconto, total, percentualDesconto) {
    const tipoLivro = formatoSelecionado === 'ebook' ? 'E-books Digitais' : 'Livros Físicos';
    const livrosTexto = livrosSelecionados.map(livroId => {
        const livro = livrosDisponiveis[livroId];
        if (!livro) {
            console.error('Livro não encontrado para WhatsApp:', livroId);
            return '';
        }
        const preco = formatoSelecionado === 'ebook' ? livro.precoEbook : livro.precoFisico;
        return `📖 ${livro.nome} - R$ ${preco.toFixed(2).replace('.', ',')}`;
    }).filter(item => item !== '').join('\n');
    
    const dataAtual = new Date().toLocaleDateString('pt-BR');
    const horaAtual = new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
    const textoDesconto = obterTextoDesconto(livrosSelecionados.length);
    
    const mensagem = `🌟 *COMBO PERSONALIZADO YORÙBÁ*
━━━━━━━━━━━━━━━━━━━━━━━━━

🕐 *${dataAtual} às ${horaAtual}*

📱 *Formato:* ${tipoLivro}
📚 *Livros Selecionados:*

${livrosTexto}

━━━━━━━━━━━━━━━━━━━━━━━━━
💰 *RESUMO FINANCEIRO:*

💵 Subtotal: R$ ${subtotal.toFixed(2).replace('.', ',')}
🎁 Desconto (${textoDesconto}): -R$ ${desconto.toFixed(2).replace('.', ',')}
✨ *TOTAL FINAL: R$ ${total.toFixed(2).replace('.', ',')}*

━━━━━━━━━━━━━━━━━━━━━━━━━

🙏🏽 Àṣẹ! Gostaria de finalizar este combo personalizado.

Pode me enviar as instruções de pagamento?

Aguardo seu retorno! 🙏🏽

_Enviado via site Yorùbá History Channel_`;
    
    const numeroWhatsApp = '5592991549151';
    const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
    
    window.open(linkWhatsApp, '_blank');
}

// Função para enviar pedido via Email
function enviarPedidoEmail(subtotal, desconto, total, percentualDesconto) {
    const tipoLivro = formatoSelecionado === 'ebook' ? 'E-books Digitais' : 'Livros Físicos';
    const livrosTexto = livrosSelecionados.map(livroId => {
        const livro = livrosDisponiveis[livroId];
        if (!livro) {
            console.error('Livro não encontrado para Email:', livroId);
            return '';
        }
        const preco = formatoSelecionado === 'ebook' ? livro.precoEbook : livro.precoFisico;
        return `• ${livro.nome} - R$ ${preco.toFixed(2).replace('.', ',')}`;
    }).filter(item => item !== '').join('\n');
    
    const dataAtual = new Date().toLocaleDateString('pt-BR');
    const horaAtual = new Date().toLocaleTimeString('pt-BR');
    const textoDesconto = obterTextoDesconto(livrosSelecionados.length);
    
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
Desconto (${textoDesconto}): -R$ ${desconto.toFixed(2).replace('.', ',')}
TOTAL FINAL: R$ ${total.toFixed(2).replace('.', ',')}

═══════════════════════════════════════

🙏 Olá! Gostaria de finalizar este combo personalizado.

Por favor, enviem as instruções de pagamento e entrega.

Aguardo retorno!

Atenciosamente,
[Cliente]`;

    const emailLink = `mailto:yoruba.hc.oficial@gmail.com?subject=${assunto}&body=${encodeURIComponent(corpoEmail)}`;
    
    window.open(emailLink, '_blank');
}

// =========================================
// MODAL PERSONALIZADO - COMBO CONFIGURADOR
// =========================================

// Estado do configurador personalizado
let configuradorPersonalizadoEstado = {
    formato: 'ebook',
    livrosSelecionados: new Set(),
    precos: {
        ebook: {
            'yoruba': 49.99,
            'obi': 39.99,
            'coletanea-orisa': 44.99,
            'ewe': 39.99,
            'ilu': 34.99,
            'odu': 44.99,
            'ebos': 79.99,
            'ounje': 59.99,
            'oruko-nomes': 39.99
        },
        fisico: {
            'yoruba': 99.99,
            'obi': 79.99,
            'coletanea-orisa': 109.99,
            'ewe': 79.99,
            'ilu': 74.99,
            'odu': 94.99,
            'ebos': 129.99,
            'ounje': 109.99,
            'oruko-nomes': 89.99
        }
    }
};

// Função para abrir o modal personalizado
function abrirModalPersonalizado() {
    const modal = document.getElementById('modal-combo-personalizado');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Inicializar o configurador personalizado
        inicializarConfiguradorPersonalizado();
    }
}

// Função para fechar o modal personalizado
function fecharModalPersonalizado() {
    const modal = document.getElementById('modal-combo-personalizado');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
        
        // Resetar estado
        resetarConfiguradorPersonalizado();
    }
}

// Função para resetar o configurador
function resetarConfiguradorPersonalizado() {
    configuradorPersonalizadoEstado.livrosSelecionados.clear();
    configuradorPersonalizadoEstado.formato = 'ebook';
    
    // Limpar grid de livros
    const grid = document.getElementById('livros-personalizado-grid');
    if (grid) {
        grid.innerHTML = '<p style="text-align: center; color: #666; padding: 2rem;">Selecione um formato para ver os livros disponíveis</p>';
    }
    
    // Resetar seleções visuais
    document.querySelectorAll('.formato-card').forEach(card => {
        card.classList.remove('selected');
    });
    
    document.querySelector('.formato-card[data-formato="ebook"]').classList.add('selected');
    document.querySelector('input[name="formato-personalizado"][value="ebook"]').checked = true;
    
    atualizarResumoPersonalizado();
}

// Função para inicializar o configurador personalizado
function inicializarConfiguradorPersonalizado() {
    // Configurar eventos dos cards de formato
    document.querySelectorAll('.formato-card').forEach(card => {
        card.addEventListener('click', () => {
            const formato = card.dataset.formato;
            
            // Remover seleção anterior
            document.querySelectorAll('.formato-card').forEach(c => c.classList.remove('selected'));
            
            // Adicionar seleção atual
            card.classList.add('selected');
            document.querySelector(`input[name="formato-personalizado"][value="${formato}"]`).checked = true;
            
            // Atualizar estado
            configuradorPersonalizadoEstado.formato = formato;
            
            // Gerar grid de livros (só aparece após selecionar formato)
            gerarGridLivrosPersonalizado();
            
            // Atualizar preços dos livros
            atualizarPrecosLivros();
            atualizarResumoPersonalizado();
        });
    });
    
    // Configurar botão de solicitar
    const btnSolicitar = document.getElementById('btn-solicitar-personalizado');
    if (btnSolicitar) {
        btnSolicitar.addEventListener('click', solicitarComboPersonalizadoCompleto);
    }
    
    // Configurar validação dos campos de cliente
    configurarValidacaoCliente();
    
    // Configurar eventos de fechar
    const btnFechar = document.getElementById('modal-personalizado-close');
    const overlay = document.getElementById('modal-personalizado-overlay');
    
    if (btnFechar) {
        btnFechar.addEventListener('click', fecharModalPersonalizado);
    }
    
    if (overlay) {
        overlay.addEventListener('click', fecharModalPersonalizado);
    }
    
    // Inicializar grid vazio
    const grid = document.getElementById('livros-personalizado-grid');
    if (grid) {
        grid.innerHTML = '<p style="text-align: center; color: #666; padding: 2rem;">Selecione um formato para ver os livros disponíveis</p>';
    }
}

// Função para gerar o grid de livros
function gerarGridLivrosPersonalizado() {
    const grid = document.getElementById('livros-personalizado-grid');
    if (!grid) return;
    
    // Usar todos os livros do objeto livrosDisponiveis
    const livros = Object.keys(livrosDisponiveis).map(id => ({
        id: id,
        titulo: livrosDisponiveis[id].nome,
        imagem: livrosDisponiveis[id].imagem
    }));
    
    grid.innerHTML = livros.map(livro => `
        <div class="livro-personalizado-card" data-livro="${livro.id}">
            <img src="${livro.imagem}" alt="${livro.titulo}" loading="lazy">
            <h4>${livro.titulo}</h4>
            <div class="preco">R$ ${configuradorPersonalizadoEstado.precos[configuradorPersonalizadoEstado.formato][livro.id].toFixed(2).replace('.', ',')}</div>
            <div class="checkbox-overlay"></div>
        </div>
    `).join('');
    
    // Adicionar eventos de clique
    grid.querySelectorAll('.livro-personalizado-card').forEach(card => {
        card.addEventListener('click', () => {
            const livroId = card.dataset.livro;
            
            if (configuradorPersonalizadoEstado.livrosSelecionados.has(livroId)) {
                configuradorPersonalizadoEstado.livrosSelecionados.delete(livroId);
                card.classList.remove('selected');
            } else {
                configuradorPersonalizadoEstado.livrosSelecionados.add(livroId);
                card.classList.add('selected');
            }
            
            atualizarResumoPersonalizado();
        });
    });
}

// Função para atualizar preços dos livros no grid
function atualizarPrecosLivros() {
    const cards = document.querySelectorAll('.livro-personalizado-card');
    cards.forEach(card => {
        const livroId = card.dataset.livro;
        const precoElement = card.querySelector('.preco');
        const novoPreco = configuradorPersonalizadoEstado.precos[configuradorPersonalizadoEstado.formato][livroId];
        precoElement.textContent = `R$ ${novoPreco.toFixed(2).replace('.', ',')}`;
    });
}

// Função para atualizar o resumo
function atualizarResumoPersonalizado() {
    const quantidade = configuradorPersonalizadoEstado.livrosSelecionados.size;
    const formato = configuradorPersonalizadoEstado.formato;
    
    // Atualizar lista de itens
    const container = document.getElementById('itens-personalizado-selecionados');
    const nenhumItem = container.querySelector('.nenhum-item-personalizado');
    
    if (quantidade === 0) {
        if (nenhumItem) {
            nenhumItem.style.display = 'block';
        }
        container.querySelectorAll('.item-resumo').forEach(item => item.remove());
    } else {
        if (nenhumItem) {
            nenhumItem.style.display = 'none';
        }
        
        // Limpar itens anteriores
        container.querySelectorAll('.item-resumo').forEach(item => item.remove());
        
        // Adicionar itens selecionados
        configuradorPersonalizadoEstado.livrosSelecionados.forEach(livroId => {
            const preco = configuradorPersonalizadoEstado.precos[formato][livroId];
            const livro = livrosDisponiveis[livroId];
            const nomeLivro = livro ? livro.nome : 'Livro não encontrado';
            
            const itemHtml = `
                <div class="item-resumo">
                    <span class="item-nome">${nomeLivro}</span>
                    <span class="item-preco">R$ ${preco.toFixed(2).replace('.', ',')}</span>
                </div>
            `;
            container.insertAdjacentHTML('beforeend', itemHtml);
        });
    }
    
    // Calcular valores
    let subtotal = 0;
    configuradorPersonalizadoEstado.livrosSelecionados.forEach(livroId => {
        subtotal += configuradorPersonalizadoEstado.precos[formato][livroId];
    });
    
    const desconto = calcularDescontoProgressivo(quantidade);
    const valorDesconto = subtotal * desconto;
    const total = subtotal - valorDesconto;
    
    // Atualizar valores na interface
    document.getElementById('quantidade-personalizado').textContent = `${quantidade} ${quantidade === 1 ? 'livro' : 'livros'}`;
    document.getElementById('subtotal-personalizado').textContent = `R$ ${subtotal.toFixed(2).replace('.', ',')}`;
    
    const linhaDesconto = document.getElementById('desconto-linha-personalizado');
    if (desconto > 0) {
        linhaDesconto.style.display = 'flex';
        document.getElementById('desconto-percentual-personalizado').textContent = `(${Math.round(desconto * 100)}%)`;
        document.getElementById('desconto-personalizado').textContent = `-R$ ${valorDesconto.toFixed(2).replace('.', ',')}`;
    } else {
        linhaDesconto.style.display = 'none';
    }
    
    document.getElementById('total-personalizado').textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
    
    // Habilitar/desabilitar botão - agora inclui validação dos dados do cliente
    verificarHabilitacaoBotao();
}

// Função para configurar validação dos campos de cliente
function configurarValidacaoCliente() {
    const whatsappInput = document.getElementById('whatsapp-personalizado');
    const emailInput = document.getElementById('email-personalizado');
    
    if (whatsappInput) {
        // Máscara para WhatsApp
        whatsappInput.addEventListener('input', function(e) {
            let valor = e.target.value.replace(/\D/g, '');
            
            // Aplicar máscara (11) 99999-9999
            if (valor.length <= 11) {
                valor = valor.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
                valor = valor.replace(/^(\d{2})(\d{1,5})$/, '($1) $2');
                valor = valor.replace(/^(\d{2})$/, '($1');
            }
            
            e.target.value = valor;
            validarWhatsApp();
            verificarHabilitacaoBotao();
        });
        
        whatsappInput.addEventListener('blur', validarWhatsApp);
    }
    
    if (emailInput) {
        emailInput.addEventListener('input', function() {
            validarEmail();
            verificarHabilitacaoBotao();
        });
        
        emailInput.addEventListener('blur', validarEmail);
    }
}

// Função para validar WhatsApp
function validarWhatsApp() {
    const input = document.getElementById('whatsapp-personalizado');
    const erro = document.getElementById('whatsapp-erro');
    
    if (!input || !erro) return false;
    
    const valor = input.value.replace(/\D/g, '');
    
    if (valor.length === 0) {
        input.className = '';
        erro.textContent = '';
        return false;
    }
    
    if (valor.length === 11 && (valor.startsWith('11') || valor.startsWith('12') || valor.startsWith('13') || valor.startsWith('14') || valor.startsWith('15') || valor.startsWith('16') || valor.startsWith('17') || valor.startsWith('18') || valor.startsWith('19') || valor.startsWith('21') || valor.startsWith('22') || valor.startsWith('24') || valor.startsWith('27') || valor.startsWith('28') || valor.startsWith('31') || valor.startsWith('32') || valor.startsWith('33') || valor.startsWith('34') || valor.startsWith('35') || valor.startsWith('37') || valor.startsWith('38') || valor.startsWith('41') || valor.startsWith('42') || valor.startsWith('43') || valor.startsWith('44') || valor.startsWith('45') || valor.startsWith('46') || valor.startsWith('47') || valor.startsWith('48') || valor.startsWith('49') || valor.startsWith('51') || valor.startsWith('53') || valor.startsWith('54') || valor.startsWith('55') || valor.startsWith('61') || valor.startsWith('62') || valor.startsWith('63') || valor.startsWith('64') || valor.startsWith('65') || valor.startsWith('66') || valor.startsWith('67') || valor.startsWith('68') || valor.startsWith('69') || valor.startsWith('71') || valor.startsWith('73') || valor.startsWith('74') || valor.startsWith('75') || valor.startsWith('77') || valor.startsWith('79') || valor.startsWith('81') || valor.startsWith('82') || valor.startsWith('83') || valor.startsWith('84') || valor.startsWith('85') || valor.startsWith('86') || valor.startsWith('87') || valor.startsWith('88') || valor.startsWith('89') || valor.startsWith('91') || valor.startsWith('92') || valor.startsWith('93') || valor.startsWith('94') || valor.startsWith('95') || valor.startsWith('96') || valor.startsWith('97') || valor.startsWith('98') || valor.startsWith('99'))) {
        input.className = 'valido';
        erro.textContent = '';
        return true;
    } else {
        input.className = 'invalido';
        erro.textContent = 'Digite um WhatsApp válido com DDD';
        return false;
    }
}

// Função para validar Email
function validarEmail() {
    const input = document.getElementById('email-personalizado');
    const erro = document.getElementById('email-erro');
    
    if (!input || !erro) return false;
    
    const valor = input.value.trim();
    
    if (valor.length === 0) {
        input.className = '';
        erro.textContent = '';
        return false;
    }
    
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (regexEmail.test(valor)) {
        input.className = 'valido';
        erro.textContent = '';
        return true;
    } else {
        input.className = 'invalido';
        erro.textContent = 'Digite um email válido';
        return false;
    }
}

// Função para verificar se pode habilitar o botão
function verificarHabilitacaoBotao() {
    const btnSolicitar = document.getElementById('btn-solicitar-personalizado');
    if (!btnSolicitar) return;
    
    const quantidade = configuradorPersonalizadoEstado.livrosSelecionados.size;
    const whatsappValido = validarWhatsApp();
    const emailValido = validarEmail();
    
    // Botão habilitado apenas se: tem livros selecionados + WhatsApp válido + Email válido
    btnSolicitar.disabled = !(quantidade > 0 && whatsappValido && emailValido);
}

// Função para solicitar combo personalizado (WhatsApp + Email automático)
function solicitarComboPersonalizadoCompleto() {
    const quantidade = configuradorPersonalizadoEstado.livrosSelecionados.size;
    if (quantidade === 0) return;
    
    // Obter dados do cliente
    const whatsappCliente = document.getElementById('whatsapp-personalizado').value;
    const emailCliente = document.getElementById('email-personalizado').value;
    
    // Validar dados antes de prosseguir
    if (!validarWhatsApp() || !validarEmail()) {
        mostrarNotificacao('⚠️ Por favor, corrija os dados antes de continuar.', 'warning');
        return;
    }
    
    const formato = configuradorPersonalizadoEstado.formato;
    const formatoTexto = formato === 'ebook' ? 'E-books Digitais' : 'Livros Físicos';
    
    // Calcular valores
    let subtotal = 0;
    configuradorPersonalizadoEstado.livrosSelecionados.forEach(livroId => {
        subtotal += configuradorPersonalizadoEstado.precos[formato][livroId];
    });
    
    const desconto = calcularDescontoProgressivo(quantidade);
    const valorDesconto = subtotal * desconto;
    const total = subtotal - valorDesconto;
    const percentualDesconto = Math.round(desconto * 100);
    
    // Gerar lista de livros usando livrosDisponiveis
    let listaLivros = '';
    let listaLivrosEmail = '';
    configuradorPersonalizadoEstado.livrosSelecionados.forEach(livroId => {
        const preco = configuradorPersonalizadoEstado.precos[formato][livroId];
        const livro = livrosDisponiveis[livroId];
        const nomeLivro = livro ? livro.nome : 'Livro não encontrado';
        listaLivros += `• ${nomeLivro} - R$ ${preco.toFixed(2).replace('.', ',')}\n`;
        listaLivrosEmail += `• ${nomeLivro} - R$ ${preco.toFixed(2).replace('.', ',')}\n`;
    });
    
    // 1. ENVIAR PARA WHATSAPP
    const mensagem = `🌟 *COMBO PERSONALIZADO YORÙBÁ*

� *DADOS DO CLIENTE:*
📱 WhatsApp: ${whatsappCliente}
📧 Email: ${emailCliente}

�📖 *Formato:* ${formatoTexto}
📚 *Quantidade:* ${quantidade} ${quantidade === 1 ? 'livro' : 'livros'}

*📋 LIVROS SELECIONADOS:*
${listaLivros}
💰 *Subtotal:* R$ ${subtotal.toFixed(2).replace('.', ',')}
${desconto > 0 ? `🎯 *Desconto (${percentualDesconto}%):* -R$ ${valorDesconto.toFixed(2).replace('.', ',')}\n` : ''}✨ *TOTAL FINAL:* R$ ${total.toFixed(2).replace('.', ',')}

🙏🏽 Àṣẹ! Gostaria de finalizar este combo personalizado.`;

    const whatsappLink = `https://wa.me/5592991549151?text=${encodeURIComponent(mensagem)}`;
    window.open(whatsappLink, '_blank');
    
    // 2. ENVIAR EMAIL AUTOMÁTICO
    enviarEmailAutomatico(formatoTexto, quantidade, listaLivrosEmail, subtotal, percentualDesconto, valorDesconto, total, desconto, whatsappCliente, emailCliente);
}

// Função para envio automático de email usando EmailJS
function enviarEmailAutomatico(formatoTexto, quantidade, listaLivros, subtotal, percentualDesconto, valorDesconto, total, desconto, whatsappCliente, emailCliente) {
    // Data e hora atual
    const agora = new Date();
    const dataAtual = agora.toLocaleDateString('pt-BR');
    const horaAtual = agora.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
    
    // Parâmetros para o template do EmailJS
    const templateParams = {
        to_email: 'yoruba.hc.oficial@gmail.com',
        from_name: `Cliente: ${emailCliente}`,
        subject: `Solicitação de Combo Personalizado - ${dataAtual}`,
        whatsapp_cliente: whatsappCliente,
        email_cliente: emailCliente,
        data_pedido: dataAtual,
        hora_pedido: horaAtual,
        formato_livros: formatoTexto,
        quantidade_livros: `${quantidade} ${quantidade === 1 ? 'livro' : 'livros'}`,
        lista_livros: listaLivros,
        subtotal: `R$ ${subtotal.toFixed(2).replace('.', ',')}`,
        desconto_percentual: percentualDesconto > 0 ? `${percentualDesconto}%` : 'Sem desconto',
        valor_desconto: desconto > 0 ? `R$ ${valorDesconto.toFixed(2).replace('.', ',')}` : 'R$ 0,00',
        total_final: `R$ ${total.toFixed(2).replace('.', ',')}`,
        mensagem_cliente: 'Olá! Gostaria de finalizar este combo personalizado. Por favor, enviem as instruções de pagamento e entrega. Aguardo retorno!'
    };
    
    // Verificar se EmailJS está configurado e disponível
    if (typeof emailjs !== 'undefined' && typeof EMAIL_CONFIG !== 'undefined' && EMAIL_CONFIG.USER_ID !== 'YOUR_USER_ID') {
        // Enviar email usando as configurações
        emailjs.send(EMAIL_CONFIG.SERVICE_ID, EMAIL_CONFIG.TEMPLATE_ID, templateParams)
            .then(function(response) {
                console.log('Email enviado com sucesso!', response.status, response.text);
                mostrarNotificacao('✅ Solicitação enviada com sucesso para WhatsApp e Email!', 'success');
            }, function(error) {
                console.error('Erro ao enviar email:', error);
                mostrarNotificacao('✅ WhatsApp enviado! ⚠️ Email automático com problema.', 'warning');
            });
    } else {
        console.warn('EmailJS não está configurado. Apenas WhatsApp foi enviado.');
        mostrarNotificacao('✅ WhatsApp enviado! ⚠️ Configure EmailJS para envio automático.', 'warning');
    }
}

// Função para mostrar notificações (opcional)
function mostrarNotificacao(mensagem, tipo = 'info') {
    // Criar elemento de notificação
    const notificacao = document.createElement('div');
    notificacao.className = `notificacao notificacao-${tipo}`;
    notificacao.textContent = mensagem;
    notificacao.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${tipo === 'success' ? '#10b981' : tipo === 'error' ? '#ef4444' : '#f59e0b'};
        color: white;
        padding: 12px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 10000;
        font-weight: 600;
        max-width: 300px;
        animation: slideIn 0.3s ease;
    `;
    
    // Adicionar CSS da animação se não existir
    if (!document.querySelector('#notificacao-styles')) {
        const style = document.createElement('style');
        style.id = 'notificacao-styles';
        style.textContent = `
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            @keyframes slideOut {
                from { transform: translateX(0); opacity: 1; }
                to { transform: translateX(100%); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(notificacao);
    
    // Remover após 5 segundos
    setTimeout(() => {
        notificacao.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            if (notificacao.parentNode) {
                notificacao.parentNode.removeChild(notificacao);
            }
        }, 300);
    }, 5000);
}

// Inicializar quando o documento carregar
document.addEventListener('DOMContentLoaded', function() {
    // Aguardar um pouco para garantir que todos os elementos estejam prontos
    setTimeout(() => {
        if (document.getElementById('modal-combo-personalizado')) {
            inicializarConfiguradorPersonalizado();
        }
    }, 100);
});
