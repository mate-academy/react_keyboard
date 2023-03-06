import { Component } from 'react';

type State = {
  press: string | null;
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    press: null,
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyup);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyup);
  }

  handleKeyup = (event: KeyboardEvent) => {
    this.setState({ press: event.key });
  };

  render(): React.ReactNode {
    const { press } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {
            press
              ? `The last pressed key is [${press}]`
              : 'Nothing was pressed yet'
          }
        </p>
      </div>
    );
  }
}
