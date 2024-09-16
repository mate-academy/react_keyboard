import { Component } from 'react';

type State = {
  keyName: string;
};

export class App extends Component<{}, State> {
  state: State = {
    keyName: '',
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress = (event: KeyboardEvent) => {
    this.setState({
      keyName: event.key,
    });
  };

  render() {
    const { keyName } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {keyName
            ? `The last pressed key is [${keyName}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
