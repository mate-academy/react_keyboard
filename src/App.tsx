import React from 'react';

type State = {
  pressedKey: string;
};

export class App extends React.Component<{}, State> {
  state = {
    pressedKey: '',
  };

  handleDocumentPressKey = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
    // eslint-disable-next-line no-console
    console.log(event.key);
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleDocumentPressKey);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleDocumentPressKey);
  }

  render(): React.ReactNode {
    const { pressedKey } = this.state;
    const message = pressedKey
      ? `The last pressed key is [${pressedKey}]`
      : 'Nothing was pressed yet';

    return (
      <div className="App">
        <p className="App__message">{message}</p>
      </div>
    );
  }
}
