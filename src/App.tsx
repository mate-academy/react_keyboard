import React from 'react';

type State = {
  lastPresedKey: string,
};

export class App extends React.Component<{}, State> {
  state = {
    lastPresedKey: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handlerKeyPressed);
  }

  componentWillUnmount() {
    document.addEventListener('keyup', this.handlerKeyPressed);
  }

  handlerKeyPressed = (eventKeyPress: KeyboardEvent) => {
    this.setState({ lastPresedKey: eventKeyPress.key });
  };

  render() {
    const { lastPresedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {lastPresedKey.length === 0
            ? 'Nothing was pressed yet'
            : `The last pressed key is [${lastPresedKey}]`}
        </p>
      </div>
    );
  }
}
