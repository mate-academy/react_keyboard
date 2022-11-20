import React from 'react';

export class App extends React.Component {
  state = {
    currentChar: 'Nothing was pressed yet',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', (event: KeyboardEvent) => {
      this.setState({ currentChar: `The last pressed key is [${event.key}]` });
    });
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', () => {
      this.setState({ currentChar: 'Nothing was pressed yet' });
    });
  }

  render() {
    return (
      <div className="App">
        <p className="App__message">{this.state.currentChar}</p>
      </div>
    );
  }
}
