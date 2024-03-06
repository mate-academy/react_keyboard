import React from 'react';

export class App extends React.PureComponent {
  state = {
    pressedKey: '',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyChange);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyChange);
  }

  handleKeyChange = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  render() {
    const { pressedKey } = this.state;

    if (pressedKey === '') {
      return (
        <div className="App">
          <p className="App__message">Nothing was pressed yet</p>
        </div>
      );
    }

    return (
      <div className="App">
        <p className="App__message">The last pressed key is [{pressedKey}]</p>
      </div>
    );
  }
}
