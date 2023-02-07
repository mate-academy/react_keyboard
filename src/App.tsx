import React from 'react';

export class App extends React.Component {
  state = {
    pressedKey: null,
  };

  // eslint-disable-next-line react/sort-comp
  handleDocumentClick = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleDocumentClick);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleDocumentClick);
  }

  render() {
    if (!this.state.pressedKey) {
      return (
        <div className="App">
          <p className="App__message">Nothing was pressed yet</p>
        </div>
      );
    }

    return (
      <div className="App">
        <p className="App__message">
          The last pressed key is
          [
          {this.state.pressedKey}
          ]
        </p>
      </div>
    );
  }
}
