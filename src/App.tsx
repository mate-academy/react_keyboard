import React from 'react';

export class App extends React.Component {
  state = {
    keys: 0,
  };

  componentDidMount() {
    document.addEventListener('keyup', (event: KeyboardEvent) => {
      this.setState({ keys: event.key });
    });
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', (event: KeyboardEvent) => {
      this.setState({ keys: event.key });
    });
  }

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {!this.state.keys
            ? 'Nothing was pressed yet'
            : `The last pressed key is [${this.state.keys}]`}
        </p>
      </div>
    );
  }
}
