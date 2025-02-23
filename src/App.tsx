import React from 'react';

type State = {
  pressedKey: string;
};

export class Keyboard extends React.Component<{}, State> {
  state: State = {
    pressedKey: '',
  };

  handleChangeKey = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleChangeKey);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleChangeKey);
  }

  render(): React.ReactNode {
    const { pressedKey } = this.state;

    return (
      <p className="App__message">
        {pressedKey.length === 0
          ? `Nothing was pressed yet`
          : `The last pressed key is [${pressedKey}]`}
      </p>
    );
  }
}

export const App: React.FC = () => {
  return (
    <div className="App">
      <Keyboard />
    </div>
  );
};
