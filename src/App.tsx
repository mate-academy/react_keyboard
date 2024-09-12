import { Component } from 'react';

export class App extends Component {
  state = {
    key: null,
  };

  message = 'Nothing was pressed yet';

  componentDidMount(): void {
    document.addEventListener('keyup', this.keyboardHandler);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.keyboardHandler);
  }

  keyboardHandler = (event: KeyboardEvent): void => {
    const x = event.key === ' ' ? 'Space' : event.key;

    this.setState({ key: x });
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
