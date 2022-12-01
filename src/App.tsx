import { Component } from 'react';

export class App extends Component {
  state = {
    message: 'Nothing was presed yet',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.keyboardClick);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.keyboardClick);
  }

  keyboardClick = (event: KeyboardEvent) => {
    this.setState({ message: `The last pressed key is [${event.key}]` });
  };

  render() {
    const { message } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {message}
        </p>
      </div>
    );
  }
}
