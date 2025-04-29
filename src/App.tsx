import React from 'react';

type State = {
  pressedKey: string;
};

export class PressedKeyListener extends React.Component {
  state: State = {
    pressedKey: 'Nothing was pressed yet',
  };

  changePhraseHandler = (event: KeyboardEvent) => {
    this.setState({ pressedKey: `The last pressed key is [${event.key}]` });
  };

  componentDidMount() {
    window.addEventListener('keyup', this.changePhraseHandler);
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.changePhraseHandler);
  }

  render() {
    return (
      <div className="App">
        <p className="App__message">{this.state.pressedKey}</p>
      </div>
    );
  }
}

export const App = () => {
  return <PressedKeyListener />;
};
