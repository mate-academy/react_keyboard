import React from 'react';

export class App extends React.Component {
  state: Readonly<{
    pressedKey: string;
  }> = { pressedKey: '' };

  handlePressedKey = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handlePressedKey);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handlePressedKey);
  }

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {this.state.pressedKey.length === 0
            ? `Nothing was pressed yet`
            : `The last pressed key is [${this.state.pressedKey}]`}
        </p>
      </div>
    );
  }
}
