import { Component } from 'react';

type State = {
  lastPressedKey: string,
};

export class App extends Component<{}, State> {
  state:State = {
    lastPressedKey: 'Nothing was pressed yet',
  };

  componentDidMount() {
    document.addEventListener('keyup', (e:KeyboardEvent) => {
      this.setState({ lastPressedKey: `The last pressed key is [${e.key}]` });
    });
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', (e:KeyboardEvent) => {
      this.setState({ lastPressedKey: `The last pressed key is [${e.key}]` });
    });
  }

  render() {
    const { lastPressedKey } = this.state;

    return (
      <>
        <div className="App">
          <p className="App__message">{lastPressedKey}</p>
        </div>
      </>
    );
  }
}
