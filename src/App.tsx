import React from 'react';

type State = {
  keyPress: null | string;
};

export class App extends React.Component<{}, State> {
  state = {
    keyPress: null,
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handlePressKey.bind(this));
  }

  componentWillUnmount() {
    document.addEventListener('keyup', this.handlePressKey.bind(this));
  }

  handlePressKey(e: KeyboardEvent) {
    this.setState({
      keyPress: e.key,
    });
  }

  render() {
    const { keyPress } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {
            keyPress
              ? `The last pressed key is [${keyPress}]`
              : 'Nothing was pressed yet'
          }
        </p>
      </div>
    );
  }
}
