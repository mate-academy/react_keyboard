import React, { Component } from 'react';

export const App1: React.FC = () => (
  <div className="App">
    <p className="App__message">The last pressed key is [Enter]</p>
  </div>
);

type State = {
  pressedKey: string | null;
};

export class App extends Component {
  state: Readonly<State> = {
    pressedKey: null,
  };

  componentDidMount() {
    document.addEventListener('keyup', this.keyUpHandler);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.keyUpHandler);
  }

  keyUpHandler = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        {
          pressedKey
            ? (
              <p className="App__message">
                The last pressed key is
                [
                {pressedKey}
                ]
              </p>
            )
            : <p className="App__message">Nothing was pressed yet</p>
        }
      </div>
    );
  }
}
