import { Component } from 'react';

type State = {
  phrase: string,
};

export class App extends Component<{}, State> {
  state = {
    phrase: '',
  };

  componentDidMount() {
    this.setState({ phrase: 'Nothing was pressed yet' });

    document.addEventListener('keydown', (event: KeyboardEvent) => {
      this.handleClickButton(event);
    });
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleClickButton);
  }

  handleClickButton(event: KeyboardEvent) {
    this.setState({ phrase: `The last pressed key is [${event.key}]` });
  }

  render() {
    const { phrase } = this.state;

    return (
      <div className="App">
        <p className="App__message">{phrase}</p>
      </div>
    );
  }
}
