import React from 'react';

export class App extends React.Component {
  state = {
    lastKey: '',
    listener: (event: KeyboardEvent) => {
      this.setState({ lastKey: event.key });
    },
  };

  componentDidMount() {
    document.addEventListener('keyup', this.state.listener);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.state.listener);
  }

  render() {
    return (
      <div
        className="App"
      >
        {this.state.lastKey
          ? <p className="App__message">{`The last pressed key is [${this.state.lastKey}]`}</p>
          : <p className="App__message">Nothing was pressed yet</p>}
      </div>
    );
  }
}
