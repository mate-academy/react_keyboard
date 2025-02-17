import React from 'react';

type State = {
  pressedKey: string;
};

export class App extends React.Component {
  state: State = {
    pressedKey: '',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleClick);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleClick);
  }

  handleClick(event: KeyboardEvent): void {
    this.setState({ pressedKey: event.key });
  }

  handleRender(): string {
    const noClick = 'Nothing was pressed yet';
    const key = `The last pressed key is [${this.state.pressedKey}]`;

    return this.state.pressedKey === '' ? noClick : key;
  }

  render() {
    const message = this.handleRender();

    return (
      <div className="App">
        <p className="App__message">{message}</p>
      </div>
    );
  }
}
