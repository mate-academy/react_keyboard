import React from 'react';

export class App extends React.PureComponent {
  state = {
    pressedKey: null,
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handlerKeyPress);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handlerKeyPress);
  }

  handlerKeyPress = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  render() {
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
