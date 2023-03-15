import { Component, ReactNode } from 'react';

type State = {
  key: string,
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    key: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.saveKey);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.saveKey);
  }

  saveKey = (event: KeyboardEvent) => {
    this.setState({ key: event.key });
  };

  render(): ReactNode {
    const { key } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {
            key
              ? `The last pressed key is [${key}]`
              : 'Nothing was pressed yet'
          }
        </p>
      </div>
    );
  }
}
