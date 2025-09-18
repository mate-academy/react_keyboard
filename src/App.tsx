// App.tsx
import React from 'react';
import './index.scss';

export class App extends React.Component<{}, { pressedKey: string | null }> {
  state = {
    pressedKey: null,
  };

  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

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
        <header className="App-header">
          <h1 className="App__message">
            {pressedKey === null
              ? 'Nothing was pressed yet'
              : `The last pressed key is [${pressedKey}]`}
          </h1>
        </header>
      </div>
    );
  }
}
