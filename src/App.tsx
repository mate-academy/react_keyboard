import { Component } from 'react';

type State = {
  keyName: string;
};

export class App extends Component<{}, State> {
  state = {
    keyName: '',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleDocumentClick);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleDocumentClick);
  }

  handleDocumentClick = (event: KeyboardEvent) => {
    this.setState({ keyName: event.key });
  };

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {this.state.keyName ? (
            `The last pressed key is [${this.state.keyName}]`
          ) : (
            'Nothing was pressed yet'
          )}
        </p>
      </div>
    );
  }
}
