import { Component } from 'react';

export class App extends Component {
  state = {
    pressedKey: 'Nothing was pressed yet',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.getPressedKey);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.getPressedKey);
  }

  getPressedKey = (event: KeyboardEvent) => {
    this.setState({ pressedKey: `The last pressed key is [${event.key}]` });
  };

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {this.state.pressedKey}
        </p>
      </div>
    );
  }
}
