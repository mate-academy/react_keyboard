import React from 'react';

type State = {
  pressedKey: string;
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    pressedKey: 'Nothing was pressed yet',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  render() {
    const { pressedKey } = this.state;

    let appMessage = <p className="App__message">Nothing was pressed yet</p>;

    if (pressedKey !== 'Nothing was pressed yet') {
      appMessage = <p className="App__message">{`The last pressed key is [${pressedKey}]`}</p>;
    }

    return (
      <div className="App">
        {appMessage}
      </div>
    );
  }
}
