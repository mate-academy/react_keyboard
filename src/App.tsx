import React from 'react';

type MyProps = {};

type MyState = {
  letter: string;
};

export class App extends React.Component<MyProps, MyState> {
  state = {
    letter: '',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', (event: KeyboardEvent) => {
      this.setState({ letter: event.key });
    });
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', (event: KeyboardEvent) => {
      this.setState({ letter: event.key });
    });
  }

  render() {
    return (
      <div className="App">
        {this.state.letter
          ? <p className="App__message">{`The last pressed key is [${this.state.letter}]`}</p>
          : <p className="App__message">Nothing was pressed yet</p>}
      </div>
    );
  }
}
