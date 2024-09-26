import { Component } from 'react';

type Key = {
  key: string | null;
};

export class App extends Component {
  state: Readonly<Key> = {
    key: null,
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handlerKeyboardEvent);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handlerKeyboardEvent);
  }

  handlerKeyboardEvent = (event: KeyboardEvent) => {
    this.setState({ key: event.key });
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
