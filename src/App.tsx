import { Component } from 'react';

type State = {
  keyPressed: string;
};

export class App extends Component<{}, State> {
  state = {
    keyPressed: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  handleKeyUp = (e: KeyboardEvent) => {
    this.setState({ keyPressed: e.key });
  };

  render() {
    const { keyPressed } = this.state;

    return (
      <div className="App">
        {
          keyPressed
            ? <p className="App__message">{`The last pressed key is [${keyPressed}]`}</p>
            : <p className="App__message">Nothing was pressed yet</p>
        }
      </div>
    );
  }
}
