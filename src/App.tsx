import React from 'react';

interface State {
  pressedKey: string;
}

export class App extends React.Component<{}, State> {
  state: State = {
    pressedKey: '',
  };

  handleKeyUp?: (event: KeyboardEvent) => void;

  componentDidMount() {
    document.addEventListener(
      'keyup',
      (this.handleKeyUp = (event: KeyboardEvent) => {
        // eslint-disable-next-line no-console
        console.log(event.key);

        this.setState({ pressedKey: event.key });
      }),
    );
  }

  componentWillUnmount() {
    if (this.handleKeyUp) {
      document.removeEventListener('keyup', this.handleKeyUp);
    }
  }

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {pressedKey
            ? `The last pressed key is [${pressedKey}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
