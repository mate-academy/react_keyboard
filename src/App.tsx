import React from 'react';

type State = {
  key: string;
  pressedKey: boolean;
};

export class App extends React.Component<{}, State> {
  state: State = {
    key: '',
    pressedKey: false,
  };

  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({
      key: event.key,
      pressedKey: true,
    });
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  render() {
    const { key, pressedKey } = this.state;

    return (
      <div className="App">
        {pressedKey ? (
          <p className="App__message">The last pressed key is [{key}]</p>
        ) : (
          <p className="App__message">Nothing was pressed yet</p>
        )}
      </div>
    );
  }
}
