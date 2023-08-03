import React from 'react';

type State = {
  pressKey: string;
};

export class App extends React.Component {
  state: State = {
    pressKey: '',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({ pressKey: event.key });
  };

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {this.state.pressKey
            ? `The last pressed key is [${this.state.pressKey}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
