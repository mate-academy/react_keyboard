/* eslint-disable no-restricted-globals */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';

type State = {
  pressedKey: string;
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    pressedKey: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyboardEvent);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyboardEvent);
  }

  handleKeyboardEvent = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {
            pressedKey.length
              ? `The last pressed key is [${pressedKey}]`
              : 'Nothing was pressed yet'
          }
        </p>
      </div>
    );
  }
}
