import React from 'react';

export class App extends React.Component {
  state = {
    lastKey: '',
  };

  handleKeyup = (event: KeyboardEvent) => {
    this.setState({ lastKey: event.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyup);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyup);
  }

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {this.state.lastKey
            ? `The last pressed key is [${this.state.lastKey}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
