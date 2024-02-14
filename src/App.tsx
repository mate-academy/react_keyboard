import { Component } from 'react';

type State = {
  key: string;
};

export class App extends Component {
  state: Readonly<State> = {
    key: '',
  };

  componentDidMount() {
    window.addEventListener('keyup', this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.handleKeyPress);
  }

  handleKeyPress = (event: KeyboardEvent) => {
    this.setState({ key: event.key });
  };

  render() {
    let message = 'Nothing was pressed yet';

    if (this.state.key !== '') {
      message = `The last pressed key is [${this.state.key}]`;
    }

    return (
      <div className="App">
        <p className="App__message">{message}</p>
      </div>
    );
  }
}
