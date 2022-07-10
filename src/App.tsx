import { Component } from 'react';

type State = {
  pressedKey: string,
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    pressedKey: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.documentKeyUp);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.documentKeyUp);
  }

  documentKeyUp = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        {!pressedKey
          ? <p>Nothing was pressed yet</p>
          : (
            <p>
              The last pressed key is
              <span className="key">{` ${pressedKey}`}</span>
            </p>
          )}
      </div>
    );
  }
}
