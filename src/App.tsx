import React from 'react';

type State = {
  key: string;
};

export class App extends React.Component<State> {
  state: Readonly<State> = {
    key: '',
  };

  handleKeyPress = (event: KeyboardEvent): void => {
    this.setState({ key: event.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', (event: KeyboardEvent) => {
      this.setState({ key: event.key });
    });
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyPress);
  }

  render() {
    return (
      <div className="App">
        {this.state.key === '' ? (
          <p className="App__message">Nothing was pressed yet</p>
        ) : (
          <p className="App__message">
            The last pressed key is [{this.state.key}]
          </p>
        )}
      </div>
    );
  }
}
