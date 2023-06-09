import { Component } from 'react';

type State = {
  event: string | null;
};

export class App extends Component<{}, State> {
  state = {
    event: null,
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyboardKey);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyboardKey);
  }

  handleKeyboardKey = (event: KeyboardEvent) => {
    this.setState({ event: event.key });
  };

  render() {
    const { event } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {
            event
              ? `The last pressed key is [${event}]`
              : 'Nothing was pressed yet'
          }
        </p>
      </div>
    );
  }
}
