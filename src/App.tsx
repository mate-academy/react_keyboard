import React from 'react';
import { FIRST_RENDER_MESSAGE, KEY_IS_PUSHED_MESSAGE } from './constants';

interface State {
  lastKey: string;
}

export class App extends React.PureComponent<{}, State> {
  state: State = {
    lastKey: '',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyPush);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyPush);
  }

  handleKeyPush = (event: KeyboardEvent) => {
    this.setState({ lastKey: event.key });
  };

  render() {
    const { lastKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {lastKey
            ? `${KEY_IS_PUSHED_MESSAGE} [${lastKey}]`
            : FIRST_RENDER_MESSAGE}
        </p>
      </div>
    );
  }
}
