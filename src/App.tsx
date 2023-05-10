import React from 'react';

interface State {
  input: string | null,
}

export class App extends React.Component<{}, State> {
  state = {
    input: null,
  };

  componentDidMount(): void {
    document.addEventListener('keyup', (event: KeyboardEvent) => {
      this.setState({ input: event.key });
    });
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', (event: KeyboardEvent) => {
      this.setState({ input: event.key });
    });
  }

  render() {
    const { input } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {!input
            ? 'Nothing was pressed yet'
            : `The last pressed key is [${input}]`}
        </p>
      </div>
    );
  }
}
