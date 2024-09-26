import React from 'react';
import { AppFC } from './AppFC';

type State = {
  pressedKey: string;
};

export class App extends React.Component {
  state: State = {
    pressedKey: '',
  };

  componentDidMount = (): void => {
    document.addEventListener('keyup', this.pressKey);
  };

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.pressKey);
  }

  pressKey = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  render(): React.ReactNode {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        {pressedKey
          ? (
            <p className="App__message">
              The last pressed key is
              {` [${pressedKey}]`}
            </p>
          )
          : (
            <p className="App__message">Nothing was pressed yet</p>
          )}

        <AppFC />
      </div>
    );
  }
}
