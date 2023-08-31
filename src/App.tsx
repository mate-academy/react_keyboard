import React from 'react';

export class App extends React.Component {
  state = {
    key: '',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyPressed);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyPressed);
  }

  handleKeyPressed = (event: KeyboardEvent) => {
    this.setState({
      key: event.key,
    });
  };

  render() {
    return (
      <div className="App">
        {this.state.key !== ''
          ? (
            <p className="App__message">
              The last pressed key is [
              {this.state.key}
              ]
            </p>
          )
          : (
            <p className="App__message">
              Nothing was pressed yet
            </p>
          )}
      </div>
    );
  }
}
