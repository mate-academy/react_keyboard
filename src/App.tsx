import React from 'react';

type State = {
  pressedKey: string
};
export class App extends React.Component<{}, State> {
  state = {
    pressedKey: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handlerCallback);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handlerCallback);
  }

  handlerCallback = (event: KeyboardEvent) => {
    this.setState({ pressedKey: (event.key) });
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
