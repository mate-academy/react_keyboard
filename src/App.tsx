import React from 'react';

export class App extends React.Component {
  state = {
    keyPressed: '',
  };

  updateKeyPressed = (event: KeyboardEvent) => {
    this.setState({
      keyPressed: event.key,
    });
  }

  componentDidMount(): void {
    document.addEventListener('keyup', this.updateKeyPressed);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.updateKeyPressed);
  }

  render() {
    return (
      <div>
        {this.state.keyPressed ? (
          <p className="App__message">
            {`The last pressed key is [${this.state.keyPressed}]`}
          </p>
        ) : (
          <p className="App__message">Nothing was pressed yet</p>
        )}
      </div>
    );
  }
}
