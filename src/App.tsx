import React from 'react';

export const App2: React.FC = () => (
  <div className="App">
    <p className="App__message">The last pressed key is [Enter]</p>
  </div>
);

type State = {
  pressedKey: string;
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    pressedKey: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.keyPressHandler);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.keyPressHandler);
  }

  keyPressHandler = (e: KeyboardEvent) => {
    this.setState({ pressedKey: e.key });
  };

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {!pressedKey
            ? 'Nothing was pressed yet'
            : `The last pressed key is [${pressedKey}]`}
        </p>
      </div>
    );
  }
}
