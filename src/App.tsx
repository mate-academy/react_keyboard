import { Component } from 'react';

type State = {
  key: string;
};

export class App extends Component<State> {
  state: State = {
    key: '',
  };

  handlePressKey = (event: KeyboardEvent) => {
    this.setState({ key: event.key });
  };

  componentDidMount() {
    window.addEventListener('keyup', this.handlePressKey);
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.handlePressKey);
  }

  render() {
    const { key } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {key ? `The last pressed key is [${key}]` : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
