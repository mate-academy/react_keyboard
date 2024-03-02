import React from 'react';

type State = {
  key: string;
};

export class App extends React.Component {
  state: Readonly<State> = {
    key: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyup);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyup);
  }

  handleKeyup = (event: KeyboardEvent) => {
    this.setState({ key: event.key });
  };

  render() {
    const text = this.state.key.length > 0
      ? `The last pressed key is [${this.state.key}]`
      : 'Nothing was pressed yet';

    return (
      <div className="App">
        <p className="App__message">
          {text}
        </p>
      </div>
    );
  }
}
