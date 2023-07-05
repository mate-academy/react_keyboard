import { Component, ReactNode } from 'react';

type State = {
  lastPressedKey: string | null;
};

export class App extends Component<{}, State> {
  state = {
    lastPressedKey: null,
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.keyUpHandler);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.keyUpHandler);
  }

  keyUpHandler = (event: KeyboardEvent) => {
    this.setState({
      lastPressedKey: event.key,
    });
  };

  render(): ReactNode {
    const { lastPressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {
            lastPressedKey
              ? `The last pressed key is [${lastPressedKey}]`
              : 'Nothing was pressed yet'
          }
        </p>
      </div>
    );
  }
}
