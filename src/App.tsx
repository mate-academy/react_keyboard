import React from 'react';

export class App extends React.Component {
  state = {
    pressedKey: 'Nothing was pressed yet',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.press);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.press);
  }

  press = (event: KeyboardEvent) => {
    if (event.key) {
      this.setState({ pressedKey: `The last pressed key is ${event.key}` });
    }
  };

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {pressedKey}
        </p>
      </div>
    );
  }
}
