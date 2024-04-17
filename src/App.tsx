import React from 'react';

export class App extends React.Component {
  state = {
    pressedKey: null,
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  handleKeyUp = (event: KeyboardEvent): void => {
    const { key } = event;

    this.setState({ pressedKey: key });
  };

  render() {
    const { pressedKey } = this.state;
    const message = pressedKey ? `The last pressed key is [${pressedKey}]` : 'Nothing was pressed yet';

    return (
      <div className="App">
        <p className="App__message">{message}</p>
      </div>
    );
  }
}
