/* eslint-disable no-console */
import React from 'react';

type State = {
  key: string;
};

export class App extends React.Component {
  state: State = {
    key: '',
  };

  handleKeyClick = (event: KeyboardEvent) => {
    this.setState({ key: event.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyClick);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyClick);
  }

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {!this.state.key
            ? 'Nothing was pressed yet'
            : `The last pressed key is [${this.state.key}]`}
        </p>
        <p className="App__message"></p>
      </div>
    );
  }
}
