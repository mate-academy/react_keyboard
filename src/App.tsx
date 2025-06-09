import { Component } from 'react';

// 1. Defina uma interface para o seu estado
interface AppState {
  pressedKey: string;
}

// 2. Passe a interface AppState como o segundo argumento genérico para Component
// O primeiro argumento seria para as props (aqui, vazio, {})
class App extends Component<{}, AppState> {
  // 3. Inicialize o state diretamente, sem precisar repetir a tipagem aqui.
  // O TypeScript já sabe o tipo do 'state' por causa de AppState.
  state: AppState = {
    pressedKey: '',
  };

  componentDidMount() {
    window.addEventListener('keyup', this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.handleKeyPress);
  }

  handleKeyPress = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {this.state.pressedKey
            ? `The last pressed key is [${this.state.pressedKey}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}

export default App;
