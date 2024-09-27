import React from 'react';

export class App extends React.Component {
  state = {
    message: null,
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleOnKeyUp);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleOnKeyUp);
  }

  handleOnKeyUp = (event: KeyboardEvent) => {
    this.setState({ message: event.key });
  }

  render() {
    const { message } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {message
           ? `The last pressed key is [${message}]`
           : `Nothing was pressed yet`
          } 
        </p>
      </div>
    );
  }
}
