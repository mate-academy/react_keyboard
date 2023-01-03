import React from 'react';

type State = {
  value: string;
};

export class App extends React.Component<{}, State> {
  state = {
    value: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.keyPressHandler);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.keyPressHandler);
  }

  keyPressHandler = (event: KeyboardEvent) => {
    this.setState({ value: event.key });
  };

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {
            (!this.state.value)
              ? 'Nothing was pressed yet'
              : `The last pressed key is [${this.state.value}]`
          }
        </p>
      </div>
    );
  }
}
