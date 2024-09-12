import React from 'react';

export class App extends React.Component {
  state = {
    message: '',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({ message: event.key });
  };

  render() {
    const { message } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {message ? `The last pressed key is [${message}]` : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
