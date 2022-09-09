import { Component } from 'react';

type State = {
  pressed: boolean,
  keyBoardBtn : string,
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    pressed: false,
    keyBoardBtn: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', (event: KeyboardEvent) => {
      this.setState({ pressed: true, keyBoardBtn: event.key });
    });
  }

  render() {
    const { pressed, keyBoardBtn } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {!pressed
            ? 'Nothing was pressed yet'
            : `The last pressed key is [${keyBoardBtn}]`}
        </p>
      </div>
    );
  }
}
