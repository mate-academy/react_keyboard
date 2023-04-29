import { Component } from 'react';

type State = {
  pressedKey: boolean,
  keyName: string;
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    pressedKey: false,
    keyName: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.addEventKeyUp);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.addEventKeyUp);
  }

  addEventKeyUp = (e: KeyboardEvent) => {
    if (e.key) {
      this.setState({ pressedKey: true, keyName: e.key });
    }
  };

  render() {
    const { pressedKey, keyName } = this.state;

    return (
      <div className="App">
        {!pressedKey
          ? <p className="App__message">Nothing was pressed yet</p>
          : <p className="App__message">{`The last pressed key is [${keyName}]`}</p>}
      </div>
    );
  }
}
