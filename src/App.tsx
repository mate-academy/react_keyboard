/* eslint-disable no-console */
import React from 'react';

type State = {
  pressedKey: string;
};

export class App extends React.Component {
  state: State = {
    pressedKey: '',
  };

  pressedKeyHandler = (event: KeyboardEvent) => {
    const pressedButton = event.key;

    console.log(pressedButton);
    this.setState({ pressedKey: pressedButton });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.pressedKeyHandler);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.pressedKeyHandler);
  }

  render() {
    return (
      <div className="App">
        {this.state.pressedKey === '' ?
          <p className="App__message">Nothing was pressed yet</p>
          :
          <p className="App__message">
            The last pressed key is [{this.state.pressedKey}]
          </p>
        }
      </div>
    );
  }
}
