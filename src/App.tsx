import React from 'react';

interface State {
  pressedKey: string | null;
}

export class App extends React.Component<{}, State> {
  state: State = {
    pressedKey: null,
  };

  constructor(props: {}) {
    super(props);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  handleKeyUp(event: KeyboardEvent) {
    this.setState({ pressedKey: event.key });
  }

  render(): React.ReactNode {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        {pressedKey ? (
          <p className="App__message">
            The last pressed key is {`[${pressedKey}]`}
          </p>
        ) : (
          <p className="App__message">Nothing was pressed yet</p>
        )}
      </div>
    );
  }
}
