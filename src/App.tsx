import React from 'react';

export class App extends React.Component {
  state = { keyPressed: 'None' };

  componentDidMount(): void {
    document.addEventListener('keyup', this.setNewState);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.setNewState);
  }

  setNewState = (event: KeyboardEvent) => {
    this.setState({ keyPressed: event.key });
  };

  render() {
    return (
      <div className="App">
        {this.state.keyPressed === 'None' ? (
          <p className="App__message">Nothing was pressed yet</p>
        ) : (
          <p className="App__message">{`The last pressed key is [${this.state.keyPressed}]`}</p>
        )}
      </div>
    );
  }
}
