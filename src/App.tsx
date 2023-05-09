import { Component } from 'react';

interface State {
  key: string;
}

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    key: 'Nothing was pressed yet',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleDocumentPressedKey);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleDocumentPressedKey);
  }

  handleDocumentPressedKey = (event: KeyboardEvent) => {
    this.setState({ key: `The last pressed key is [${event.key}]` });
  };

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {this.state.key}
        </p>
      </div>
    );
  }
}
