import React from 'react';

type State = {
  keyCode: string
};
export class App extends React.Component<{}, State> {
  state = {
    keyCode: 'Nothing was pressed yet',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyDown);
  }

  handleKeyDown = (event: KeyboardEvent) => {
    this.setState({ keyCode: `The last pressed key is [${event.code}]` });
  };

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {this.state.keyCode}
        </p>
      </div>
    );
  }
}
