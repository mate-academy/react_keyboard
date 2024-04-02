import React from 'react';

type State = {
  keyUp: string;
};

export class App extends React.Component<{}, State> {
  state: State = {
    keyUp: '',
  };

  handlerClickKeyButton = (event: KeyboardEvent) => {
    this.setState({
      keyUp: event.key,
    });
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handlerClickKeyButton);
  }

  shouldComponentUpdate(nextState: Readonly<State>): boolean {
    return nextState.keyUp !== this.state.keyUp;
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handlerClickKeyButton);
  }

  render(): React.ReactNode {
    return this.state.keyUp ? (
      <p className="App__message">
        The last pressed key is {`[${this.state.keyUp}]`}
      </p>
    ) : (
      <p className="App__message">Nothing was pressed yet</p>
    );
  }
}
