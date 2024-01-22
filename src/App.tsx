import React from 'react';

export class App extends React.PureComponent {
  state = {
    lastPressedKey: null,
  };

  componentDidMount(): void {
    document.addEventListener('keyup', (event: KeyboardEvent) => {
      this.setState({ lastPressedKey: event.key });
    });
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', () => null);
  }

  render(): React.ReactNode {
    return (
      <div className="App">
        <p className="App__message">
          {this.state.lastPressedKey
            ? `The last pressed key is [${this.state.lastPressedKey}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
