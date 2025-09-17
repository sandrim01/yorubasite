# 📧 Configuração do EmailJS para Envio Automático

## Como Configurar o EmailJS

### 1. Criar Conta no EmailJS
1. Acesse [https://www.emailjs.com/](https://www.emailjs.com/)
2. Crie uma conta gratuita (permite 200 emails/mês)
3. Confirme seu email

### 2. Criar um Service (Serviço de Email)
1. No dashboard, clique em **"Add New Service"**
2. Escolha seu provedor de email:
   - **Gmail** (recomendado)
   - **Outlook/Hotmail**
   - **Yahoo**
   - Ou outro de sua preferência
3. Configure a conexão com sua conta de email
4. Anote o **Service ID** (ex: `service_gmail_123`)

### 3. Criar um Template (Modelo de Email)
1. Clique em **"Create New Template"**
2. Configure o template com o seguinte conteúdo:

**Para o campo "Subject" (Assunto):**
```
{{subject}}
```

**Para o campo "Content" (Corpo do Email):**
```
📚 SOLICITAÇÃO DE COMBO PERSONALIZADO
═══════════════════════════════════════

� DADOS DO CLIENTE:
📱 WhatsApp: {{whatsapp_cliente}}
📧 Email: {{email_cliente}}

�📋 DETALHES DO PEDIDO:
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
```

3. Configure o **"To Email"** como: `yoruba.hc.oficial@gmail.com`
4. Anote o **Template ID** (ex: `template_123abc`)

### 4. Obter Chaves de API
1. Vá em **"Account" > "API Keys"**
2. Anote o **User ID** (ex: `user_abc123xyz`)

### 5. Configurar no Site
1. Abra o arquivo `emailjs-config.js`
2. Substitua os valores:
```javascript
const EMAIL_CONFIG = {
    USER_ID: 'seu_user_id_aqui',
    SERVICE_ID: 'seu_service_id_aqui', 
    TEMPLATE_ID: 'seu_template_id_aqui'
};
```

### 6. Testar
1. Salve as alterações
2. Abra o site
3. Faça um teste do combo personalizado
4. Verifique se o email chegou em `yoruba.hc.oficial@gmail.com`

## ✅ Funcionamento

Quando configurado corretamente, o botão **"Solicitar Combo Personalizado"** irá:

1. **🟢 Abrir WhatsApp** com a mensagem formatada
2. **📧 Enviar email automático** para `yoruba.hc.oficial@gmail.com`
3. **🔔 Mostrar notificação** de sucesso ou erro

## 🚨 Sem Configuração

Se o EmailJS não estiver configurado:
- ✅ WhatsApp funcionará normalmente
- ⚠️ Apenas mostrará aviso sobre email não configurado
- O site continuará funcionando perfeitamente

## 📝 Limite Gratuito

- **EmailJS Gratuito**: 200 emails/mês
- **Plano Pago**: Emails ilimitados a partir de $15/mês

## 🛠️ Solução de Problemas

### Emails não chegam:
1. Verifique se as credenciais estão corretas
2. Confirme se o service está ativo no dashboard
3. Verifique a caixa de spam
4. Teste diretamente no site do EmailJS

### Console mostra erros:
1. Abra F12 > Console para ver erros detalhados
2. Verifique se os IDs estão corretos
3. Confirme se o template tem todos os campos necessários