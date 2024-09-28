import { Component } from 'react';

type State = {
  key: string,
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    key: '',
  };

  UNSAFE_componentWillMount() {
    document.removeEventListener('keyup', this.handlePressKey);
  }

  componentDidMount() {
    document.addEventListener('keyup', this.handlePressKey);
  }

  handlePressKey = (ev: KeyboardEvent) => {
    this.setState({ key: ev.key });
  };

  render() {
    const { key } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {key.length > 0
            ? `The last pressed key is [${key}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
