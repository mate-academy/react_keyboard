import React from 'react';

export class App extends React.Component {
  state = { keypressed: '' };

  updateLastKeyPressed = (event: KeyboardEvent) => {
    this.setState({ keypressed: event.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.updateLastKeyPressed);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.updateLastKeyPressed);
  }

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {this.state.keypressed
            ? `The last pressed key is [${this.state.keypressed}]`
            : `Nothing was pressed yet`}
        </p>
      </div>
    );
  }
}
