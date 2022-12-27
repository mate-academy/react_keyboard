// import React from 'react';
import { Component } from 'react';

type State = {
  pressedKey: string;
};

export class App extends Component<{}, State> {
  state : Readonly<State> = {
    pressedKey: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleDocumentClick);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleDocumentClick);
  }

  handleDocumentClick = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        {pressedKey
          ? <p className="App__message">{`The last pressed key is [${pressedKey}]`}</p>
          : <p className="App__message">Nothing was pressed yet</p>}
      </div>
    );
  }
}
