import React from 'react';
import { Component } from 'react';

export class App extends Component<{}>  {
  state = {
    isNotPressed: true,
    pressedKey: null,
  }

  keyPressedEventHandler = (event: KeyboardEvent) => {
    if (event.key) {
      this.setState({
        isNotPressed: false,
        pressedKey: event.key,
      });
    }
  }

  componentDidMount() {
    document.addEventListener('keyup', this.keyPressedEventHandler);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.keyPressedEventHandler);
  }

  render() {
    const { isNotPressed, pressedKey } = this.state;

    return (
      <div className="App">
        <h1>App</h1>
        {isNotPressed
          ? <p>Nothing was pressed yet</p>
          : <p>The last pressed key is {pressedKey}</p>
        }
      </div>
    );
  }
}
