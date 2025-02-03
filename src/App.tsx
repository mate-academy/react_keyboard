import { Component } from 'react';

type State = {
  keyboardKey: string;
};

export class App extends Component<State> {
  state: State = {
    keyboardKey: '',
  };

  handleKey = (e: KeyboardEvent) => {
    this.setState({ keyboardKey: e.key });
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleKey);
  }

  componentWillUnmount() {
    document.addEventListener('keydown', this.handleKey);
  }

  render() {
    const { keyboardKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {keyboardKey
            ? `The last pressed key is [${keyboardKey}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
