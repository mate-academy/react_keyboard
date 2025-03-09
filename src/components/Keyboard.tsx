import React from 'react';

type State = {
  key: string;
};

export class Keyboard extends React.Component<{}, State> {
  state: Readonly<State> = {
    key: '',
  };

  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({ key: event.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  render() {
    const isStart = this.state.key === '';
    const message = isStart
      ? 'Nothing was pressed yet'
      : `The last pressed key is [${this.state.key}]`;

    return (
      <div className="App">
        <p className="App__message">{message}</p>
      </div>
    );
  }
}
