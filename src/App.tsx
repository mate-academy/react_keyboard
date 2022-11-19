import { Component } from 'react';

type State = {
  key: string;
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    key: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyboardEvent);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyboardEvent);
  }

  handleKeyboardEvent = (event: KeyboardEvent) => {
    this.setState({ key: event.key });
  };

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {
            !this.state.key.length
              ? 'Nothing was pressed yet'
              : `The last pressed key is [${this.state.key}]`
          }
        </p>
      </div>
    );
  }
}
