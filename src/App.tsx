import React from 'react';

type State = {
  pressedKey: string | null;
};
export class App extends React.Component<{}, State> {
  state = {
    pressedKey: null,
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handler);
  }

  componentwillUnmount() {
    document.removeEventListener('keyup', this.handler);
  }

  handler = (e: KeyboardEvent) => {
    this.setState({
      pressedKey: e.key,
    });
  };

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {this.state.pressedKey
            ? `The last pressed key is [${this.state.pressedKey}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
