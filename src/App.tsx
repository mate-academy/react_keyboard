import React from 'react';

type State = {
  key: string | null;
};

const DEFAULT_MESSAGE = 'Nothing was pressed yet';

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
        <p className="App__message">
          {this.state.key
            ? `The last pressed key is [${this.state.key}]`
            : DEFAULT_MESSAGE}
        </p>
      </div>
    );
  }
}
