import { Component } from 'react';

type State = {
  key: string,
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    key: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.pressKey);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.pressKey);
  }

  pressKey = (event: KeyboardEvent) => {
    this.setState({ key: event.key });
    if (event.key === ' ') {
      this.setState({ key: 'Space' });
    }
  };

  render() {
    const { key } = this.state;

    return (
      <div className="App">
        {key.length === 0
          ? (
            <p className="paragraph">
              Nothing was pressed yet
            </p>
          )

          : (
            <p className="ourKey">
              The last pressed key is:
              <div className="key">
                {key}
              </div>
            </p>
          )}
      </div>
    );
  }
}
