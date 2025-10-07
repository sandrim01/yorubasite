// Configuração do EmailJS para envio automático de emails
// Substitua os valores abaixo pelos seus dados do EmailJS

const EMAIL_CONFIG = {
    // Credenciais configuradas do EmailJS:
    USER_ID: 'M7ZJEhDExgPGvzky5', // Public Key
    SERVICE_ID: 'service_6mx1t3u', // Service ID
    TEMPLATE_ID: 'template_ubkr9fi', // Template ID
    
    // Template sugerido para o EmailJS:
    /*
    Assunto: {{subject}}
    
    Corpo do Email:
    📚 SOLICITAÇÃO DE COMBO PERSONALIZADO
    ═══════════════════════════════════════
    
    📋 DETALHES DO PEDIDO:
    Data: {{data_pedido}}
    Hora: {{hora_pedido}}
    Tipo: {{formato_livros}}
    Quantidade: {{quantidade_livros}}
    
    📖 LIVROS SELECIONADOS:
    {{lista_livros}}
    
    💰 RESUMO FINANCEIRO:
    Subtotal: {{subtotal}}
    Desconto: {{desconto_percentual}} - {{valor_desconto}}
    TOTAL FINAL: {{total_final}}
    
    ═══════════════════════════════════════
    
    {{mensagem_cliente}}
    
    Atenciosamente,
    Cliente do Site Yorùbá History Channel
    */
};

// Função para inicializar EmailJS
function inicializarEmailJS() {
    if (typeof emailjs !== 'undefined' && EMAIL_CONFIG.USER_ID !== 'YOUR_USER_ID') {
        emailjs.init(EMAIL_CONFIG.USER_ID);
        console.log('EmailJS inicializado com sucesso!');
        return true;
    } else {
        console.warn('EmailJS não configurado. Configure as credenciais em emailjs-config.js');
        return false;
    }
}

// Inicializar quando o script carregar
document.addEventListener('DOMContentLoaded', function() {
    // Aguardar um pouco para garantir que EmailJS seja carregado
    setTimeout(inicializarEmailJS, 500);
});