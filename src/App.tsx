import React from 'react';

interface State {
  pressedKey: string;
}

class App extends React.Component<{}, State> {
  state = {
    pressedKey: '',
  };

  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  render() {
    const { pressedKey } = this.state;

    return (
      <div>
        {pressedKey ? (
          <p>The last pressed key is [{pressedKey}]</p>
        ) : (
          <p>Nothing was pressed yet</p>
        )}
      </div>
    );
  }
}

export default App;
