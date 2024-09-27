import React from 'react';

type State = {
  pressedKey: string;
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    pressedKey: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.keyListenerCallback);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.keyListenerCallback);
  }

  keyListenerCallback = (el: KeyboardEvent) => {
    let key = el.key || '';

    if (el.key === ' ') {
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
