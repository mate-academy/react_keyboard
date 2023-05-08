import React from 'react';

type State = {
  pressedKey: string | null,
};

export class App extends React.Component<{}, State> {
  state = {
    pressedKey: null,
  };

  componentDidMount() {
    document.addEventListener('keyup', this.eventKey);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.eventKey);
  }

  eventKey = (e: KeyboardEvent) => {
    if (e.key !== '') {
      this.setState({ pressedKey: e.key });
    }

    if (!e.key) {
      this.setState({ pressedKey: null });
    }
  };

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        {pressedKey
          ? (
            <p className="App__message">
              The last pressed key is [
              { pressedKey }
              ]
            </p>
          )
          : (<p className="App__message">Nothing was pressed yet</p>)}
      </div>
    );
  }
}
