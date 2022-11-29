import { Component } from 'react';

export class App extends Component {
  state = {
    pressedKey: '',
  };

  UNSAFE_componentWillMount() {
    document.removeEventListener('keyup', this.pressing);
  }

  componentDidMount() {
    document.addEventListener('keyup', this.pressing);
  }

  pressing = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  render() {
    return (
      <div className="App">
        <p className="App_message">
          {this.state.pressedKey
            ? `The last pressed key is [${this.state.pressedKey}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
