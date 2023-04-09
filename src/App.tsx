import { Component } from 'react';

type State = {
  currentKey: string | null,
};

export class App extends Component<{}, State> {
  state = {
    currentKey: null,
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleDocumentKey);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleDocumentKey);
  }

  handleDocumentKey = (event: KeyboardEvent) => {
    this.setState({ currentKey: event.key });
  };

  render() {
    const { currentKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {currentKey
            ? `The last pressed key is [${currentKey}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
