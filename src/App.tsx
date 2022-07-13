import React from 'react';

type State = {
  pressedKey: string,
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    pressedKey: 'Nothing was pressed yet',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.listener);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.listener);
  }

  listener = (event: KeyboardEvent) => {
    if (event.key) {
      this.setState({ pressedKey: `The last pressed key is ${event.key}` });
    }
  };

  render() {
    return (
      <div className="App">
        <p>{this.state.pressedKey}</p>
      </div>
    );
  }
}
