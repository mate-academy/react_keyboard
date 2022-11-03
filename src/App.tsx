import React, { Component } from 'react';

export class App extends Component {
  state = {
    pressedKey: '',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.onKeyUpHandler);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.onKeyUpHandler);
  }

  onKeyUpHandler = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  render(): React.ReactNode {
    return (
      <div className="App">
        <p className="App__message">
          {
            this.state.pressedKey
              ? `The last pressed key is [${this.state.pressedKey}]`
              : 'Nothing was pressed yet'
          }
        </p>
      </div>
    );
  }
}
