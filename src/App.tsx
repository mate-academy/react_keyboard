import React from 'react';

export class App extends React.Component {
  state = {
    pressedKey: '',
  };

  handleDocPressKey = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleDocPressKey);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleDocPressKey);
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
