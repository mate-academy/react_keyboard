import React from 'react';

type State = {
  pressedKey: boolean;
  pressedUserKey: string;
};

export class Click extends React.Component<{}, State> {
  state: Readonly<State> = {
    pressedKey: false,
    pressedUserKey: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  handleKeyUp = (event: KeyboardEvent) => {
    if (event.key) {
      this.setState({
        pressedKey: true,
        pressedUserKey: event.key,
      });
    }
  };

  render() {
    return (
      <div>
        <h1>Press any key</h1>
        <p className="App__message">
          {
            this.state.pressedKey
              ? `The last pressed key is [${this.state.pressedUserKey}]`
              : 'Nothing was pressed yet'
          }
        </p>
      </div>
    );
  }
}

export const App: React.FC = () => (
  <div className="App">
    <Click />
  </div>
);
