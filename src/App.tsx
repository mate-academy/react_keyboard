import React from 'react';

export class App extends React.Component {
  state = { keyPressed: '' };

  updateLastKeyPressed = (event: KeyboardEvent) => {
    this.setState({ keyPressed: event.key });
  };

  componentDidMount() {
    document.addEventListener('keyup', this.updateLastKeyPressed);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.updateLastKeyPressed);
  }

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {this.state.keyPressed
            ? `The last pressed key is [${this.state.keyPressed}]`
            : `Nothing was pressed yet`}
        </p>
      </div>
    );
  }
}
