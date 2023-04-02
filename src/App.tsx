import { Component } from 'react';

type State = {
  key: string,
};

export class App extends Component<{}, State> {
  state = {
    key: 'Nothing was pressed yet',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleDocumentClick);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleDocumentClick);
  }

  handleDocumentClick = (event: KeyboardEvent) => {
    this.setState({ key: `The last pressed key is [${event.key}]` });
  };

  render() {
    const { key } = this.state;

    return (
      <div className="App">
        <p className="App__message">{key}</p>
      </div>
    );
  }
}
