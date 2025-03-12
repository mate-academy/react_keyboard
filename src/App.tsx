import React from 'react';

type State = {
  pressedKey: null | string;
};

export class App extends React.Component {
  state: State = {
    pressedKey: null,
  };

  constructor(props: Record<string, unknown>) {
    super(props);
    this.handleKey = this.handleKey.bind(this);
  }

  handleKey(event: KeyboardEvent) {
    this.setState({ pressedKey: event.key });
  }

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKey);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKey);
  }

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {this.state.pressedKey === null && 'Nothing was pressed yet'}
          {this.state.pressedKey !== null &&
            `The last pressed key is [${this.state.pressedKey}]`}
        </p>
      </div>
    );
  }
}
