import React from 'react';

type State = {
  pressedKey: string;
};
export class App extends React.Component<State> {
  state = {
    pressedKey: '',
  };

  private handleKeyApp = (event: KeyboardEvent): void => {
    this.setState({ pressedKey: event.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyApp);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyApp);
  }

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        {pressedKey ? (
          <p className="App__message">The last pressed key is [{pressedKey}]</p>
        ) : (
          <p className="App__message">Nothing was pressed yet</p>
        )}
      </div>
    );
  }
}
