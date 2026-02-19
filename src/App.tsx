// Importa o React, que é necessário para criar componentes baseados em classes
import React from 'react';
// Define um tipo chamado "State" para o estado do componente App.
// Aqui, o estado possui uma propriedade "pressedKey" que é uma string.
// Esse tipo nos ajuda a garantir que o estado tenha sempre o formato definido.
type State = {
  pressedKey: string;
};
// Declara o componente App que herda de React.Component
// O componente não espera receber nenhuma propriedade (por isso usamos "{}")
// e utiliza o tipo "State" para o seu estado interno.
export class App extends React.Component<{}, State> {
  // Inicializa o estado do componente com a chave "pressedKey" vazia.
  state: State = {
    pressedKey: '',
  };

  // Define o método "handleKeyUp" como uma função de seta.
  // Esse método será chamado sempre que uma tecla for liberada (keyup) no documento.
  // O parâmetro "event" é do tipo KeyboardEvent, que contém informações sobre o evento do teclado.
  handleKeyUp = (event: KeyboardEvent) => {
    // Atualiza o estado do componente com a tecla que foi pressionada.
    // O "event.key" armazena o valor da tecla liberada.
    this.setState({ pressedKey: event.key });
  };

  // O método "componentDidMount" é chamado automaticamente pelo React
  // assim que o componente é montado (inserido na tela).
  // Aqui adicionamos um "event listener" para o evento "keyup" no document.
  // Isso significa que, quando qualquer tecla for liberada, a função handleKeyUp será executada.
  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  // O método "componentWillUnmount" é chamado automaticamente pelo React
  // antes do componente ser desmontado (removido da tela).
  // Removemos o "event listener" para evitar que o componente continue escutando os eventos do teclado,
  // o que poderia levar a erros ou uso desnecessário de recursos.
  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  // O método "render" define o que será exibido na tela.
  render() {
    // Faz a desestruturação do estado para obter a propriedade "pressedKey".
    const { pressedKey } = this.state;

    // Retorna o JSX que define a estrutura da interface do componente.
    // Aqui temos uma div com a classe "App" que envolve todo o conteúdo.
    return (
      <div className="App">
        {/*
          Exibe um parágrafo (<p>) com a classe "App__message".
          Se existir uma tecla armazenada em "pressedKey", exibe uma mensagem informando qual foi a última tecla pressionada.
          Caso contrário, exibe a mensagem "Nothing was pressed yet".
        */}
        <p className="App__message">
          {pressedKey
            ? `The last pressed key is [${pressedKey}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
