import { Component } from 'react';

interface State {
  pressedKey: string | null;
}

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    pressedKey: null,
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.hendlerKey);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.hendlerKey);
  }

  hendlerKey = ({ key }: { key: string }): void => {
    this.setState({ pressedKey: key });
  };

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {pressedKey ? `The last pressed key is [${pressedKey}]` : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
