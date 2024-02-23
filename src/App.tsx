import React from 'react';

export class App extends React.PureComponent {
  state = {
    pressedKey: '',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleSetEventKey);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleSetEventKey);
  }

  handleSetEventKey = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  render() {
    const { pressedKey } = this.state;

    const appMessage = pressedKey
      ? `The last pressed key is [${pressedKey}]`
      : 'Nothing was pressed yet';

    return (
      <div className="App">
        <p className="App__message">{appMessage}</p>
      </div>
    );
  }
}
