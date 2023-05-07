import { Component } from 'react';

type State = {
  key: string | null,
};

export class App extends Component<{}, State> {
  state = {
    key: null,
  };

  componentDidMount(): void {
    document.addEventListener('keyup', (e) => {
      const keyUp = e.key;
      const key = `The last pressed key is ${keyUp}`;

      this.setState({ key });
    });
  }

  render() {
    const { key } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {key === null ? 'nothing was pressed yet' : key }
        </p>
      </div>
    );
  }
}
