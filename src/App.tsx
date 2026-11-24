import React from 'react';

type Props = {
  name?: string;
};

type State = {
  pressedKey: string;
};
export class App extends React.Component<Props, State> {
  state: State = {
    pressedKey: 'Nothing was pressed yet',
  };

  handlePressedKeyDown = (e: KeyboardEvent) => {
    this.setState({ pressedKey: `The last pressed key is [${e.key}]` });
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handlePressedKeyDown);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handlePressedKeyDown);
  }

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">{`${pressedKey}`}</p>
      </div>
    );
  }
}
