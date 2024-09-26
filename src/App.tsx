import { Component } from 'react';

export class App extends Component {
  state = {
    lastKeyPressed: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.keyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.keyPress);
  }

  keyPress = (event: KeyboardEvent) => {
    this.setState({ lastKeyPressed: event.key });
  };

  render() {
    const { lastKeyPressed } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {lastKeyPressed
            ? `The last pressed key is [${lastKeyPressed}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
