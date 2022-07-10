import React from 'react';

type State = {
  pressedKey: string,
};

export class App extends React.Component<{}, State> {
  state = {
    pressedKey: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.setKey);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.setKey);
  }

  setKey = (event: KeyboardEvent) => {
    this.setState(event.key === ' '
      ? { pressedKey: 'Space' }
      : { pressedKey: event.key });
  };

  render() {
    return (
      <div className="App">
        {this.state.pressedKey
          ? `The last pressed key is [${this.state.pressedKey}]`
          : 'Nothing was pressed yet'}
      </div>
    );
  }
}
