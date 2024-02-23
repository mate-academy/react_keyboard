import React from 'react';

type State = {
  key: string;
};

export class App extends React.Component<{}, State> {
  state: State = {
    key: '',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', (event: KeyboardEvent) => {
      this.setState({ key: event.key });
    });
  }

  renderMessage = () => {
    if (this.state.key !== '') {
      return `The last pressed key is [${this.state.key}]`;
    }

    return 'Nothing was pressed yet';
  };

  render() {
    return (
      <div className="App">
        <p className="App__message">{this.renderMessage()}</p>
      </div>
    );
  }
}
