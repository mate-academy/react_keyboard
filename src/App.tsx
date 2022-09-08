import React from 'react';

type State = {
  pressedKey: string;
};
export class App extends React.Component<{}, State> {
  state = {
    pressedKey: '',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.pressedKeyEvent);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.pressedKeyEvent);
  }

  pressedKeyEvent: (event: KeyboardEvent) => void = event => {
    this.setState({ pressedKey: event.key });
  };

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {`${pressedKey.length !== 0
            ? `The last pressed key is [${pressedKey}]`
            : 'Nothing was pressed yet.....ƪ(˘⌣˘)ʃ.....waiting....'}`}
        </p>
      </div>
    );
  }
}
