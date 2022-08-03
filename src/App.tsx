/* eslint-disable react/jsx-one-expression-per-line */
import { Component } from 'react';

export class App extends Component {
  state = {
    pressedKey: 'Nothing was pressed yet',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.keyboardKeyHandler);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.keyboardKeyHandler);
  }

  keyboardKeyHandler = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key === ' ' ? 'Space' : event.key });
  };

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {pressedKey === 'Nothing was pressed yet'
            ? 'Nothing was pressed yet'
            : `The last pressed key is [${pressedKey}]`}
        </p>
      </div>
    );
  }
}
