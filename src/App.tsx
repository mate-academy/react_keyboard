import { Component } from 'react';

export class App extends Component {
  state = {
    key: '',
  };

  keydownHandler = (event: KeyboardEvent) => {
    this.setState({ key: event.key });
  };

  componentDidMount() {
    document.addEventListener('keyup', this.keydownHandler);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.keydownHandler);
  }

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
