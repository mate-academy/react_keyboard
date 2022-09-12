import { Component } from 'react';

type State = {
  pressedButton: string;
};

interface Props {

}

export class App extends Component<Props, State> {
  state: Readonly<State> = {
    pressedButton: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyup);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyup);
  }

  handleKeyup = (event: KeyboardEvent): void => {
    this.setState({ pressedButton: event.key });

    if (this.state.pressedButton === ' ') {
      this.setState({ pressedButton: 'space' });
    }
  };

  render() {
    const { pressedButton } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {
            !this.state.pressedButton
              ? ('Nothing was pressed yet')
              : (`The last pressed key is [${pressedButton}]`)
          }
        </p>
      </div>
    );
  }
}
