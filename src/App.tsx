import { Component } from 'react';

export class App extends Component {
  state = {
    pressedKey: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', (evnt: KeyboardEvent) => {
      this.setState({ pressedKey: evnt.key });
    });
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', (evnt: KeyboardEvent) => {
      this.setState({ pressedKey: evnt.key });
    });
  }

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {pressedKey
            ? `The last pressed key is [${pressedKey}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
