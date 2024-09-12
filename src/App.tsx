import { Component } from 'react';

type State = {
  pressedKey: string,
};

export class App extends Component {
  state: Readonly<State> = {
    pressedKey: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.keyUp);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.keyUp);
  }

  keyUp = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  render(): React.ReactNode {
    const { pressedKey } = this.state;

    return (
      <div>
        {
          pressedKey
            ? `The last pressed key is ${pressedKey}`
            : 'Nothing was pressed yet'
        }
      </div>
    );
  }
}
