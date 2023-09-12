import React from 'react';

type State = {
  pressedKey: string
};

export class App extends React.Component<{}, State> {
  state: State = {
    pressedKey: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKey);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKey);
  }

  handleKey = (event: KeyboardEvent) => {
    this.setState({ pressedKey: `${event.key}` });
  };

  render() {
    return (
      <div className="App">
        <a href="/" className="App__message">
          {this.state.pressedKey
            ? (
              `The last pressed key is [${this.state.pressedKey}]`
            )
            : 'Nothing was pressed yet'}
        </a>
      </div>
    );
  }
}
