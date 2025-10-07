# 📚 Landing Page para Venda de Livros Digitais

Esta é uma landing page profissional inspirada no site Yorùbá History Channel para venda de livros digitais e físicos. A página foi criada seguindo as melhores práticas de conversão e experiência do usuário.

## 🚀 Funcionalidades

### ✨ Design e Interface
- **Design responsivo** - Funciona perfeitamente em desktop, tablet e mobile
- **Navegação suave** - Scroll animado entre seções
- **Efeitos visuais** - Animações e transições modernas
- **Cores gradientes** - Visual atrativo e profissional

### 📖 Produtos
- **Múltiplos livros** - Suporte para vários produtos
- **Dois formatos** - E-book e livro físico para cada produto
- **Combo promocional** - Pacote com desconto especial
- **Preços destacados** - Preço original riscado e promocional em destaque

### 🛒 Conversão
- **Botões de compra** - Integração pronta para Hotmart
- **Garantia destacada** - Seção de garantia de 7 dias
- **Seção do autor** - Credibilidade e autoridade
- **Call-to-actions** - Botões estrategicamente posicionados

### 🎯 Funcionalidades Técnicas
- **SEO otimizado** - Meta tags e estrutura semântica
- **Performance** - Carregamento rápido e otimizado
- **Analytics ready** - Preparado para Google Analytics e Facebook Pixel
- **Tracking de eventos** - Rastreamento de cliques nos botões

## 📁 Estrutura do Projeto

```
land hot/
├── index.html          # Página principal
├── styles.css          # Estilos CSS
├── script.js           # JavaScript e interações
└── README.md           # Este arquivo
```

## 🔧 Como Personalizar

### 1. Conteúdo dos Livros

No arquivo `index.html`, procure e edite as seções:

```html
<!-- Livro 1 -->
<div id="livro1" class="livro-card">
    <div class="livro-header">
        <h3 class="livro-title">SEU TÍTULO AQUI</h3>
        <p class="livro-subtitle">Seu subtítulo aqui</p>
    </div>
    <!-- ... -->
</div>
```

### 2. Preços

Altere os preços em cada seção:

```html
<div class="preco">
    <span class="preco-original">De R$ 97,00</span>
    <span class="preco-promocional">Por R$ 47,00</span>
</div>
```

### 3. Links de Compra

Substitua os `#` nos botões pelos links reais da Hotmart:

```html
<button class="btn-comprar" onclick="window.open('SUA_URL_DA_HOTMART', '_blank')">
```

### 4. Informações do Autor

Edite a seção "Sobre":

```html
<div class="autor-info">
    <h3 class="autor-nome">Seu Nome</h3>
    <p class="autor-desc">Sua biografia aqui...</p>
</div>
```

### 5. Imagens

Substitua as URLs de placeholder pelas suas imagens:

```html
<img src="URL_DA_SUA_IMAGEM" alt="Descrição">
```

### 6. Cores e Estilo

No arquivo `styles.css`, procure pelas variáveis de cor:

```css
/* Cores principais */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
color: #059669; /* Verde dos preços */
border-left: 4px solid #667eea; /* Borda dos cards */
```

## 🔗 Integrações Recomendadas

### Hotmart
1. Crie seus produtos na Hotmart
2. Copie os links de checkout
3. Substitua os `#` nos botões pelos links reais

### Google Analytics
Adicione no `<head>` do `index.html`:

```html
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Facebook Pixel
Adicione no `<head>` do `index.html`:

```html
<!-- Facebook Pixel Code -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window,document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', 'YOUR_PIXEL_ID');
fbq('track', 'PageView');
</script>
```

## 📱 Teste em Dispositivos

A página foi desenvolvida com design responsivo. Teste em:

- **Desktop** - Resolução 1920x1080
- **Tablet** - iPad (768px)
- **Mobile** - iPhone (375px)

## 🚀 Deploy

### Opções de Hospedagem Gratuita:

1. **Netlify** (Recomendado)
   - Drag & drop da pasta
   - SSL automático
   - CDN global

2. **Vercel**
   - Integração com GitHub
   - Deploy automático

3. **GitHub Pages**
   - Hospedagem gratuita
   - Domínio .github.io

### Passos para o Deploy:

1. Faça upload dos arquivos para o serviço escolhido
2. Configure o domínio personalizado (opcional)
3. Teste todas as funcionalidades
4. Monitore com analytics

## 📊 Métricas Importantes

Acompanhe estas métricas:

- **Taxa de conversão** - % de visitantes que compram
- **Tempo na página** - Engajamento do usuário
- **Taxa de rejeição** - % que sai sem interagir
- **Cliques nos botões** - Interesse nos produtos

## 🔒 Políticas Necessárias

Não esqueça de criar páginas para:

- **Termos de Uso**
- **Política de Privacidade**
- **Política de Reembolso**
- **Contato/Suporte**

## 🎨 Customizações Avançadas

### Adicionar Mais Livros
Copie a estrutura de um livro existente e altere:
- ID único (`id="livro4"`)
- Conteúdo específico
- Links de compra

### Mudar Layout
- Edite o CSS `grid-template-columns` para alterar disposição
- Ajuste breakpoints responsivos
- Modifique cores e tipografia

### Adicionar Elementos
- Depoimentos de clientes
- Contador de vendas
- Chat ao vivo
- Pop-ups promocionais

## 📞 Suporte

Se precisar de ajuda para personalizar ou implementar funcionalidades adicionais, consulte:

- Documentação da Hotmart
- Guias de CSS Grid e Flexbox
- Tutoriais de JavaScript

---

**🎯 Dica Final:** Sempre teste a página com usuários reais antes de lançar e monitore continuamente as métricas de conversão para otimizar os resultados!
