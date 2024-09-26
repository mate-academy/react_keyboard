import { Component } from 'react';

type State = {
  key: string;
};

export class App extends Component<{}, State> {
  state = {
    key: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', (e) => this.handleKey(e));
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKey);
  }

  handleKey(e: KeyboardEvent) {
    this.setState({ key: e.key });
  }

  render() {
    const { key } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {!key
            ? 'Nothing was pressed yet'
            : `The last pressed key is [${key}]`}
        </p>
      </div>
    );
  }
}
