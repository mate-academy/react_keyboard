import { Component } from 'react';

type State = {
  key: string;
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    key: '',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleDocumentClick);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleDocumentClick);
  }

  handleDocumentClick = (event: KeyboardEvent) => {
    this.setState({ key: event.key });
  };

  render() {
    const { key } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {
            key
              ? `The last pressed key is [${key}]`
              : 'Nothing was pressed yet'
          }
        </p>
      </div>
    );
  }
}
