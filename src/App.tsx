import { Component, ReactNode } from 'react';

type State = {
  pressedKey: string | null;
};

export class App extends Component<{}, State> {
  state = {
    pressedKey: null,
  };

  componentDidMount(): void {
    document.addEventListener('keyup', (event: KeyboardEvent) => {
      this.setState({ pressedKey: event.key });
    });
  }

  render(): ReactNode {
    return this.state.pressedKey !== null
      ? (
        <p>
          {`The last pressed key is [${this.state.pressedKey}]`}
        </p>
      )
      : (
        <p>
          Nothing was pressed yet
        </p>
      );
  }
}
