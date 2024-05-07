import React from 'react';

type State = {
  str: string;
};

export class App extends React.Component<{}, State> {
  state: State = {
    str: '',
  };

  pressKeyHandler = (event: KeyboardEvent) => {
    this.setState({ str: event.key });
  };

  componentDidMount() {
    window.addEventListener('keyup', this.pressKeyHandler);
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.pressKeyHandler);
  }

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {this.state.str
            ? `The last pressed key is [${this.state.str}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
