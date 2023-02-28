import React from 'react';

export class App extends React.Component<{}, {}> {
  state = {
    message: 'Nothing was pressed yet',
  };

  componentDidMount() {
    document.addEventListener('keyup', ev => this.handler(ev));
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', ev => this.handler(ev));
  }

  handler(ev: KeyboardEvent) {
    this.setState({ message: `The last pressed key is [${ev.key}]` });
  }

  render() {
    return (
      <div className="App">
        <p className="App__message">{this.state.message}</p>
      </div>
    );
  }
}
