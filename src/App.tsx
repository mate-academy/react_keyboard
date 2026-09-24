import React from 'react';

type Props = {};

type State = {
  pressedKey: string;
};

export class App extends React.Component<Props, State> {
  state: State = {
    pressedKey: 'Nothing was pressed yet',
  };

  handleKeyUp = (event: KeyboardEvent): void => {
    this.setState({ pressedKey: `The last pressed key is [${event.key}]` });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  render(): React.ReactNode {
    return (
      <div className="App">
        <p className="App__message">{this.state.pressedKey}</p>
      </div>
    );
  }
}
