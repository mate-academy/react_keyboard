import React from 'react';

export class App extends React.Component {
  state = {
    message: 'Nothing was pressed yet',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handlKeyPress);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handlKeyPress);
  }

  handlKeyPress = (event: KeyboardEvent) => {
    this.setState(({
      message: `The last pressed key is [${event.key}]`,
    }));
  };

  render() {
    return (
      <div className="App">
        <p className="App__message">{this.state.message}</p>
      </div>
    );
  }
}
