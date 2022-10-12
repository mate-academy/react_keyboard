import { Component } from 'react';

type State = {
  key: string | null;
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    key: '',
  };

  handleClick = (event: KeyboardEvent) => {
    this.setState({ key: event.key });
  };

  componentDidMount = () => {
    document.addEventListener('keyup', this.handleClick);
  };

  componentWillUnmount = () => {
    document.removeEventListener('keyup', this.handleClick);
  };

  render() {
    const { key } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {key
            ? `The last pressed key is ${key}`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
