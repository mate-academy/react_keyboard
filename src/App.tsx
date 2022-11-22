import { Component } from 'react';

type State = {
  handleKeyPress: string
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    handleKeyPress: '',
  };

  componentDidMount() {
    document.addEventListener('keydown', this.onKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyDown);
  }

  onKeyDown = (event: KeyboardEvent) => {
    const handleKey = event.key;

    this.setState({ handleKeyPress: handleKey });
  };

  render() {
    const { handleKeyPress: handleKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {
            handleKey
              ? `The last pressed key is [${handleKey}]`
              : 'Nothing was pressed yet'
          }
        </p>
      </div>
    );
  }
}
