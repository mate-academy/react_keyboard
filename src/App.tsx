import React from 'react';

type State = {
  pressedKey: string
};

export class App extends React.Component<{}, State> {
  state = {
    pressedKey: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.eventCallback);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.eventCallback);
  }

  eventCallback = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  render(): React.ReactNode {
    return (
      <div className="App">
        { this.state.pressedKey === ''
          ? <p className="App__message">Nothing was pressed yet</p>
          : <p className="App__message">{`The last pressed key is [${this.state.pressedKey}]`}</p>}
      </div>
    );
  }
}
