import { Component } from 'react';

type State = {
  button: string;
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    button: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyup);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyup);
  }

  handleKeyup = (event: KeyboardEvent) => {
    this.setState({ button: event.key });
  };

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {this.state.button
            ? `The last pressed key is [${this.state.button}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
