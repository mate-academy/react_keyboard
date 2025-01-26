import React from 'react';

type Props = {
  smth: string;
};

type State = {
  message: string;
  keyBoard: string;
};

export class App extends React.Component<Props, State> {
  state: State = {
    message: 'Nothing was pressed yet',
    keyBoard: '',
  };

  handleKeyUpdate = (event: KeyboardEvent) => {
    const key = event.key;

    if (key === this.state.keyBoard) {
      return;
    }

    this.setState({
      keyBoard: key,
      message: `The last pressed key is [${key}]`,
    });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', (event: KeyboardEvent) =>
      this.handleKeyUpdate(event),
    );
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyUpdate);
  }

  render() {
    return (
      <div className="App">
        <p className="App__message">{this.state.message}</p>
      </div>
    );
  }
}
