import { Component } from 'react';

type State = {
  pressedKey: string;
};

export class App extends Component<{}, State> {
  state = {
    pressedKey: '',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.ourEvent);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.ourEvent);
  }

  ourEvent = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        {pressedKey
          ? <p className="App__message">{`The last pressed key is [${pressedKey}]` }</p>
          : <p className="App__message">Nothing was pressed yet</p>}
      </div>
    );
  }
}
