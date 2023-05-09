import { Component } from 'react';

interface State {
  keyPressed: string,
}

export class App extends Component<{}, State> {
  state = {
    keyPressed: '',
  };

  componentDidMount() {
    window.addEventListener('keyup', this.handleKeyup);
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.handleKeyup);
  }

  handleKeyup = (event: KeyboardEvent) => {
    this.setState({ keyPressed: event.key });
  };

  render() {
    const { keyPressed } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {
            keyPressed
              ? `The last pressed key is [${keyPressed}]`
              : 'Nothing was pressed yet'
          }
        </p>
      </div>
    );
  }
}
