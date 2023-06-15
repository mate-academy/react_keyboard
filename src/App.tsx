import { Component } from 'react';

type State = {
  keyNow: string | null;
};

export class App extends Component<{}, State> {
  state = {
    keyNow: null,
  };

  componentDidMount() {
    document.addEventListener('keyup', this.keyUp);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.keyUp);
  }

  keyUp = (event: KeyboardEvent) => {
    this.setState({ keyNow: event.key });
  };

  render() {
    const { keyNow } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {keyNow ? `The last pressed key is [${keyNow}]` : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
