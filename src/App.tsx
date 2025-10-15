import React from 'react';
import './index.scss';

type State = {
  pressedKey: string | null;
};

export class App extends React.Component<Record<string, never>, State> {
  state: State = { pressedKey: null };

  private handleKeyUp = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  render() {
    const { pressedKey } = this.state;

    return (
      <main className="App">
        <p className="App__message">
          {pressedKey
            ? <>The last pressed key is [{pressedKey}]</>
            : 'Nothing was pressed yet'}
        </p>
      </main>
    );
  }
}

export default App;


