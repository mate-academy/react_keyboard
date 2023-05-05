import { Component } from 'react';

type State = {
  keyPress: string,
};

export class App extends Component<{}, State> {
  state = {
    keyPress: '',
  };

  componentDidMount() {
    window.addEventListener('keyup', this.handleKeyup);
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.handleKeyup);
  }

  handleKeyup = (event: KeyboardEvent) => {
    this.setState({ keyPress: event.key });
  };

  render() {
    const { keyPress } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {
            keyPress
              ? `The last pressed key is [${keyPress}]`
              : 'Nothing was pressed yet'
          }
        </p>
      </div>
    );
  }
}
