import React from 'react';

type State = {
  key: null | string;
};

export class App extends React.Component<{}, State> {
  state: State = {
    key: null,
  };

  onKeyboardPress = (event: KeyboardEvent) => {
    this.setState({ key: event.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.onKeyboardPress);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.onKeyboardPress);
  }

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {!this.state.key
            ? 'Nothing was pressed yet'
            : `The last pressed key is [${this.state.key}]`}
        </p>
      </div>
    );
  }
}
