import React from 'react';

export class App2 extends React.Component {
  state = {
    message: 'Nothing was pressed yet',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.setNewMessage);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.setNewMessage);
  }

  setNewMessage = (event: KeyboardEvent) => {
    this.setState({
      message: `The last pressed key is [${event.key}]`,
    });
  };

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {this.state.message}
        </p>
      </div>
    );
  }
}
