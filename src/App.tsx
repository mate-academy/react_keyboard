import { Component } from 'react';

export class App extends Component {
  state = {
    pressedKey: '',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handlerKeyboardClick);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handlerKeyboardClick);
  }

  handlerKeyboardClick = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {pressedKey
            ? (`The last pressed key is [${pressedKey}]`)
            : ('Nothing was pressed yet')}
        </p>
      </div>
    );
  }
}
