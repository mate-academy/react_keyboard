import React from 'react';

interface Props {}
interface State {
  pressedKey: string;
}

export class App extends React.PureComponent<Props, State> {
  state: State = {
    pressedKey: '',
  };

  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  private renderMessage(): React.ReactNode {
    const { pressedKey } = this.state;

    if (pressedKey) {
      return (
        <p className="App__message">The last pressed key is [{pressedKey}]</p>
      );
    }

    return <p className="App__message">Nothing was pressed yet</p>;
  }

  render() {
    return <div className="App">{this.renderMessage()}</div>;
  }
}
