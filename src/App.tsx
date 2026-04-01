import React from 'react';

export class App extends React.Component {
  state = {
    lastPressedKey: '',
  };

  componentDidMount(): void {
    document.addEventListener('keydown', (event: KeyboardEvent) => {
      this.setState({ lastPressedKey: event.key });
    });
  }

  componentWillUnmount(): void {
    document.removeEventListener('keydown', () => {
      this.setState({ lastPressedKey: '' });
    });
  }

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {this.state.lastPressedKey === ''
            ? 'Nothing was pressed yet'
            : `The last pressed key is [${this.state.lastPressedKey}]`}
        </p>
      </div>
    );
  }
}
