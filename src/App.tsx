import React from 'react';

type State = {
  pressedKey: string;
};

export class App extends React.Component<{}, State> {
  state = {
    pressedKey: 'Nothing was pressed yet',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.showPresedKey);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.showPresedKey);
  }

  showPresedKey = (event: KeyboardEvent) => {
    this.setState({
      pressedKey: `The last pressed key is ${event.key.charCodeAt(0) === 32 ? 'space' : event.key}`,
    });
  };

  render(): React.ReactNode {
    return (
      <div className="App">
        <p>
          {this.state.pressedKey}
        </p>
      </div>
    );
  }
}
