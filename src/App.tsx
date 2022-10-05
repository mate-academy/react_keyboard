import React from 'react';

type State = {
  key: string | null,
};

export class App extends React.Component<{}, State> {
  state = {
    key: null,
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.keyHandlerCallback);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.keyHandlerCallback);
  }

  keyHandlerCallback = (event: KeyboardEvent) => {
    this.setState({ key: event.key });
  };

  render(): React.ReactNode {
    return (
      <div className="App">
        <p className="App__message">
          {this.state.key ? (
            `The last pressed key is [${this.state.key}]`
          ) : (
            'Nothing was pressed yet'
          )}
        </p>
      </div>
    );
  }
}
