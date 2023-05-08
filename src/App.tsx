import React from 'react';

type Props = {};

interface State {
  pressedKey: null | string,
}

export class App extends React.Component<Props, State> {
  state: Readonly<State> = {
    pressedKey: null,
  };

  componentDidMount() {
    document.addEventListener('keyup', this.getPressedKey);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.getPressedKey);
  }

  getPressedKey = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  render(): React.ReactNode {
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
