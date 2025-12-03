# 🍎 Loja Web - Carrinho de Compras

![Status do Projeto](https://img.shields.io/badge/Status-Finalizado-brightgreen)
![Licença](https://img.shields.io/badge/license-MIT-blue)

Este é um projeto de desenvolvimento Front-End que simula a interface de uma loja virtual (focada em produtos Apple), permitindo ao usuário interagir com um carrinho de compras dinâmico.

O objetivo principal foi praticar a integração da **tríade do desenvolvimento web**: Estrutura (HTML), Estilo (CSS) e Comportamento (JavaScript), além da utilização de frameworks CSS.

## 📱 Demonstração

<p align="center">
  <img src="img/iphone.jpeg" alt="Exemplo do Projeto" width="300">
</p>

## 🚀 Funcionalidades

* **Listagem de Produtos:** Exibição de produtos (iPhone, iMac, MacBook) em formato de tabela.
* **Controle de Quantidade:** Botões interativos (+) e (-) para adicionar ou remover itens do carrinho.
* **Cálculo Dinâmico:**
    * Atualização automática do valor total por item baseada na quantidade.
    * Cálculo automático do **Subtotal** final do carrinho.
* **Design Responsivo:** Utilização do Bootstrap 5 para estilização e responsividade.

## 🛠️ Tecnologias Utilizadas

* **[HTML5](https://developer.mozilla.org/pt-BR/docs/Web/HTML):** Estrutura semântica da página.
* **[CSS3](https://developer.mozilla.org/pt-BR/docs/Web/CSS):** Estilização personalizada (`loja.css`).
* **[JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript):** Lógica de manipulação do DOM e cálculos matemáticos (`loja.js`).
* **[Bootstrap 5](https://getbootstrap.com/):** Framework para layout, tabelas e ícones (Bootstrap Icons).

## 📂 Estrutura do Projeto

A organização das pastas segue o padrão MVC (Model-View-Controller) simplificado para front-end:

```text
/
├── css/
│   ├── bootstrap.css   # Arquivo local do Bootstrap
│   └── loja.css        # Estilos personalizados
├── img/
│   ├── imac.jpg
│   ├── iphone.jpeg
│   └── mecbook.jpg
├── js/
│   └── loja.js         # Lógica do carrinho de compras
├── index.html          # Página principal
└── README.md           # Documentação do projeto
