import React from 'react';

interface AppState {
  symbol: string | null;
}

export class App extends React.Component<{}, AppState> {
  state: AppState = {
    symbol: null,
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyPress);
  }

  handleKeyPress = (event: KeyboardEvent) => {
    this.setState({ symbol: event.key });
  };

  render() {
    const { symbol } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {symbol === null
            ? 'Nothing was pressed yet'
            : `The last pressed key is [${symbol}]`}
        </p>
      </div>
    );
  }
}
