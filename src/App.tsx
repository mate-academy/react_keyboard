import React from 'react';

export class App extends React.Component {
  state = {
    pressedKey: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', (e: KeyboardEvent) => {
      this.setState({ pressedKey: e.key });
    });
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', (e: KeyboardEvent) => {
      this.setState({ pressedKey: e.key });
    });
  }

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {pressedKey
            ? `The last pressed key is [${pressedKey}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
