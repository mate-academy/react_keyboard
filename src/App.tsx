import { Component } from 'react';

type Props = {
};

type State = {
  pressedKey: string | null,
};

export class App extends Component<Props, State> {
  state = {
    pressedKey: null,
  };

  componentDidMount() {
    document.addEventListener('keyup', this.pressAnyKey);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.pressAnyKey);
  }

  pressAnyKey = (event: KeyboardEvent) => {
    this.setState({
      pressedKey: event.code === 'Space' ? 'Space' : event.key,
    });
  };

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {this.state.pressedKey === null
            ? 'Nothing was pressed yet'
            : `The last pressed key is [${this.state.pressedKey}]`}
        </p>
      </div>
    );
  }
}
