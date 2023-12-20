import { Component } from 'react';

interface AppState {
  pressedKey: string | null;
}

class App extends Component<{}, AppState> {
  state: AppState = {
    pressedKey: null,
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  render() {
    const { pressedKey } = this.state;

    return (
      <div>
        {pressedKey ? (
          <p>
            The last pressed key is
            &quot;
            {pressedKey}
            &quot;
          </p>
        ) : (
          <p>Nothing was pressed yet</p>
        )}
      </div>
    );
  }
}

export default App;
