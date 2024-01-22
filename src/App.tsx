import React from 'react';

export class App extends React.PureComponent {
  state = {
    lastKeyPressed: '',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.keypressHandler);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.keypressHandler);
  }

  keypressHandler = (event: KeyboardEvent) => {
    this.setState({ lastKeyPressed: event.key });
  };

  render() {
    const { lastKeyPressed } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {this.state.lastKeyPressed
            ? `The last pressed key is [${lastKeyPressed}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
