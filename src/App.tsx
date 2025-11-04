import React from 'react';

interface AppPressedKeyState {
  pressedKey: string | null;
}

export class App extends React.Component<{}, AppPressedKeyState> {
  state: AppPressedKeyState = {
    pressedKey: null,
  };

  // usar um handler de classe com arrow function para preservar `this`
  handleKeyUp = (event: KeyboardEvent) => {
    // event.key é seguro aqui — este é o KeyboardEvent do DOM
    this.setState({ pressedKey: event.key });
  };

  componentDidMount() {
    // registrar listener global para 'keyup'
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount() {
    // remover listener global
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {pressedKey === null
            ? 'Nothing was pressed yet'
            : `The last pressed key is [${pressedKey}]`}
        </p>
      </div>
    );
  }
}
