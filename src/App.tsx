import React from 'react';

type State = {
  keyCode: string
};
export class App extends React.Component<{}, State> {
  state = {
    keyCode: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyDown);
  }

  handleKeyDown = (event: KeyboardEvent) => {
    this.setState({ keyCode: event.code });
  };

  render() {
    const { keyCode } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {keyCode ? `The last pressed key is [${keyCode}]` : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
