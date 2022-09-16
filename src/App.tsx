import { Component } from 'react';

type State = {
  key: string;
};

export class App extends Component<{}, State> {
  state = {
    key: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.keyPressed);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.keyPressed);
  }

  keyPressed = (event: KeyboardEvent) => {
    if (event.key) {
      this.setState({ key: event.key });
    }
  };

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {
            this.state.key
              ? `The last pressed key is [${this.state.key}]`
              : 'Nothing was pressed yet'
          }
        </p>
      </div>
    );
  }
}
