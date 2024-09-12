import React from 'react';

type State = {
  pressedKey: string,
};

export class App extends React.PureComponent<{}, State> {
  state = {
    pressedKey: '',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.keyPressHandler);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.keyPressHandler);
  }

  keyPressHandler = (event: KeyboardEvent): void => {
    this.setState({ pressedKey: event.key });
  };

  render() {
    const { pressedKey } = this.state;

    const resultMessage = pressedKey
      ? `The last pressed key is [${pressedKey}]`
      : 'Nothing was pressed yet';

    return (
      <div className="App">
        <p className="App__message">
          { resultMessage }
        </p>
      </div>
    );
  }
}
