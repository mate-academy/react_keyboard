/* eslint-disable react/sort-comp */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-console */
import { Component } from 'react';

type State = {
  pressedKey: boolean,
  message: string,
};

export class App extends Component<{}, State> {
  state = {
    pressedKey: true,
    message: 'Nothing was pressed yet',
  };

  handleClick = (event: KeyboardEvent) => {
    if (event.key) {
      this.setState({ pressedKey: true, message: `The last pressed key is ${event.key}` });
    }

    if (event.key === 'Escape') {
      this.setState({ pressedKey: false });
    }
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleClick);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleClick);
  }

  render() {
    const { pressedKey, message } = this.state;

    return (
      <div className="App">
        <h1 className="App__title">Press any button</h1>
        {pressedKey && <p>{message}</p>}
      </div>
    );
  }
}
