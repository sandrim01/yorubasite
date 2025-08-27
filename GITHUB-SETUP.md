# 🔧 Configuração GitHub - Yoruba Site

## 📋 Informações do Repositório

**Repositório:** https://github.com/sandrim01/yorubasite  
**Owner:** sandrim01  
**Branch Principal:** main  
**Tipo:** Repositório público para site de venda de livros

---

## ⚙️ Comandos Git Essenciais

### 🚀 Comandos de Push (Enviar alterações)

```bash
# Adicionar todos os arquivos modificados
git add .

# Fazer commit com mensagem descritiva
git commit -m "Descrição das alterações"

# Enviar para o repositório remoto
git push origin main
```

### 📥 Comandos de Pull (Receber alterações)

```bash
# Receber últimas alterações do repositório
git pull origin main
```

### 🔄 Workflow Completo

```bash
# 1. Verificar status dos arquivos
git status

# 2. Adicionar arquivos específicos ou todos
git add index.html vitrine-styles-new.css vitrine-script-new.js
# OU adicionar todos:
git add .

# 3. Fazer commit
git commit -m "Atualização: [descrever o que foi alterado]"

# 4. Enviar para GitHub
git push origin main
```

---

## 🌐 URLs Importantes

- **Repositório:** https://github.com/sandrim01/yorubasite
- **GitHub Pages:** https://sandrim01.github.io/yorubasite (se configurado)
- **Issues:** https://github.com/sandrim01/yorubasite/issues
- **Pull Requests:** https://github.com/sandrim01/yorubasite/pulls

---

## 📂 Estrutura de Commits Recomendada

### 🏷️ Prefixos para Commits

- `feat:` - Nova funcionalidade
- `fix:` - Correção de bug
- `style:` - Alterações de estilo/CSS
- `refactor:` - Refatoração de código
- `docs:` - Alterações em documentação
- `update:` - Atualizações gerais

### ✨ Exemplos de Commits

```bash
git commit -m "feat: adicionar modal de produtos"
git commit -m "fix: corrigir responsividade em mobile"
git commit -m "style: atualizar cores do header"
git commit -m "update: preços dos livros atualizados"
git commit -m "docs: atualizar README com novas funcionalidades"
```

---

## 🔐 Configuração Inicial (Se necessário)

### 👤 Configurar usuário Git

```bash
git config --global user.name "sandrim01"
git config --global user.email "seu-email@exemplo.com"
```

### 🔗 Conectar repositório local ao remoto

```bash
# Se ainda não estiver conectado
git remote add origin https://github.com/sandrim01/yorubasite.git

# Verificar conexão
git remote -v
```

---

## 📋 Checklist Antes do Push

- [ ] Testar o site localmente
- [ ] Verificar se todos os links funcionam
- [ ] Confirmar que as imagens carregam
- [ ] Revisar responsividade
- [ ] Verificar erros no console do navegador
- [ ] Escrever commit descritivo
- [ ] Fazer backup se necessário

---

## 🚨 Comandos de Emergência

### ↩️ Desfazer último commit (mas manter alterações)

```bash
git reset --soft HEAD~1
```

### 🔄 Desfazer alterações em arquivo específico

```bash
git checkout -- nome-do-arquivo.html
```

### 📋 Ver histórico de commits

```bash
git log --oneline
```

### 🔍 Ver diferenças antes do commit

```bash
git diff
```

---

## 📱 Deploy Automático (GitHub Pages)

1. Vá em **Settings** do repositório
2. Role até **Pages** no menu lateral
3. Em **Source**, selecione **Deploy from a branch**
4. Escolha **main** branch
5. Clique em **Save**

O site ficará disponível em: `https://sandrim01.github.io/yorubasite`

---

## 📞 Suporte

Para dúvidas sobre Git/GitHub:
- [Documentação oficial do Git](https://git-scm.com/docs)
- [GitHub Docs](https://docs.github.com)
- [Tutorial interativo Git](https://learngitbranching.js.org/)

---

*Documento criado em: 27 de agosto de 2025*  
*Repositório: https://github.com/sandrim01/yorubasite*
