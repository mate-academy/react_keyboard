import React from 'react';

// export const App: React.FC = () => (
//   <div className="App">
//     <p className="App__message">The last pressed key is [Enter]</p>
//   </div>
// );

interface State {
  lastPressedKey: string | null;
}

export class App extends React.Component<State> {
  state: State = {
    lastPressedKey: null,
  };

  handleKeyChange = (event: KeyboardEvent) => {
    this.setState({ lastPressedKey: event.key });
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyChange);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyChange);
  }

  render() {
    return (
      <div className="App">
        {this.state.lastPressedKey ? (
          <p className="App__message">
            The last pressed key is [{this.state.lastPressedKey}]
          </p>
        ) : (
          <p className="App__message">Nothing was pressed yet</p>
        )}
      </div>
    );
  }
}
