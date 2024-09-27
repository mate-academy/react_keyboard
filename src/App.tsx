import { Component } from 'react';

type State = {
  pressedkey: string | null;
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    pressedkey: null,
  };

  componentDidMount() {
    document.addEventListener('keyup', this.showLastKey);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.showLastKey);
  }

  showLastKey = (event: KeyboardEvent) => {
    this.setState({ pressedkey: event.key });
  };

  render() {
    const { pressedkey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {(pressedkey
            ? `The last pressed key is [${pressedkey}]`
            : 'Nothing was pressed yet'
          )}
        </p>
      </div>
    );
  }
}
