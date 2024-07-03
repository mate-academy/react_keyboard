import React from 'react';

type State = {
  keyUp: string;
};

export class App extends React.Component<{}, State> {
  state = {
    keyUp: '',
  };

  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({ keyUp: event.key });
  };

  componentDidMount() {
    window.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.handleKeyUp);
  }

  render() {
    const { keyUp } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {keyUp.length === 0
            ? 'Nothing was pressed yet'
            : `The last pressed key is [${keyUp}]`}
        </p>
      </div>
    );
  }
}
