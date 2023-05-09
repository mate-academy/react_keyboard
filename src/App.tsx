/* eslint-disable react/prefer-stateless-function */
import React from 'react';

type Props = {};

interface State {
  pressedKey: string | null,
}

export class App extends React.Component<Props, State> {
  state: Readonly<State> = {
    pressedKey: null,
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyup);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyup);
  }

  handleKeyup = (event: KeyboardEvent) => (
    this.setState({ pressedKey: event.key })
  );

  render(): React.ReactNode {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {pressedKey
            ? `The last pressed key is [${pressedKey}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
