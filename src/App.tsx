import React from 'react';

export class App extends React.Component {
  state = {
    message: 'Nothing was pressed yet',
  };

  componentDidMount() {
    document.addEventListener('keyup', (event) => {
      this.handlerKeyUp(event);
    });
  }

  componentDidUpdate() {
    document.removeEventListener('keyup', (event) => {
      this.handlerKeyUp(event);
    });
  }

  handlerKeyUp(event: KeyboardEvent) {
    this.setState({ message: `The last pressed key is [${event.key}]` });
  }

  render() {
    const { message } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {`${message}`}
        </p>
      </div>
    );
  }
}
