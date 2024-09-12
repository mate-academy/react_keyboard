import React from 'react';

type State = {
  pressedKey: string;
};

export class App extends React.PureComponent<{}, State> {
  state: State = {
    pressedKey: '',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyPress);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyPress);
  }

  handleKeyPress = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        {pressedKey === '' ? (
          <p>Nothing was pressed yet</p>
        ) : (
          <p>
            The last pressed key is [
            {pressedKey}
            ]
          </p>
        )}
      </div>
    );
  }
}

export default App;
