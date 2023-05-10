import { Component } from 'react';

interface State {
  keyPressed: string;
}

export class App extends Component<{}, State> {
  state = {
    keyPressed: 'Nothing was pressed yet',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleDocumentPressedKey);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleDocumentPressedKey);
  }

  handleDocumentPressedKey = (event: KeyboardEvent) => {
    this.setState({ keyPressed: `The last pressed key is [${event.key}]` });
  };

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {this.state.keyPressed }
        </p>
      </div>
    );
  }
}
