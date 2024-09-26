import React from 'react';

type State = {
  pressedKey: string | null;
};

export class App extends React.Component {
  state: Readonly<State> = {
    pressedKey: null,
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyPressed);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyPressed);
  }

  handleKeyPressed = (event: KeyboardEvent) => {
    return this.setState({
      pressedKey: event.key,
    });
  };

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {this.state.pressedKey
            ? `The last pressed key is [${pressedKey}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
