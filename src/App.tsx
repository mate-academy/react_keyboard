import React from 'react';

type State = {
  pressedKey: string;
};

export class App extends React.Component<State> {
  state = {
    preseedKey: '',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({ preseedKey: event.key });
  };

  render() {
    const { preseedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {preseedKey !== ''
            ? `The last pressed key is [${preseedKey}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
