import { Component } from 'react';

type State = {
  letter: string,
};

export class App extends Component<{}, State> {
  state = {
    letter: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', (event) => {
      this.setState({ letter: event.key });
    });
  }

  render() {
    const { letter } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {`The last pressed key is [${letter}]`}
        </p>
      </div>
    );
  }
}
