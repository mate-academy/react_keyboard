import { Component } from 'react';

type State = {
  keyPressed: boolean;
  key: string;
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    keyPressed: false,
    key: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyPressed);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyPressed);
  }

  handleKeyPressed = (event: KeyboardEvent) => {
    this.setState({ keyPressed: true, key: event.key });
  };

  render() {
    const { key, keyPressed } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {keyPressed ? (
            `The last pressed key is [${key}]`
          ) : ('Nothing was pressed yet'
          )}
        </p>
      </div>
    );
  }
}
