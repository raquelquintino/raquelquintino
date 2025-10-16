# Site Raquel Quintino - Vidas em Movimento

Site profissional de **Raquel Quintino**, educadora, comunicadora e produtora cultural que atua na interface entre educação, cultura e comunicação.

## 🌐 Sobre o Site

O site apresenta o trabalho de Raquel Quintino em:
- **Assessoria** em educação, cultura e comunicação
- **Oficinas** práticas e vivenciais
- **Palestras** inspiradoras
- **Formações** continuadas
- **Metodologias Participativas**

## 🎨 Identidade Visual

### Paleta de Cores
- **Areia/Marrom Claro**: `#B98D6D`
- **Vinho Escuro**: `#7D244F`
- **Coral Avermelhado**: `#C94B4B`
- **Amarelo Claro**: `#F5CF53`
- **Branco**: `#FFFFFF`

### Tipografia
- **"Raquel Quintino"**: Dancing Script (cursiva), branca
- **"Vidas em movimento"**: Libre Baskerville (cursiva romana), vinho
- **Títulos e botões**: Righteous (similar a Gagalin), branco em fundo colorido
- **Corpo de texto**: Open Sans

## 📁 Estrutura do Projeto

```
raquelquintino-site/
├── index.html              # Página principal
├── assets/
│   ├── css/
│   │   └── style.css      # Estilos do site
│   ├── js/
│   │   └── script.js      # Scripts de interatividade
│   └── img/               # Imagens (24 SVGs)
│       ├── 1.svg
│       ├── 2.svg
│       └── ...
├── pages/                 # Páginas adicionais (futuro)
└── README.md             # Este arquivo
```

## 🚀 Como Hospedar no GitHub Pages

### Passo 1: Criar Repositório no GitHub

1. Acesse [GitHub](https://github.com) e faça login
2. Crie um novo repositório com o nome: `raquelquintino.github.io`
   - **Importante**: O nome deve ser exatamente `seu-usuario.github.io`
3. Deixe o repositório como **público**
4. Não inicialize com README (já temos um)

### Passo 2: Fazer Upload dos Arquivos

**Opção A: Via Interface Web do GitHub**
1. No repositório criado, clique em "uploading an existing file"
2. Arraste todos os arquivos e pastas do projeto
3. Faça commit das mudanças

**Opção B: Via Git (Linha de Comando)**
```bash
# No diretório do projeto
git init
git add .
git commit -m "Initial commit - Site Raquel Quintino"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/raquelquintino.github.io.git
git push -u origin main
```

### Passo 3: Configurar GitHub Pages

1. Vá em **Settings** do repositório
2. No menu lateral, clique em **Pages**
3. Em **Source**, selecione:
   - Branch: `main`
   - Folder: `/ (root)`
4. Clique em **Save**

O site estará disponível em: `https://seu-usuario.github.io`

### Passo 4: Configurar Domínio Personalizado (raquelquintino.com.br)

1. No painel do GitHub Pages (Settings > Pages)
2. Em **Custom domain**, digite: `www.raquelquintino.com.br`
3. Clique em **Save**

4. No seu provedor de domínio (Registro.br ou outro):
   - Adicione um registro **CNAME**:
     - Nome: `www`
     - Valor: `seu-usuario.github.io`
   - Adicione registros **A** para o domínio raiz:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`

5. Aguarde a propagação DNS (pode levar até 24-48 horas)

6. Após propagação, marque a opção **Enforce HTTPS** no GitHub Pages

## 📱 Recursos do Site

- ✅ **Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- ✅ **Acessível**: Seguindo boas práticas de acessibilidade web
- ✅ **SEO Otimizado**: Meta tags e estrutura semântica
- ✅ **Performance**: Carregamento rápido e otimizado
- ✅ **Animações**: Transições suaves e efeitos visuais elegantes
- ✅ **Navegação Intuitiva**: Menu fixo e links de ancoragem

## 🔗 Links e Contatos

- **LinkedIn**: [linkedin.com/in/raquelquintino](https://www.linkedin.com/in/raquelquintino)
- **WhatsApp**: +55 11 99740-1781
- **E-mail**: raquel.quintino@gmail.com

## 📄 Licença

Este trabalho está licenciado sob [Creative Commons BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)

---

**Desenvolvido com ❤️ para Raquel Quintino - Vidas em Movimento**

