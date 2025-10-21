import React from 'react';
interface State {
  pressedKey: string;
}

export class App extends React.Component {
  state: State = {
    pressedKey: '',
  };

  handleKeyPressed = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyPressed);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyPressed);
  }

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        {pressedKey.length > 0 ? (
          <p className="App__message">The last pressed key is [{pressedKey}]</p>
        ) : (
          <p className="App__message">Nothing was pressed yet</p>
        )}
      </div>
    );
  }
}
