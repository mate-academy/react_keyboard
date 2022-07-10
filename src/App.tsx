import React from 'react';

type State = {
  message: string;
};

class App extends React.Component<{}, State> {
  state: State = {
    message: 'Nothing was pressed yet',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.keyPressedEvent);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.keyPressedEvent);
  }

  keyPressedEvent = (event: KeyboardEvent) => {
    if (event.key) {
      this.setState((previousState) => ({
        ...previousState,
        message: `The last pressed key is ${event.key}`,
      }));
    }
  };

  render() {
    return (
      <div className="App">
        <p>What are you pressing?</p>
        <p>{this.state.message}</p>
      </div>
    );
  }
}

export default App;
