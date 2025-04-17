import React from 'react';

type P = {};

type State = {
  pressedKey: string;
};

export class App extends React.Component<P, State> {
  state: State = {
    pressedKey: '',
  };

  keyEvent = (event: KeyboardEvent) => {
    const eventKey = event.key;

    if (eventKey !== 'Meta') {
      this.setState({ pressedKey: event.key });
    }
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.keyEvent);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.keyEvent);
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
