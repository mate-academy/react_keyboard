import { Component } from 'react';

type State = {
  key: string | null
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    key: null,
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleClick);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleClick);
  }

  handleClick = (event: KeyboardEvent) => {
    this.setState({ key: event.key });
  };

  render() {
    const keyInfo = this.state.key
      ? `The last pressed key is [${this.state.key}]`
      : 'Nothing was pressed yet';

    return (
      <div className="App">
        <p className="App__message">{keyInfo}</p>
      </div>
    );
  }
}
