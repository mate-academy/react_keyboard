import React from 'react';

type State = {
  key: null | string
};

export class App extends React.Component<{}, State> {
  state = {
    key: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.keyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.keyPress);
  }

  keyPress = (event: KeyboardEvent) => {
    this.setState({ key: event.key });
  };

  render() {
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
