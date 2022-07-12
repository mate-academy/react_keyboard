import { Component } from 'react';

type State = {
  tuch: boolean,
  key: boolean,
  n: string,
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    tuch: true,
    key: false,
    n: 'Press any key',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.pressKey);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.pressKey);
  }

  pressKey = (event: KeyboardEvent) => {
    this.setState({ tuch: false });
    this.setState({ key: true });
    this.setState({ n: event.key });
    if (event.key === ' ') {
      this.setState({ n: 'Space' });
    }
  };

  render() {
    const { tuch, key, n } = this.state;

    return (
      <div className="App">
        <p className="paragraph">
          {tuch && 'Nothing was pressed yet'}
        </p>
        <p className="ourKey">
          {key && 'The last pressed key is:'}
          <div className="key">
            {n}
          </div>
        </p>
      </div>
    );
  }
}
