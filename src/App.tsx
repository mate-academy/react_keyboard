/* eslint-disable react/sort-comp */
import { Component } from 'react';

type State = {
  pressedKey: string;
};

export class App extends Component<{}, State> {
  state = {
    pressedKey: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKey);
  }

  // eslint-disable-next-line react/no-deprecated
  componentWillMount() {
    document.removeEventListener('keyup', this.handleKey);
  }

  handleKey = (event: KeyboardEvent) => {
    if (event.code === 'Space') {
      this.setState({ pressedKey: event.code });
    } else {
      this.setState({ pressedKey: event.key });
    }
  };

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {pressedKey === ''
            ? 'Nothing was pressed yet'
            : `The last pressed key is [  ${pressedKey}  ]`}
        </p>
      </div>
    );
  }
}
