import { Component } from 'react';

type State = {
  lastPressed: string
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    lastPressed: '',
  };

  componentDidMount() {
    document.addEventListener('keydown', this.savePressedKey);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.savePressedKey);
  }

  savePressedKey = (e: KeyboardEvent) => {
    this.setState({ lastPressed: e.key });
  };

  render() {
    const { lastPressed } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {
            lastPressed
              ? `The last pressed key is [${lastPressed}]`
              : 'Nothing was pressed yet'
          }
        </p>
      </div>
    );
  }
}
