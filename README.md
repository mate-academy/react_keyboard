# React Keyboard

Projeto desenvolvido em React com foco em class components, estado e ciclo de vida da aplicação.

[DEMO LINK](https://Igor-hrm.github.io/react_keyboard/)

---

## Sobre o projeto

Este projeto foi desenvolvido durante meus estudos em React.
O objetivo foi capturar eventos globais do teclado e exibir na interface qual foi a última tecla pressionada pelo usuário.

A aplicação utiliza class components e métodos do ciclo de vida para gerenciar eventos corretamente.

---

## Tecnologias utilizadas

- React
- TypeScript
- CSS
- Vite

---

## O que foi desenvolvido

- Implementação do componente principal como class component
- Armazenamento da última tecla pressionada no estado
- Exibição de mensagem padrão antes de qualquer interação
- Captura de eventos de teclado (`keyup`)
- Registro do evento no `componentDidMount`
- Remoção do evento no `componentWillUnmount`
- Atualização da interface baseada no estado
- Manutenção da estrutura exigida para testes automatizados
- Deploy da aplicação com GitHub Pages

---

## Aprendizados

Com este projeto, pratiquei:

- Uso de class components no React
- Gerenciamento de estado em classes
- Ciclo de vida dos componentes
- Manipulação de eventos globais
- Escrita de código organizado e previsível

---

## Como rodar o projeto localmente

```bash
git clone https://github.com/Igor-hrm/react_keyboard.git
cd react_keyboard
npm install
npm run dev
```
