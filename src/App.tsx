import { Component } from 'react';

type Props = {
};

type State = {
  pressedKey: string,
};

export class App extends Component<Props, State> {
  state = {
    pressedKey: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.pressAnyKey);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.pressAnyKey);
  }

  pressAnyKey = (event: KeyboardEvent) => {
    this.setState({
      pressedKey: event.key,
    });
  };

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {this.state.pressedKey.length === 0
            ? 'Nothing was pressed yet'
            : `The last pressed key is < ${this.state.pressedKey} >`}
        </p>
      </div>
    );
  }
}
