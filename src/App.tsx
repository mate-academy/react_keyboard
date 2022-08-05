import { Component } from 'react';

type State = {
  keyPressed: string;
};

export class App extends Component<{}, State> {
  state = {
    keyPressed: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyPress);
  }

  handleKeyPress = (event: KeyboardEvent) => {
    this.setState({
      keyPressed: event.code === 'Space'
        ? 'Space'
        : event.key,
    });
  };

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {this.state.keyPressed
            ? `The last pressed key is [${this.state.keyPressed}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
