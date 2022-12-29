import React from 'react';

interface State {
  pressedKey: string | null;
}

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    pressedKey: null,
  };

  componentDidMount() {
    window.addEventListener('keyup', this.keyListenerCallback);
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.keyListenerCallback);
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
        {pressedKey
          ? (
            <p className="App__message">
              {`The last pressed key is [${pressedKey}]`}
            </p>
          )
          : <p>Nothing was pressed yet</p>}
      </div>
    );
  }
}
