import React from 'react';

type State = {
  pressed: string | undefined,
};

export class App extends React.Component<{}, State> {
  state = {
    pressed: undefined,
  };

  componentDidMount() {
    window.addEventListener('keyup', this.keyboardListener);
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.keyboardListener);
  }

  keyboardListener = (event: KeyboardEvent) => {
    this.setState({
      pressed: event.code === 'Space'
        ? 'Space'
        : event.key,
    });
  };

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {this.state.pressed
            ? `The last pressed key is ${this.state.pressed}`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
