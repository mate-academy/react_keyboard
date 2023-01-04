import React from 'react';

export class App extends React.Component {
  state = {
    lastKey: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.keyBoardListener);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.keyBoardListener);
  }

  keyBoardListener = (event: KeyboardEvent) => {
    this.setState({ lastKey: event.key });
  };

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {this.state.lastKey
            ? `The last pressed key is [${this.state.lastKey}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
