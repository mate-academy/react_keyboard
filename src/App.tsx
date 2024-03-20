import React from 'react';

interface State {
  pressedKey: string | null;
}
export class App extends React.Component<{}, State>{
  state = {
    pressedKey: null,
  };

  keyboardListener = (event: KeyboardEvent) => {
    this.setState({pressedKey: event.key});
  };

  componentDidMount() {
    document.addEventListener('keydown', this.keyboardListener)
  };

  componentWillUnmount() {
    document.removeEventListener('keydown', this.keyboardListener)
  };

  render() {
    const { pressedKey } = this.state;
    const text = pressedKey
    ? `The last pressed key is [${pressedKey}]`
    : 'Nothing was pressed yet';
 
    return (
      <div className="App">
        <p className="App__message">{text}</p>
      </div>
    )
  }
}

