import React from 'react';

interface State {
  pressedKey: string;
}

export class App extends React.Component<{}, State> {
  state: State = {
    pressedKey: '',
  };

  private keyUpHandler: (event: KeyboardEvent) => void;

  constructor(props: {}) {
    super(props);
    this.keyUpHandler = (event: KeyboardEvent) => {
      this.setState({ pressedKey: event.key });
    };
  }

  componentDidMount() {
    document.addEventListener('keyup', this.keyUpHandler);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.keyUpHandler);
  }

  render() {
    const { pressedKey } = this.state;

    return pressedKey ? (
      <div className="App">
        <p className="App__message">The last pressed key is [{pressedKey}]</p>
      </div>
    ) : (
      <div className="App">
        <p className="App__message">Nothing was pressed yet</p>
      </div>
    );
  }
}
