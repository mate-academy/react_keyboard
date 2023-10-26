import { Component } from 'react';

export class App extends Component {
  state = {
    pressedKey: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', (event: KeyboardEvent) => {
      this.setState({ pressedKey: event.key });
    });
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', () => {
      this.setState({ pressedKey: '' });;
    });
  }

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {this.state.pressedKey
          ? `The last pressed key is [${this.state.pressedKey}]`
          : 'Nothing was pressed yet'
        }
        </p>
      </div>
    );
  }
}


