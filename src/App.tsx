import { Component } from 'react';
import './App.scss';

interface State {
  message: string
}

export class App extends Component<{}, State> {
  state = {
    message: 'Nothing was pressed yet!',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.pressKeyboard);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.pressKeyboard);
  }

  pressKeyboard = (event: KeyboardEvent) => {
    this.setState(
      { message: `The last pressed key is [${event.key}] ` },
    );
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
