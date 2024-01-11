import React from 'react';

export class App extends React.Component {
  state = {
    key: null,
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyEvent);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyEvent);
  }

  handleKeyEvent = (e: KeyboardEvent) => {
    e.preventDefault();
    this.setState({ key: e.key });
  };

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {!this.state.key
            ? 'Nothing was pressed yet' : `The last pressed key is [${this.state.key}]`}
        </p>
      </div>
    );
  }
}
