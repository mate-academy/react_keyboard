import React from 'react';

type State = {
  lastKey: string;
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    lastKey: '',
  };

  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({ lastKey: event.key });
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  render() {
    return (
      <div className="App">
        {this.state.lastKey === '' ? (
          <p className="App__message">Nothing was pressed yet</p>
        ) : (
          <p className="App__message">
            The last pressed key is [{this.state.lastKey}]
          </p>
        )}
      </div>
    );
  }
}
