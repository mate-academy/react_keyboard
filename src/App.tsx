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
        <p className="App__message">
          {this.state.key
            ? `The last pressed key is [${this.state.key}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
