import React from 'react';

type Typo = {};

type State = {
  pressedKey: string;
};

export class App extends React.Component<Typo, State> {
  state: State = {
    pressedKey: '',
  };

  handleKeyEvent = (event: KeyboardEvent) => {
    const eventKey = event.key;

    if (eventKey !== 'Meta') {
      this.setState({ pressedKey: eventKey });
    }
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyEvent);
  }

  
  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyEvent);
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
