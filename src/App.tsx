import { Component } from 'react';

type State = {
  pressedKey: string;
};

export class App extends Component<{}, State> {
  state: State = {
    pressedKey: '',
  };

  handleKeyUp = (event: KeyboardEvent) => {
    if (event.key) {
      this.setState({ pressedKey: event.key });
    }
    // eslint-disable-next-line
    console.log(event.key);
  };

  componentDidMount() {
    window.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount(): void {
    window.removeEventListener('keyup', this.handleKeyUp);
  }

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {pressedKey === ''
            ? 'Nothing was pressed yet'
            : `The last pressed key is [${pressedKey}]`}
        </p>
      </div>
    );
  }
}
