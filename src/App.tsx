// import React from 'react';
import { Component } from 'react';

type State = {
  pressedKey: string;
};

export class App extends Component<{}, State> {
  constructor(props: {}) {
    super(props);

    // eslint-disable-next-line react/state-in-constructor
    this.state = {
      pressedKey: '',
    };

    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  handleKeyUp(event: KeyboardEvent) {
    this.setState({ pressedKey: event.key });
  }

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">{pressedKey ? `The last pressed key is [${pressedKey}]` : 'Nothing was pressed yet'}</p>
      </div>
    );
  }
}
