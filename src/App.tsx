import { Component } from 'react';

type State = {
  key?: string,
};

export class App extends Component<{}, State> {
  state: State = {
  };

  componentDidMount() {
    document.addEventListener('keyup', this.listener);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.listener);
  }

  listener = (event: KeyboardEvent) => {
    if (event.code === 'Space') {
      this.setState({ key: 'Space' });
    } else {
      this.setState({ key: event.key });
    }
  };

  render() {
    const { key } = this.state;

    return (
      <div className="App">
        <p>{key ? `The last pressed key is [${key}]` : 'Nothing was pressed yet'}</p>
      </div>
    );
  }
}
