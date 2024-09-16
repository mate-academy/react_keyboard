import { Component } from 'react';

type State = {
  key: string,
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    key: 'Nothing was pressed yet',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  handleKeyUp = (e: KeyboardEvent) => {
    if (e) {
      this.setState({ key: `The last pressed key is [${e.key}]` });
    }
  };

  render() {
    const { key } = this.state;

    return (
      <div className="App">
        <p className="App__message">{key}</p>
      </div>
    );
  }
}
