import React from 'react';

interface State {
  pressedKey: string;
}

const NOTHING_PRESSED_MESSAGE = 'Nothing was pressed yet';
const LAST_PRESSED_MESSAGE = 'The last pressed key is';

export class App extends React.Component {
  state: Readonly<State> = {
    pressedKey: '',
  };

  handleKeyup = (event: KeyboardEvent): void => {
    this.setState({ pressedKey: event.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyup);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyup);
  }

  render(): React.ReactNode {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {!pressedKey
            ? NOTHING_PRESSED_MESSAGE
            : `${LAST_PRESSED_MESSAGE} [${pressedKey}]`}
        </p>
      </div>
    );
  }
}
