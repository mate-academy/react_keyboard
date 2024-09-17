import React from 'react';

type Props = {};

type State = {
  pressedKey: string;
};

export class App extends React.Component<Props, State> {
  state = {
    pressedKey: `Nothing was pressed yet`,
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handledKeyUp);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handledKeyUp);
  }

  handledKeyUp = (event: KeyboardEvent) => {
    this.setState({ pressedKey: `The last pressed key is [${event.key}]` });
  };

  render(): React.ReactNode {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">{pressedKey}</p>
      </div>
    );
  }
}
