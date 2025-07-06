# ☕ Coffee++ - Cafés Especiais Premium

![Coffee++ Logo](https://img.shields.io/badge/Coffee++-Premium%20Cafés-8B4513?style=for-the-badge&logo=coffee)

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Funcionalidades](#-funcionalidades)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Design System](#-design-system)
- [Como Executar](#-como-executar)
- [Capturas de Tela](#-capturas-de-tela)
- [Desafios e Soluções](#-desafios-e-soluções)
- [Performance](#-performance)
- [Contribuição](#-contribuição)

---

## 🎯 Sobre o Projeto

O **Coffee++** é um site completo para uma marca fictícia de cafés especiais. O projeto inclui páginas informativas, sistema de produtos, planos de assinatura e formulários interativos.

### Objetivos Alcançados
- ✅ Design responsivo e moderno
- ✅ Animações interativas e envolventes
- ✅ Sistema de filtros para produtos
- ✅ Modais informativos
- ✅ Formulários com validação
- ✅ Mapa interativo integrado
- ✅ Performance otimizada

---

## ✨ Funcionalidades

### 🏠 Página Inicial
- **Hero Section**: Título animado + animação de grãos de café caindo
- **Features**: Cards com ícones e descrições dos diferenciais
- **Produtos em Destaque**: Grid responsivo com produtos selecionados
- **Newsletter**: Formulário de cadastro para ofertas exclusivas

### 🛍️ Catálogo de Produtos
- **Sistema de Filtros**: Por categoria (Arábica, Robusta, Blend)
- **Grid de Produtos**: Cards com imagens reais de café e preços
- **Modal de Detalhes**: Informações completas do produto
- **Seletor de Quantidade**: Controles +/- para adicionar ao carrinho

### 📦 Planos de Assinatura
- **Cards de Planos**: Diferentes níveis de assinatura
- **Destaque**: Plano recomendado com badge especial
- **Lista de Benefícios**: Ícones e descrições detalhadas
- **Call-to-Action**: Botões de assinatura com hover effects

### 📞 Página de Contato
- **Formulário Completo**: Validação em tempo real
- **Informações de Contato**: Ícones e detalhes da empresa
- **Mapa Interativo**: Google Maps integrado com localização
- **Modal de Sucesso**: Confirmação de envio de mensagem

---

## 🛠️ Tecnologias Utilizadas

### Front-End
| Tecnologia | Versão | Propósito |
|------------|--------|-----------|
| HTML5 | 5.0 | Estrutura semântica |
| CSS3 | 3.0 | Estilização e animações |
| JavaScript (ES6+) | ES6+ | Interatividade |
| jQuery | 3.6.0 | Efeitos e compatibilidade |

### Bibliotecas Externas
- **Font Awesome 6.0.0**: Ícones vetoriais
- **Google Fonts (Poppins)**: Tipografia personalizada
- **Google Maps Embed**: Mapa interativo

### Ferramentas de Desenvolvimento
- **Editor**: Visual Studio Code
- **Versionamento**: Git
- **Testes**: Navegadores modernos

---

## 📁 Estrutura do Projeto

```
CoffeePlus/
├── 📄 index.html              # Página inicial
├── 📄 produtos.html           # Catálogo de produtos
├── 📄 planos.html            # Planos de assinatura
├── 📄 contato.html           # Página de contato
├── 📁 images/
│   ├── 🖼️ coffee.jpg         # Imagem de produtos
├── 📁 styles/
│   └── 🎨 main.css           # Estilos principais
├── 📁 scripts/
│   ├── ⚙️ main.js            # Lógica principal
│   ├── ⚙️ produtos.js        # Funcionalidades de produtos
│   ├── ⚙️ planos.js          # Lógica de planos
│   ├── ⚙️ contato.js         # Formulários de contato
│   └── ⚙️ jquery-effects.js  # Efeitos jQuery
└── 📄 README.md              # Documentação
```

---

## 🎨 Design System

### Paleta de Cores
```css
:root {
  --primary-color: #8b4513;    /* Marrom café */
  --secondary-color: #d2691e;  /* Marrom claro */
  --accent-color: #f4a460;     /* Bege */
  --dark-color: #2c1810;       /* Marrom escuro */
  --light-color: #f5f5dc;      /* Bege claro */
  --white: #ffffff;            /* Branco */
  --gray-light: #f8f9fa;       /* Cinza claro */
  --gray-medium: #6c757d;      /* Cinza médio */
  --gray-dark: #343a40;        /* Cinza escuro */
}
```

### Tipografia
- **Família**: Poppins (Google Fonts)
- **Pesos**: 300, 400, 500, 600, 700
- **Hierarquia**: Títulos (2.5rem), Subtítulos (2rem), Corpo (1rem)

### Componentes Visuais
- **Botões**: Bordas arredondadas, hover effects
- **Cards**: Sombras suaves, transições
- **Modais**: Overlay com animações
- **Formulários**: Validação visual

---

## 🚀 Como Executar

### Pré-requisitos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Servidor local (opcional, para melhor experiência)

### Instalação
1. **Clone o repositório**
   ```bash
   git clone https://github.com/seu-usuario/coffee-plus.git
   cd coffee-plus
   ```

2. **Abra o projeto**
   - Abra o arquivo `index.html` em seu navegador
   - Ou use um servidor local:
   ```bash
   # Com Python
   python -m http.server 8000
   
   # Com Node.js
   npx serve .
   
   # Com PHP
   php -S localhost:8000
   ```

3. **Teste as funcionalidades**
   - Navegue entre as páginas
   - Teste os filtros de produtos
   - Interaja com os modais
   - Preencha o formulário de contato
   - Teste a responsividade redimensionando a janela

---

## 📱 Capturas de Tela

### Desktop (1920x1080)
- **Home**: Hero section com animação de grãos de café
![image](https://github.com/user-attachments/assets/aed0bc26-f747-44b6-ad8c-4d3da9f87033)
- **Produtos**: Grid com filtros funcionais
![image](https://github.com/user-attachments/assets/73ae1120-a094-4f60-b2b8-00b2edc2ea7f)
- **Planos**: Cards de assinatura
![image](https://github.com/user-attachments/assets/a9a2df09-e279-403e-9601-b481cd7312e2)
- **Contato**: Formulário + mapa interativo
![image](https://github.com/user-attachments/assets/0d9f4b33-97be-44e9-88ee-21b008303690)
![image](https://github.com/user-attachments/assets/f37928f9-b3f4-4b6a-affb-25a5f6b7ddec)

### Mobile (375x667)
- **Navegação**: Menu hambúrguer
![image](https://github.com/user-attachments/assets/12addabe-dce7-4d3b-9c88-79fcc4f40891)
- **Layout**: Stack vertical otimizado
![image](https://github.com/user-attachments/assets/c1460480-8546-4eea-8dda-69bdbcc5646a)
- **Touch**: Targets de 44px mínimo
![image](https://github.com/user-attachments/assets/ea89f431-6239-44d5-b66b-f36f68404755)
- **Performance**: Carregamento otimizado

---

## 🔧 Desafios e Soluções

### 1. Animação de Grãos de Café
**Desafio**: Criar animação realista de grãos caindo
**Solução**: CSS animations com diferentes delays e velocidades
```css
.coffee-bean {
  animation: fallCoffee 4s linear infinite;
  animation-delay: var(--delay);
}
```

### 2. Sistema de Filtros
**Desafio**: Filtros dinâmicos sem recarregar página
**Solução**: JavaScript para manipulação do DOM
```javascript
function filterProducts(category) {
  const filteredProducts = products.filter(p => p.category === category);
  displayProducts(filteredProducts);
}
```

### 3. Responsividade Completa
**Desafio**: Layout funcionando em todos os dispositivos
**Solução**: Mobile-first com breakpoints estratégicos
```css
@media (max-width: 768px) {
  .hero { flex-direction: column; }
  .products-grid { grid-template-columns: 1fr; }
}
```

### 4. Modais Interativos
**Desafio**: Modais responsivos e acessíveis
**Solução**: CSS Grid + JavaScript para controle
```css
.modal-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}
```

---

## ⚡ Performance

### Métricas de Performance
- **Tempo de Carregamento**: < 3 segundos
- **Tamanho Total**: ~500KB (comprimido)
- **Imagens**: Otimizadas e responsivas
- **CSS**: Minificado e organizado

### Otimizações Implementadas
- **Lazy Loading**: Imagens carregadas sob demanda
- **CSS Eficiente**: Reutilização de classes
- **JavaScript Modular**: Carregamento sob demanda
- **Fontes Web**: Google Fonts com display=swap

### Testes de Compatibilidade
- ✅ Chrome (Desktop/Mobile)
- ✅ Firefox (Desktop/Mobile)
- ✅ Safari (Desktop/Mobile)
- ✅ Edge (Desktop)

---

## 🎯 Aplicação dos Conceitos Estudados

### HTML5 Semântico
- **Estrutura Lógica**: `<header>`, `<main>`, `<section>`, `<footer>`
- **Acessibilidade**: ARIA labels e roles
- **SEO**: Meta tags e structured data

### CSS3 Avançado
- **Flexbox/Grid**: Layouts modernos
- **Animações**: Keyframes e transitions
- **Variáveis CSS**: Sistema de design consistente
- **Media Queries**: Design responsivo

### JavaScript Moderno
- **ES6+**: Arrow functions, destructuring, modules
- **DOM Manipulation**: Event listeners e handlers
- **Async/Await**: Operações assíncronas
- **Local Storage**: Persistência de dados

### UX/UI Design
- **Hierarquia Visual**: Tipografia e espaçamento
- **Feedback Visual**: Hover states e transições
- **Consistência**: Design system aplicado
- **Acessibilidade**: Contraste e navegação

---

## 🤝 Contribuição

1. **Fork o projeto**
2. **Crie uma branch** para sua feature (`git checkout -b feature/AmazingFeature`)
3. **Commit suas mudanças** (`git commit -m 'Add some AmazingFeature'`)
4. **Push para a branch** (`git push origin feature/AmazingFeature`)
5. **Abra um Pull Request**

### Padrões de Código
- Use nomes descritivos para variáveis e funções
- Comente código complexo
- Mantenha a estrutura de arquivos organizada
- Teste em diferentes navegadores

---

## 📞 Contato

- **Projeto**: [Coffee++](https://github.com/seu-usuario/coffee-plus)
- **Email**: contato@coffeeplus.com
- **LinkedIn**: [João Stein](https://www.linkedin.com/in/jo%C3%A3o-stein/)

---

## 🙏 Agradecimentos

- [Font Awesome](https://fontawesome.com/) pelos ícones
- [Google Fonts](https://fonts.google.com/) pela tipografia
- [Google Maps](https://developers.google.com/maps) pelo mapa interativo
- Comunidade de desenvolvedores web por inspiração e recursos
