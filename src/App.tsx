import { Component } from 'react';

export class App extends Component {
  state = {
    pressedKey: null,
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleClick);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleClick);
  }

  handleClick = (event: KeyboardEvent) => {
    const { key, code } = event;

    const finalKey = code === 'Space'
      ? '[Space]'
      : `[${key}]`;

    this.setState({ pressedKey: finalKey });
  };

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {pressedKey === null
            ? 'Nothing was pressed yet'
            : `The last pressed key is ${pressedKey}`}
        </p>
      </div>
    );
  }
}
