import React from 'react';

interface State {
  pressed: boolean,
  key: null | string
}

export class App extends React.Component<{}, State> {
  state = {
    pressed: false,
    key: null,
  };

  handelKey = (event: KeyboardEvent) => {
    this.setState({ pressed: true, key: event.key });
  };

  componentDidMount = () => {
    document.addEventListener('keyup', this.handelKey);
  };

  componentWillUnmount = () => {
    document.removeEventListener('keyup', this.handelKey);
  };

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {this.state.pressed
            ? `The last pressed key is [${this.state.key}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
