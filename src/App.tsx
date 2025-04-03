import React from 'react';

type State = {
  pressedKey: string;
};

export class App extends React.Component<State> {
  state: Readonly<State> = {
    pressedKey: '',
  };

  handleKeyUp = (event: KeyboardEvent) => {
    event.preventDefault();
    this.setState({ pressedKey: event.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  render(): React.ReactNode {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {pressedKey !== ''
            ? `The last pressed key is [${pressedKey}]`
            : `Nothing was pressed yet`}
        </p>
      </div>
    );
  }
}
