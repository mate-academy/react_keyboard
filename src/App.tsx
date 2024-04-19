import React from 'react';

type State = {
  keyPressed: string;
};

export class App extends React.Component<{}, State> {
  state = {
    keyPressed: '',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', (event: KeyboardEvent) => {
      this.setState({ keyPressed: event.key });
    });
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', (event: KeyboardEvent) => {
      this.setState({ keyPressed: event.key });
    });
  }

  render() {
    const { keyPressed } = this.state;

    return (
      <div className="App">
        {keyPressed ? (
          <p className="App__message">The last pressed key is [{keyPressed}]</p>
        ) : (
          <p className="App__message">Nothing was pressed yet</p>
        )}
      </div>
    );
  }
}
