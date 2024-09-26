import React from 'react';

type State = {
  button: string;
  message: string;
}

export class App extends React.Component<State> {
  state: State = {
    button: '',
    message: ''
  }

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyUp);
    this.setState({ message: 'Nothing was pressed yet' });
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  handleKeyUp = (event: KeyboardEvent): void => {
    const { button } = this.state;
    if (event.key !== button) {
      this.setState({ button: event.key });
      this.setState({ message: `The last pressed key is [${event.key}]` });
    }
  };

  render() {
    const { message } = this.state;

    return (
      <div className="App">
        <p className="App__message">{message}</p>
      </div>
    )
  }
};
