import React from 'react';

interface State {
  key: string | null;
}

export class App extends React.PureComponent {
  state: State = {
    key: null,
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.componentEventCallback);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.componentEventCallback);
  }

  componentEventCallback = (event: KeyboardEvent) => {
    this.setState({ key: event.key });
  };

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {(this.state.key)
            ? `The last pressed key is [${this.state.key}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
