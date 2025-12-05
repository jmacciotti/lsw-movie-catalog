# Catálogo de Filmes Interativo

## Descrição
Projeto final da disciplina **Linguagem de Script para Web** - Curso de Análise e Desenvolvimento de Sistemas.

Desenvolvimento de um catálogo interativo de filmes que carrega dados de um arquivo JSON e permite pesquisa, filtragem e visualização de detalhes.

## 🚀 Funcionalidades

- ✅ Carregamento dinâmico de dados de arquivo JSON
- ✅ Sistema de busca por título
- ✅ Filtro por gênero
- ✅ Modal com detalhes completos do filme
- ✅ Design responsivo (mobile-first)
- ✅ Páginas: Início, Sobre e Cinema Nacional
- ✅ Publicação no GitHub Pages

## 🛠 Tecnologias Utilizadas

- HTML5 (semântico)
- CSS3 (Grid, Flexbox, variáveis)
- JavaScript ES6+ (módulos, fetch API, DOM manipulation)
- JSON (armazenamento de dados)
- Font Awesome (ícones)

## 📁 Estrutura do Projeto
```catalogo-filmes/
├── index.html # Página principal
├── sobre.html # Página sobre o projeto
├── cinema-nacional.html # Página sobre cinema brasileiro
├── README.md # Documentação
├── css/
│ └── style.css # Estilos principais
├── js/
│ ├── main.js # Ponto de entrada
│ ├── carregarDados.js # Carregamento do JSON
│ ├── filtros.js # Lógica de busca/filtro
│ ├── modal.js # Controle do modal
│ └── utils.js # Funções utilitárias
└── data/
└── filmes.json # Dados do catálogo
```

## 📋 Pré-requisitos

- Navegador moderno (Chrome, Firefox, Edge)
- Servidor web local (para desenvolvimento)
- Git (para controle de versão)

## 🔧 Instalação e Execução

### 1. Clone o repositório
```bash
git clone https://github.com/seu-usuario/catalogo-filmes.git
cd catalogo-filmes
