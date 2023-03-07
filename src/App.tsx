import { Component } from 'react';

export class App extends Component {
  state = {
    pressedKey: 'Nothing was pressed yet',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.eventHandler);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.eventHandler);
  }

  eventHandler = (event: KeyboardEvent) => {
    const { key, code } = event;

    const isSpaceKey = code === 'Space'
      ? 'The last pressed key is [Space]'
      : `The last pressed key is [${key}]`;

    this.setState({ pressedKey: isSpaceKey });
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
