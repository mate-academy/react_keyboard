import { Component } from 'react';

type State = {
  keyPressed: string;
};
export class App extends Component<{}, State> {
  state: Readonly<State> = {
    keyPressed: '',
  };

  componentDidMount() {
    document.addEventListener('keypress', this.handleKeypress);
  }

  componentWillUnmount() {
    document.removeEventListener('keypress', this.handleKeypress);
  }

  handleKeypress = (event: KeyboardEvent) => {
    this.setState({ keyPressed: event.key });
  };

  render() {
    const { keyPressed } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {keyPressed
            ? `The last pressed key is [${keyPressed}]`
            : 'The lastNothing was pressed yet'}
        </p>
      </div>
    );
  }
}
