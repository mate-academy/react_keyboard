import React from 'react';

type State = {
  lastKey: string;
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    lastKey: 'Nothing was pressed yet',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.switchKey);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.switchKey);
  }

  switchKey = (event: KeyboardEvent) => {
    this.setState({ lastKey: `The last pressed key is [${event.key}]` });
  };

  render(): React.ReactNode {
    const { lastKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">{lastKey}</p>
      </div>
    );
  }
}
