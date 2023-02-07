import React from 'react';

export class App extends React.Component {
  state = {
    pressedKey: null,
  };

  // eslint-disable-next-line react/sort-comp
  handleDocumentClick = (event: KeyboardEvent) => {
    this.setState({ pressedKey: `The last pressed key is [${event.key}]` });
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleDocumentClick);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleDocumentClick);
  }

  render() {
    if (!this.state.pressedKey) {
      this.setState({ pressedKey: 'Nothing was pressed yet' });
    }

    return (
      <div className="App">
        <p className="App__message">{this.state.pressedKey}</p>
      </div>
    );
  }
}
