import React, { Component } from 'react';

interface LikeNew {
  PressedKey: string | null;
}

export class App extends Component<{}, LikeNew> {
  state: LikeNew = {
    PressedKey: null,
  };

  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({ PressedKey: event.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  render() {
    const { PressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {PressedKey !== null
            ? `The last pressed key is [${PressedKey}]`
            : `Nothing was pressed yet`}
        </p>
      </div>
    );
  }
}
