import React from 'react';

type Props = {
  pressedKey: string;
};

export class App extends React.PureComponent<Props> {
  state = {
    pressedKey: 'key',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.keyup);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.keyup);
  }

  keyup = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        <p
          className="App__message"
        >
          { pressedKey !== 'key'
            ? `The last pressed key is [${pressedKey}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
