import { Component } from 'react';

type AppState = {
  pressedKey: string | null;
}

export class App extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      pressedKey: null,
    };

    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  handleKeyUp(event: KeyboardEvent) {
    this.setState({ pressedKey: event.key });
  }

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        {pressedKey ? (
          <p className="App__message">The last pressed key is [{ pressedKey }]</p>
          ) : (
          <p className="App__message">Nothing was pressed yet</p>
          )
        }
      </div>
    )
  }
}
