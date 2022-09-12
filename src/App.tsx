import { Component } from 'react';

type State = {
  button: string;
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    button: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyup);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyup);
  }

  handleKeyup = (event: KeyboardEvent) => {
    if (event.code === 'Space') {
      this.setState({
        button: event.code,
      });
    } else {
      this.setState({
        button: event.key,
      });
    }
  };

  render() {
    const { button } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {button
            ? `The last pressed key is [${button}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
