/* eslint-disable react/state-in-constructor */
import React from 'react';

interface AppState {
  lastKeyPressed: string;
  isKeyPressed: boolean;
}

export class App extends React.Component<{}, AppState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      lastKeyPressed: '',
      isKeyPressed: false,
    };
  }

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  handleKeyUp = (event: KeyboardEvent) => {
    this.setState(() => ({
      lastKeyPressed: event.key,
      isKeyPressed: true,
    }));
  };

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {this.state.isKeyPressed ? (
            <span>
              The last pressed key is [
              {this.state.lastKeyPressed}
              ]
            </span>
          ) : (
            <span>Nothing was pressed yet</span>
          )}
        </p>
      </div>
    );
  }
}

export default App;
