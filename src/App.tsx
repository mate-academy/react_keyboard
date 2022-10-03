import React from 'react';

type State = {
  key: string | null,
  callback: Function,
}

export class App extends React.Component<{}, State>{
  state = {
    key: null,
    callback: (event: KeyboardEvent) => {
      this.setState({ key: event.key })
    },
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.state.callback);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.state.callback);
  }

  render(): React.ReactNode {
    return (
      <div className="App">
        <p className="App__message">
          {this.state.key ? (
            `The last pressed key is [${this.state.key}]`
          ) : (
            `Nothing was pressed yet`
          )}
          </p>
      </div>
    )
  };
}
