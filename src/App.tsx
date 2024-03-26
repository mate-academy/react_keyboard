import React from 'react';

export class App extends React.Component {
  state = {
    pressedKey: false,
  };

  handleKeyborad = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyborad);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyborad);
  }

  render() {
    return (
      <div className="App">
        {this.state.pressedKey ? (
          <p className="App__message">
            The last pressed key is [{this.state.pressedKey}]
          </p>
        ) : (
          <p className="App__message">Nothing was pressed yet</p>
        )}
      </div>
    );
  }
}
