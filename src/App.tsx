import { Component } from 'react';

type State = {
  key: string
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    key: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.ListenerTypeKey());
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.ListenerTypeKey());
  }

  ListenerTypeKey = ():(event: KeyboardEvent) => void => {
    return (event: KeyboardEvent) => {
      this.setState({ key: event.key });
    };
  };

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {
            !this.state.key
              ? 'Nothing was pressed yet'
              : `The last pressed key is [${this.state.key}]`
          }
        </p>
      </div>
    );
  }
}
