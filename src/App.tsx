import { Component } from 'react';

type State = {
  presedKey: string
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    presedKey: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.documentKeyUp);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.documentKeyUp);
  }

  documentKeyUp = (event: KeyboardEvent) => {
    this.setState({ presedKey: event.key });
  };

  render() {
    const { presedKey } = this.state;

    return (
      <div className="App">
        { presedKey ? (
          <p className="App__message">
            The last pressed key is
            [
            {
              presedKey
            }
            ]
          </p>
        ) : (
          <p className="App__message">Nothing was pressed yet</p>
        )}
      </div>
    );
  }
}
