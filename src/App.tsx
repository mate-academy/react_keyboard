import React from 'react';

type State = {
  key: string;
};

export class App extends React.Component<{}, State> {
  state: State = {
    key: '',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeySet);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeySet);
  }

  handleKeySet = (event: KeyboardEvent) => {
    event.stopPropagation();
    this.setState({ key: event.key });
  };

  render(): React.ReactNode {
    return (
      <div className="App">
        <p className="App__message">
          {this.state.key
            ? `The last pressed key is [${this.state.key}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
