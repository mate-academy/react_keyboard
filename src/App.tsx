import React from 'react';

type State = {
  key: string;
};

export class App extends React.PureComponent<{}, State> {
  state: State = {
    key: '',
  };

  keyPressed: boolean = false;

  handleKeyboardClick = (event: KeyboardEvent) => {
    this.setState({ key: event.key });
    if (!this.keyPressed) {
      this.keyPressed = true;
    }
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyboardClick);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyboardClick);
  }

  render() {
    const { key } = this.state;

    return (
      <div className="App">
        {this.keyPressed ? (
          <p className="App__message">The last pressed key is [{key}]</p>
        ) : (
          <p className="App__message">Nothing was pressed yet</p>
        )}
      </div>
    );
  }
}
