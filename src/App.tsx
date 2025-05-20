import React from 'react';

type State = {
  key: string;
};

export class App extends React.Component {
  state: State = {
    key: '',
  };

  pressedHandler = (event: KeyboardEvent) => {
    this.setState({ key: event.key });
  };

  componentDidMount() {
    window.addEventListener('keyup', this.pressedHandler);
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.pressedHandler);
  }

  render() {
    return (
      <div className="App">
        {this.state.key !== '' ? (
          <p className="App__message">
            The last pressed key is [{this.state.key}]
          </p>
        ) : (
          <p className="App__message">Nothing was pressed yet</p>
        )}
      </div>
    );
  }
}
