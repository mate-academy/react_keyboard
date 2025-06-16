import React, { Component } from 'react';

type State = {
  pressedKey: string | null;
};

export class App extends Component<{}, State> {
  state: State = {
    pressedKey: null,
  };

  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  render() {
    const { pressedKey } = this.state;

    return (
      <div style={{ padding: '2rem', fontSize: '1.5rem' }}>
        {pressedKey === null ? (
          <p>Nothing was pressed yet</p>
        ) : (
          <p>
            The last pressed key is <strong>{pressedKey}</strong>
          </p>
        )}
      </div>
    );
  }
}
