import React from 'react';

type State = {
  pressedKeyInfo: string;
};

export class App extends React.Component<{}, State> {
  state: State = {
    pressedKeyInfo: 'Nothing was pressed yet',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.getEvent);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.getEvent);
  }

  getEvent = (event: KeyboardEvent) => {
    this.setState({ pressedKeyInfo: `The last pressed key is [${event.key}]` });
  };

  render(): React.ReactNode {
    const { pressedKeyInfo: pressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">{pressedKey}</p>
      </div>
    );
  }
}
