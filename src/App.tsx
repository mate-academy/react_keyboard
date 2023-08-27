/* eslint-disable react/prefer-stateless-function */
import React from 'react';

export class App extends React.Component {
  state = {
    keyPressed: undefined,
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyPressed);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyPressed);
  }

  handleKeyPressed = (event: KeyboardEvent) => {
    this.setState({ keyPressed: event.key });
  };

  render() {
    if (this.state.keyPressed) {
      return (
        <div className="App">
          <p className="App__message">
            The last pressed key is
            {` [${this.state.keyPressed}]`}
          </p>
        </div>
      );
    }

    return (
      <div className="App">
        <p className="App__message">Nothing was pressed yet</p>
      </div>
    );
  }
}
