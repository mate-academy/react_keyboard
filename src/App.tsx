import { Component } from 'react';

type State = {
  pressedKey: string,
};

export class App extends Component<{}, State> {
  state: State = {
    pressedKey: '',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.click);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.click);
  }

  click = (event: KeyboardEvent): void => {
    this.setState({ pressedKey: event.key });
  };

  render(): unknown {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {
            pressedKey.length
              ? `The last pressed key is [${pressedKey}]`
              : 'Nothing was pressed yet'
          }
        </p>
      </div>
    );
  }
}
