import React from 'react';

type Props = {};

type State = {
  pressedKey: string;
};

export class App extends React.Component<Props, State> {
  state: State = {
    pressedKey: 'Nothing was pressed yet',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        {this.state.pressedKey === 'Nothing was pressed yet' ? (
          <p className="App__message">{pressedKey}</p>
        ) : (
          <p className="App__message">The last pressed key is [{pressedKey}]</p>
        )}
      </div>
    );
  }
}
