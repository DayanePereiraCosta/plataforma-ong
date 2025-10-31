# Plataforma ONG Costurando Sonhos

## 💡 Sobre o Projeto

Este projeto foi desenvolvido como parte da disciplina **Desenvolvimento Front-End para Web**, do curso de **Análise e Desenvolvimento de Sistemas** da **Cruzeiro do Sul Virtual**.  

O objetivo é construir, passo a passo, uma **plataforma web completa para a ONG Costurando Sonhos**, aplicando os conceitos de **HTML, CSS e JavaScript** de forma progressiva, em diferentes etapas de entrega.

A plataforma representa o sonho de tornar a **ONG Costurando Sonhos** uma presença digital real — um espaço que conecta mulheres em situação de vulnerabilidade a oportunidades de capacitação, acolhimento e transformação social.

---

## 🧵 Etapas de Desenvolvimento

### **Etapa 1 — Estrutura em HTML5**
- Criação da base semântica do site utilizando apenas **HTML5 puro**.  
- Implementação de:
  - Cabeçalho, rodapé e navegação principal;  
  - Estrutura das três páginas principais (Home, Projetos e Cadastro);  
  - Uso correto de seções (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`);  
  - Formulário com **validação nativa em HTML**.  
- ✅ **Entrega:** estrutura estática e acessível.

---

### **Etapa 2 — Estilização com CSS3**
- Adição de **design system completo** com variáveis de cor, tipografia e espaçamento.  
- Criação de layout moderno, responsivo e visualmente agradável.  
- Aplicação de:
  - Paleta de cores harmônica inspirada em tons de costura e acolhimento;  
  - Formatação do menu principal e dos cards de projetos;  
  - Estilização completa do formulário de cadastro;  
  - Responsividade para diferentes tamanhos de tela.  
- ✅ **Entrega:** página estilizada e totalmente responsiva.

---
Com certeza! Vamos atualizar o seu README.md com a descrição completa e detalhada de tudo que foi implementado na Etapa 3 (JavaScript), transformando o que era "em desenvolvimento" em entregue.

Aqui está o conteúdo do seu README.md atualizado em Markdown:

Markdown

# 💖 ONG Costurando Sonhos: Plataforma de Recrutamento de Voluntários

Este projeto simula a plataforma institucional e de recrutamento de uma ONG fictícia focada em trabalhos sociais e costura. O objetivo é demonstrar o domínio de front-end, progredindo da estrutura básica (HTML) à estilização avançada (CSS) e, finalmente, à interatividade e arquitetura moderna (JavaScript/SPA).

## 🧵 Etapas de Desenvolvimento

### Etapa 1 — Estrutura em HTML5
Criação da base semântica do site utilizando apenas **HTML5 puro**.
Implementação de:
* Cabeçalho, rodapé e navegação principal;
* Estrutura das três páginas principais (Home, Projetos e Cadastro);
* Uso correto de seções (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`);
* Formulário com validação nativa em HTML.
✅ **Entrega:** estrutura estática e acessível.

### Etapa 2 — Estilização com CSS3
Adição de **design system completo** com variáveis de cor, tipografia e espaçamento.
Criação de layout moderno, responsivo e visualmente agradável.
Aplicação de:
* Paleta de cores harmônica inspirada em tons de costura e acolhimento;
* Formatação do menu principal e dos cards de projetos;
* Estilização completa do formulário de cadastro;
* Responsividade para diferentes tamanhos de tela.
✅ **Entrega:** página estilizada e totalmente responsiva.

### Etapa 3 — Interatividade com JavaScript

Implementação completa de lógica JavaScript para transformar a aplicação estática em uma **Single Page Application (SPA)** interativa e modular, focada em validação de dados e experiência do usuário.

#### Arquitetura e Modularidade
* **Single Page Application (SPA):** Implementação de um sistema de roteamento básico em Vanilla JS (`main.js`) que intercepta cliques de links, carrega o conteúdo das páginas via `fetch`, e atualiza dinamicamente o `<main>` sem recarregar a página.
* **Modularização do Código:** Uso de **ES Modules** (`app.js`, `main.js`, `form.js`) para segregar responsabilidades, com carregamento do script de formulário (`form.js`) de forma condicional e sob demanda, apenas na página de cadastro.
* **Integração de Frameworks (Comprovada):** Inclusão e uso da biblioteca **Alpine.js** para demonstrar a integração de um framework de terceiros e a capacidade de criar componentes reativos e declarativos.

#### Funcionalidades de Formulário (`js/form.js`)
* **Validação de Formulário Personalizada:** Sistema robusto para verificar a consistência dos dados no momento da submissão.
* **Feedback Visual Dinâmico:** Uso da manipulação do DOM (`document.createElement`) para exibir mensagens de erro personalizadas (`<span>` em vermelho) logo abaixo dos campos incorretos.
* **Validações Avançadas Incluídas:**
    * Verificação de **CPF** através de algoritmo de dígitos verificadores.
    * Verificação de **Maioridade** (idade mínima de 18 anos) no campo Data de Nascimento.
    * Verificação de comprimento de Nome, E-mail e Telefone.
* **Integração com API Externa:** Uso da API pública **ViaCEP** (`async/await` e `fetch`) para buscar e preencher automaticamente os campos de endereço (Logradouro, Cidade, UF) a partir do CEP inserido.

✅ **Entrega:** site interativo, modular e funcional, com validação de dados de alto nível.

---

## 🗂 **Estrutura de Pastas**

plataforma-ong/ │ 
├── css/ # Folhas de estilo e variáveis 
│ └── style.css 
├── js/ # Lógica modular da aplicação (SPA, Validação) 
│ ├── app.js 
│ ├── main.js 
│ └── form.js 
├── imagens/ # Pasta com as imagens utilizadas 
├── index.html # Página inicial (Home) 
├── projetos.html # Página de projetos sociais 
├── cadastro.html # Página de cadastro (Formulário) 
└── README.md


---

## 💻 Tecnologias Utilizadas

- **HTML5 semântico**
- **CSS3 com variáveis e responsividade**
- **Boas práticas de design system**
- **Validação nativa de formulários**
- **Estrutura acessível e otimizada**

---

## 🌐 Confira meu site

 [dayanepereiracosta.github.io/plataforma-ong](https://dayanepereiracosta.github.io/plataforma-ong/)

---

## Autoria

**Projeto desenvolvido por:**  
*Dayane Pereira Costa*  
Estudante de **Análise e Desenvolvimento de Sistemas**  
Faculdade **Cruzeiro do Sul Virtual**  
Disciplina: **Desenvolvimento Front-End para Web**

---

## Agradecimento

> “Costurar é unir pedaços — de tecido, de sonhos e de vidas.”  
> Este projeto é uma sementinha do que espero ver florescer no futuro:  
> uma plataforma real para ajudar mulheres a recomeçarem com dignidade e amor.

