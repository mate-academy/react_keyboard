import React from 'react';

export class App extends React.PureComponent {
  state = {
    pressedKey: '',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyPress);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyPress);
  }

  handleKeyPress(event: KeyboardEvent): void {
    this.setState({ pressedKey: event.key });
  }

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {
            !this.state.pressedKey
              ? 'Nothing was pressed yet'
              : `The last pressed key is [${this.state.pressedKey}]`
          }
        </p>
      </div>
    );
  }
}
