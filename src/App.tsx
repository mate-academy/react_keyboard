import React from 'react';

type State = {
  pressedKey: string,
};

export class App extends React.Component<{}, State> {
  state = {
    pressedKey: 'Press any key and I will guess which one:)',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.listener);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.listener);
  }

  listener = (event: KeyboardEvent) => {
    if (event.key === ' ') {
      this.setState({ pressedKey: 'The last pressed key is Space' });
    } else {
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
