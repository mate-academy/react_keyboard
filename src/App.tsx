import { Component } from 'react';

type State = {
  pressedKey: boolean,
  keyBoardBtn : string,
};

export class App extends Component<{}, State> {
  state: State = {
    pressedKey: false,
    keyBoardBtn: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', (event: KeyboardEvent) => {
      this.setState({ pressedKey: true, keyBoardBtn: event.key });
    });
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', (event: KeyboardEvent) => {
      this.setState({ pressedKey: false, keyBoardBtn: event.key });
    });
  }

  render() {
    const { pressedKey, keyBoardBtn } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {!pressedKey
            ? 'Nothing was pressed yet'
            : `The last pressed key is [${keyBoardBtn}]`}
        </p>
      </div>
    );
  }
}
