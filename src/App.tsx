import React from 'react';

type State = {
  key: string;
};
export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    key: 'Nothing was pressed yet',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.pressedKey);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.pressedKey);
  }

  pressedKey = (event: KeyboardEvent) => {
    this.setState({ key: `The last pressed key is [${event.key}]` });
  };

  render(): React.ReactNode {
    return (
      <div className="App">
        <p className="App__message">{this.state.key}</p>
      </div>
    );
  }
}
