import React from 'react';

type State = {
  key: string;
};

export class App extends React.Component<State> {
  state: State = {
    key: '',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({ key: event.key });
  };

  render() {
    return (
      <div className="App">

        {this.state.key ? (
          <p className="App__message">
            The last pressed key is [
            {this.state.key}
            ]
          </p>
        ) : (
          'Nothing was pressed yet'
        )}

      </div>
    );
  }
}
