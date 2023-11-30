import { Component } from 'react';

type State = {
  pressedButton: string,
};

export class App extends Component<{}, State> {
  state = {
    pressedButton: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleDocClick);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleDocClick);
  }

  handleDocClick = (ev: KeyboardEvent) => {
    this.setState({ pressedButton: ev.key });
  };

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {this.state.pressedButton
            ? `The last pressed key is [${this.state.pressedButton}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
