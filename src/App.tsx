import React from 'react';

export class App extends React.Component {
  state = {
    pressedKey: '',
    message: 'Nothing was pressed yet',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.keyPress);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.keyPress);
  }

  keyPress = (event: KeyboardEvent) => {
    this.setState({
      pressedKey: event.key,
      message: `The last pressed key is [${event.key}]`,
    });
  };

  render() {
    const { message } = this.state;

    return (
      <div className="App">
        <p className="App__message">{message}</p>
      </div>
    );
  }
}
