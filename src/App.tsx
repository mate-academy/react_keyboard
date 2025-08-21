import React from 'react';

export class App extends React.Component {
  state = {
    message: 'Nothing was pressed yet',
    pressedKey: '',
  };

  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({
      pressedKey: event.key,
      message: `The last pressed key is `,
    });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  render() {
    const { message, pressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {message} {pressedKey}
        </p>
      </div>
    );
  }
}
