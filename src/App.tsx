import React from 'react';

export class App extends React.Component {
  state = {
    pressedKey: '',
  };

  keyUpHandler = (event: KeyboardEvent): void => {
    this.setState({ pressedKey: event.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.keyUpHandler);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.keyUpHandler);
  }

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {
            this.state.pressedKey === ''
              ? 'Nothing was pressed yet'
              : `The last pressed key is [${this.state.pressedKey}]`
          }
        </p>
      </div>
    );
  }
}
