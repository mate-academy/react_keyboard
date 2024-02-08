import { Component } from 'react';

type Props = {
  name: string;
};

type State = {
  pressedKey: string;
};

export class App extends Component<Props, State> {
  state: State = {
    pressedKey: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyPress);
  }

  handleKeyPress = (event: KeyboardEvent) => {
    this.setState({
      pressedKey: event.key,
    });
  };

  render() {
    const { pressedKey } = this.state;
    const { name } = this.props;

    return (
      <div className="App">
        {pressedKey ? (
          <p className="App__message">
            {`The last pressed key is [${pressedKey}]`}
          </p>
        ) : (
          <p className="App__message">
            {name}
          </p>
        )}
      </div>
    );
  }
}
