import { Component } from 'react';

type State = {
  pressedKey: string;
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    pressedKey: '',
  };

  componentDidMount() {
    document.addEventListener(
      'keyup',
      this.handleKeyboardClick,
    );
  }

  componentWillUnmount() {
    document.removeEventListener(
      'keyup',
      this.handleKeyboardClick,
    );
  }

  handleKeyboardClick = (event: KeyboardEvent) => {
    this.setState({
      pressedKey: event.key,
    });
  };

  render(): JSX.Element {
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
