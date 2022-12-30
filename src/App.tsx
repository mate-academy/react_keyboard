import React from 'react';

interface State {
  pressedKey: string | null;
}

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    pressedKey: null,
  };

  componentDidMount() {
    document.addEventListener('keyup', this.keyListenerCallback);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.keyListenerCallback);
  }

  keyListenerCallback = (e: KeyboardEvent) => {
    let key = e.key || '';

    if (e.key === ' ') {
      key = 'space';
    }

    this.setState({ pressedKey: key });
  };

  render() {
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
