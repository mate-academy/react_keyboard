import React from 'react';

type State = {
  lastPressedKey: string;
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    lastPressedKey: '',
  };

  hendleKeyDown = (event: KeyboardEvent) => {
    this.setState({ lastPressedKey: event.key });
  };

  componentDidMount(): void {
    this.setState({ lastPressedKey: '' });
  }

  componentDidUpdate(): void {
    document.addEventListener('keydown', this.hendleKeyDown);
  }

  render(): React.ReactNode {
    const { lastPressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {lastPressedKey
            ? `The last pressed key is [${lastPressedKey}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
