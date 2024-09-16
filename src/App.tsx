import { Component } from 'react';

export class App extends Component {
  state = {
    pressedKey: '',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handlePressedKey);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handlePressedKey);
  }

  handlePressedKey = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {pressedKey.length > 0 ? (
            `The last pressed key is [${pressedKey}]`
          ) : (
            'Nothing was pressed yet'
          )}
        </p>
      </div>
    );
  }
}
