import React from 'react';

export class App extends React.Component {
  state = {
    key: '',
  };

  componentDidMount() {
    document.addEventListener(
      'keydown', this.handleKeyDown as EventListener,
    );
  }

  componentWillUnmount() {
    document.removeEventListener(
      'keydown', this.handleKeyDown as EventListener,
    );
  }

  handleKeyDown = (event: KeyboardEvent) => {
    this.setState({ key: event.key });
  };

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {this.state.key
            ? `The last pressed key is [${this.state.key}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
