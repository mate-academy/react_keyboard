import React from 'react';

type State = {
  message: string,
};

export class App extends React.Component<{}, State> {
  state: State = {
    message: '',
  };

  componentDidMount(): void {
    this.setState({ message: 'Nothing was pressed yet' });
  }

  componentDidUpdate(): void {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({ message: `The last pressed key is [${event.key}]` });
  };

  render() {
    return (
      <div className="App">
        <p className="App__message">{this.state.message}</p>
      </div>
    );
  }
}
