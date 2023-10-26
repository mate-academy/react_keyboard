import React from 'react';

export class App extends React.Component {
  state = {
    pressedKey: '`Nothing was pressed yet`',
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          The last pressed key is [
          {pressedKey}
          ]
        </p>
      </div>
    );
  }
}
