/* eslint-disable react/prefer-stateless-function */

import React from 'react';

type State = {
  pressedKey: string | null,
};

export class App extends React.Component<{}, State> {
  state = {
    pressedKey: null,
  };

  componentDidMount() {
    document.addEventListener('keyup', this.eventHandler.bind(this));
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.eventHandler);
  }

  eventHandler(event: KeyboardEvent):void {
    this.setState({
      pressedKey: event.key,
    });
  }

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {this.state.pressedKey
            ? `The last pressed key is [${this.state.pressedKey}]`
            : 'Nothing was pressed yet' }
        </p>
      </div>
    );
  }
}
