import React from 'react';

type State = {
  key: '' | null;
};

export class App extends React.Component {
  state: State = {
    key: null,
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
        {!this.state.key ? (
          <p className="App__message">Nothing was pressed yet</p>
        ) : (
          <p className="App__message">
            The last pressed key is [
            {this.state.key}
            ]
          </p>
        )}
      </div>
    );
  }
}
